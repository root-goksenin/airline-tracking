import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const now = Date.now()
    const three_hours = now - 5*60*60*24;

    let response = await fetch(`http://localhost:8000/departure/${params.icao}/${three_hours}/${now}`);
    let parsed = await response.json();
    console.log(`http://localhost:8000/departure/${params.icao}/${now}/${three_hours}`);
    return parsed;
}
export default function Departures() {
    const contact = useLoaderData();
    console.log(contact);
    return (
      <div id="error-page">
        <h1>Depatures</h1>
      </div>
    );
  }