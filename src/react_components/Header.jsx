import '../styles/header.css';
import Airplane from '../assets/Airport_symbol.svg'
export default function Header(){
    return (
        <>
        <h1 className='title'> Search for departure and arrival</h1>
        <img src={Airplane} className="header-image"/>
        </>
    )

}