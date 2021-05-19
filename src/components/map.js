import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class Map extends React.Component {
    render() {
        return (
            <div className="App-map">
                {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer> */}
                <div>Should display Open street map</div>
            </div>
        );
    }
}

export default Map;