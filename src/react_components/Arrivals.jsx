
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.icao;
}

export default function Arrivals() {
    const contact = useLoaderData();
    console.log(contact);
    return (
      <div id="error-page">
        <h1>Arrivals</h1>
      </div>
    );
  }