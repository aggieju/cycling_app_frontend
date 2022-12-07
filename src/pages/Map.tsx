import L, { divIcon, icon, Icon, LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, MarkerProps, useMapEvents, } from 'react-leaflet';
//import { amsterdamMuseums } from '../../src/data/data'
import { MuseumType } from "../../src/typed";
//npm i --save-dev @types/leaflet


function MyComponent() {
    const map = useMapEvents({
        click: (e) => {
            const { lat, lng } = e.latlng;
            L.marker([lat, lng]).addTo(map);
            console.log(e.latlng.lat, e.latlng.lng);
        }
    });
    return null;
}


export const amsterdamMuseums = [
    {
        name: "Nemo",
        imageUrl: "https://img.static-kl.com/images/media/D7181720-93BB-49CF-A95E31167904489B?aspect_ratio=1:1&min_width=912",
        latitude: 52.373989,
        longitude: 4.912080
    },
    {
        name: "Van Gogh",
        imageUrl: "https://parkbee.com/wp-content/uploads/2017/08/vangoghmuseum-scaled.jpg",
        latitude: 52.357922,
        longitude: 4.881320
    },
    {
        name: "Anne Frank House",
        imageUrl: "https://www.therestlessworker.com/wp-content/uploads/2017/05/Untitled-design-6-1.jpg",
        latitude: 52.375080,
        longitude: 4.884070
    },
    {
        name: "Rijksmuseum",
        imageUrl: "https://www.reisroutes.be/userfiles/fotos/het-rijksmuseum-in-amsterdam_4970_xl.jpg",
        latitude: 52.359940,
        longitude: 4.885390
    },
    {
        name: "Eye Film",
        imageUrl: "https://www.hotelamsterdamcentre.com/wp-content/uploads/2018/08/eye_film_museum-740x494.jpg",
        latitude: 52.384140,
        longitude: 4.901290
    }
]



export const Map = () => {

    interface MuseumState {
        amsterdamMuseums: MuseumType[];
    }

    return (

        <div className="container" style={{ width: "500", height: "700" }}>
            <div
                className="card"
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0%",
                    backgroundColor: "ghostwhite",
                }}
            ></div>
            <MapContainer center={[-43.83841, -72.36991]} zoom={13} scrollWheelZoom={false} style={{ height: "700px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"

                />
                <Marker position={[-43.83841, -72.36991]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {amsterdamMuseums.map(museum => (
                    // the marker is every pointer you see on the map
                    <Marker key={museum.name} position={[museum.latitude, museum.longitude]}>


                        {/* when we click on the marker, we see the popup */}
                        <Popup>
                            <img alt={museum.name} style={{ width: "100px", borderRadius: "0.5em" }} src={museum.imageUrl} />
                            <p>{museum.name}</p>
                        </Popup>


                    </Marker>

                ))}
                <MyComponent />
            </MapContainer>
        </div>
    )
}




