import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Hubeau extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: []
      };
    }

    componentDidMount() {
      fetch("https://hubeau.eaufrance.fr/api/v0/etat_piscicole/lieux_peche?code_espece_poisson=ABH%2CABL&format=json&size=50")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }


    render() {
      const { error, isLoaded, data } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
         <div>
              <MapContainer center={[49.766063546, 3.188467932]} zoom={7} scrollWheelZoom={false}>
             <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

              {data.map(data => <Marker key={data.id} position={[data.y, data.x]}>
                <Popup>
                   {data.localisation}
                </Popup>
              </Marker>)}

            </MapContainer>       
             <ul>
                {          
                    data.map(data => (
                    <li key={data.id}>
                     {data.x} {data.y}
                    </li>
                     ))
                }
            </ul>
          </div>
        );
      }
    }
  }

  export default Hubeau;