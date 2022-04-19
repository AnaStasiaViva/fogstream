import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const MapsNews = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      style={{ height: "100vh", width: "100vw" }}
      defaultZoom={8}
      defaultCenter={{ lat: -8.409518, lng: 115.188919 }}
      mapContainerStyle={containerStyle}
    >
      <Marker position={{ lat: -8.409518, lng: 115.188919 }} />
    </GoogleMap>
  ))
);

export default MapsNews;
