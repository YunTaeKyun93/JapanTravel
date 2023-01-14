import React, { useState, useEffect } from "react";

const infoWindowContents = ({ title, description }) => `
<div>
  <h2 style="color: pink">${title}</h2>
  <p>${description}</p>
</div>
`;

const useAirportMarkers = ({ map, airportMarkers }) => {
  const [aiportMarkerInsts, setAirportMarkerInsts] = useState([]);

  const updateAirportMarkers = () => {
    // 맵이 초기화가 되지 않으면, 다음번에 실행
    if (map == null) {
      return;
    }
    // 마커를 지운다.
    aiportMarkerInsts.forEach((airport) => airport.setMap(null));

    // 마커를 생성한다.
    const newAirportMarkerInsts = airportMarkers.map((airport) => {
      // InfoWindow도 생성
      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContents({
          title: airport.name,
          description: airport.description
        }),
        ariaLabel: airport.name
      });

      const newAirportMarkerInst = new window.google.maps.Marker({
        position: airport.coordinates,
        title: airport.name,
        map
        // label: {
        //   text: "\ue415",
        //   fontFamily: "Material Icons",
        //   color: "blue",
        //   fontSize: "18px"
        // }
      });

      // 마커가 클릭되었을 때 InfoWindow가 열리도록 이벤트 등록
      newAirportMarkerInst.addListener("click", () => {
        infoWindow.open({
          anchor: newAirportMarkerInst,
          map
        });
      });
      return newAirportMarkerInst;
    });
    // 새로 생성된 마커를 저장한다.
    setAirportMarkerInsts(newAirportMarkerInsts);
  };

  useEffect(() => {
    updateAirportMarkers();
  }, [map, airportMarkers]);
};

export default useAirportMarkers;
