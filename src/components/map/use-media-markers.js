import React, { useState, useEffect } from "react";

const infoWindowContents = ({ name }) => `
<div>
  <h3 style="color: pink">${name}</h3>
</div>
`;

const useMediaMarkers = ({
  map,
  mediaMarkers,
  requsetModalOpen,
  setSelectedPlace
}) => {
  const [mediaMarkerInsts, setMediaMarkerInsts] = useState([]);
  const updateMediaMarkers = () => {
    // 맵이 초기화가 되지 않으면, 다음번에 실행
    if (map == null) {
      return;
    }

    mediaMarkerInsts.forEach((media) => media.setMap(null));

    // 마커를 생성한다.
    const newMediaMarkerInsts = mediaMarkers.map((marker) => {
      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContents({
          title: marker.name
        }),
        ariaLabel: marker.name
      });

      const newMediaMarkerInst = new window.google.maps.Marker({
        position: marker.coordinates,
        title: marker.locationName,
        map,
        animation: window.google.maps.Animation.BOUNCE
      });

      newMediaMarkerInst.addListener("click", () => {
        requsetModalOpen();
        setSelectedPlace(marker);
      });

      newMediaMarkerInst.addListener("mouseover", () => {
        console.log(111)
        // infoWindow.open({
        //   anchor: newMediaMarkerInsts,
        //   map
        // });
      });

      return newMediaMarkerInst;
    });

    // 새로 생성된 마커를 저장한다.
    setMediaMarkerInsts(newMediaMarkerInsts);
  };

  useEffect(() => {
    updateMediaMarkers();
  }, [map, mediaMarkers]);
};

export default useMediaMarkers;
