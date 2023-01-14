import axios from "axios";
import useApiAddr from "../api-address";
const useReadAirports = () => {
  const apiAddr = useApiAddr();
  return async () => {
    
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddr}/airports`,
    });
    const airports = axiosResult.data;
    return airports;
  };
};

/*
class Airport {}

clas Marker {}

Airport airport = new Airport();
Marker marker = airport; // (X)
Marker marker = airport.getMarker(); // (O)


*/

export default useReadAirports;


// const useReadAirports = () => {
//     return async () => {
//       const airports = [
//         {
//           name: "나리타 국제 공항",
//           coordinates: { lat: 35.82898308934037, lng: 140.4050010132756 }
//         },
//         {
//           name: "도쿄 국제 공항",
//           coordinates: { lat: 35.597356946162755, lng: 139.77740253678652 }
//         },
//         {
//           name: "주부 국제 공항",
//           coordinates: { lat: 34.91794776116983, lng: 136.82959151085305 }
//         },
//         {
//           name: "오사카 국제 공항",
//           coordinates: { lat: 34.85164501705616, lng: 135.43651307440382 }
//         },
//         {
//           name: "간사이 국제 공항",
//           coordinates: { lat: 34.49651239012767, lng: 135.2307487324147 }
//         },
//         {
//           name: "후쿠오카 공항",
//           coordinates: { lat: 33.69214592429649, lng: 130.43758752955762 }
//         }
//       ];
//       return airports;
//     };
//   };
  
//   export default useReadAirports;