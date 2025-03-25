import {useSelector} from "react-redux"
export function haversineDistance(coord1, coord2) {
    const toRad = (deg) => deg * (Math.PI / 180);

    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;

    const R = 6371; // Radius of Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in km
}


export const calcLocation = (location,events) => {
//   const events = useSelector((state) => state.events.events.events);
  const distance = events.map((event) => {
    return [haversineDistance(location,event.location),event.id]
  })  
  console.log('distance :>> ', distance);
}