
import {Link} from 'react-router-dom';
import { useLayoutEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../styles/map.css'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet';
import marker from '../assets/icons8-airport-64.png';

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [45,45],     
});

export default function Map(){
    const [map, setMap] = useState([{icao:"null", position:[1,1]}]);
    useLayoutEffect(() => {
        async function fetches(){
            const response = await fetch('http://localhost:8000/airports');
            const json = await response.json();
            const mapping = json.map((a) => {return {icao: a.icao, region_name: a.region_name, name: a.airport, lat: parseFloat(a.latitude), lon: parseFloat(a.longitude)}});
            setMap(mapping);
        };
        fetches();
    }, []);
    return(
    <div className='map-container'>
    <MapContainer center={[30,30]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution= '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
                accessToken='UKQKVrQKsKuMQlUVJLsDUnzmHbeNEEQIZKDcrXp475FynYi93nYbgoP4iM8Xf6tp'
            />
            <MarkerClusterGroup chunkedLoading>
            {map.map((elem, idx) =>{
            return(
                elem.lat && elem.lon && <Marker data= {elem.icao} key = {idx} position={[elem.lat,elem.lon]} icon={myIcon} eventHandlers={{
                    click: (e) => {
                      
                    },
                  }}>
                   <Popup>
                        <span style={{"fontWeight": "bold"}}> Name:  </span>
                        <span> {elem.name && `${elem.name}`} </span> <br/>
                        <span style={{"fontWeight": "bold"}}> Region Name:  </span>
                        <span> {elem.region_name && `${elem.region_name}`} </span> <br/>
                        <span style={{"fontWeight": "bold"}}>ICAO: </span>
                        <span> {elem.icao && `${elem.icao}`} </span> <br/>
                        <span style={{"fontWeight": "bold"}}> Latitude:  </span>
                        <span> {elem.lat && `${elem.lat}`} </span> <br/>
                        <span style={{"fontWeight": "bold"}}>Longitude: </span>
                        <span> {elem.lon && `${elem.lon}`} </span>  <br/>
                        <Link to={`/depatures/${elem.icao}`} style={{"padding": "4px", "color": "blue", 'border': 'solid 1px black'}}> Departures </Link>
                        <Link to={`/arrivals/${elem.icao}`} style={{"padding": "4px", "color": "red", 'border': 'solid 1px black', 'margin' : '10px'}}> Arrivals </Link>
                       </Popup>
                 </Marker>
            )})}
            </MarkerClusterGroup>         
    </MapContainer>
    </div>)

}