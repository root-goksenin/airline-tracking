
import './App.css'
import NavBar from './react_components/NavBar'
import Map from './react_components/Map'
import Header from './react_components/Header';

function App() {
  return (
    <>
    <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""/>
    <div className='grid'>
      <Header />
      <NavBar/>
      <Map/>
    </div>
    </>
  )
}

export default App
