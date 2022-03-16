import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'lrm-graphhopper'
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const CreateRoutineMachineLayer = ({ checkBikeAdress, userLat, userLong, bikeLat, bikeLong }) => {
    const instance = L.Routing.control({
    waypoints: [
      L.latLng(userLat, userLong),
      L.latLng(bikeLat, bikeLong)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    createMarker: function() {
      return null
    },
    router: new L.Routing.GraphHopper('deebe34a-a717-4450-aa2a-f6de3ec9b443', {
      urlParameters: {
          vehicle: 'foot'
      }}),
    show: false, 
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  })


  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;

