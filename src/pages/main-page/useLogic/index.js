import { useState, useEffect } from "react";
import useHandleErrorAsync from "../../../servicies/handle-error-async";
import useReadAirports from "../../../servicies/read-airports";
import useReadAnime from "../../../servicies/read-anime";
import useReadAnimeList from "./../../../servicies/read-anime-list/index";
import useReadRelatedPlaces from "../../../servicies/read-related-places";
import useReadRelatedPlace from "../../../servicies/read-related-place";

import useAddBookMark from "../../../servicies/add-bookmark";
const defaultDepartureArea = {
  lat: 35.652832,
  lng: 139.79,
};

const useLogic = () => {
  const readAirports = useReadAirports();
  const handleErrorAsync = useHandleErrorAsync();
  const readAnimeList = useReadAnimeList();
  const readAnime = useReadAnime();
  const readRelatedPlaces = useReadRelatedPlaces();
  const readRelatedPlace = useReadRelatedPlace();
  const addBookMark = useAddBookMark();
  const [airports, setAirports] = useState([]);
  const [focusedLocation, setFocusedLocation] = useState(undefined);
  const [animeList, setAnimeList] = useState([]);
  const [currentAnime, setCurrentAnime] = useState(null);
  const [selectedAnime, setSelectedAnime_] = useState(null);
  const [relatedPlaces, setRelatedPlaces] = useState([]);
  const [relatedPlace, setRelatedPlace] = useState();
  const [bookMark, setBookMark] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [isDeparturePointOpened, setIsDeparturePointOpened] = useState(true);
  const [isAnimationsOpened, setIsAnimationsOpened] = useState(false);
  const [isAnimationDetailsOpened, setIsAnimationDetailsOpened] =
    useState(false);

  const init = async () => {
    const airports = await readAirports();
    const animeList = await readAnimeList();
    setAirports(airports);
    setAnimeList(animeList);
  };

  const selectBookMark = async (animeId) => {
    await addBookMark(animeId);
  };

  const selectDepartureArea = async (payload) => {
    if (typeof payload == "string") {
      const depatureArea = airports.find(
        (currentAirport) => currentAirport.id === payload
      );
      setFocusedLocation({
        position: depatureArea.coordinates,
        name: depatureArea.name,
      });
    }
    if (typeof payload == "object") {
      setFocusedLocation({
        position: payload.coordinates,
        name: payload.name,
      });
    }
  };

  const getAnimeInfo = async () => {
    if (selectedAnime != null) {
      const animeInfo = await readAnime(selectedAnime);
      return animeInfo;
    }
  };
  const getRelatedPlaces = async () => {
    if (currentAnime != null) {
      const relatedPlaces = await readRelatedPlaces(currentAnime.relatedPlaces);
      return relatedPlaces;
    }
  };
  const getRelatedPlace = async ()=>{
    if(selectedPlace !=null){
      const relatedPlace = await readRelatedPlace(selectedPlace._id);
      return relatedPlace
    }
  }
  const impl = async () => {
    const animeInfo = await getAnimeInfo();
    setCurrentAnime(animeInfo);
  };
  const impl2 = async () => {
    const relatedPlaces = await getRelatedPlaces();
    setRelatedPlaces(relatedPlaces);
  };
  const impl3 = async () => {
    const relatedPlace = await getRelatedPlace();
    setRelatedPlace(relatedPlace);
  };
  useEffect(() => {
    impl3();
  }, [selectedPlace]);
  useEffect(() => {
    impl();
  }, [selectedAnime]);
  useEffect(() => {
    impl2();
  }, [currentAnime]);

  useEffect(() => {
    init();
  }, []);

  const requsetModalOpen = () => {
    setIsMediaModalOpen(true);
  };

  const handleIsDeparturePointOpenedChange = (event, isExpanded) => {
    console.log(isExpanded);
    setIsDeparturePointOpened(isExpanded);
  };

  const handleIsAnimationsOpenedChange = (event, isExpanded) => {
    setIsAnimationsOpened(isExpanded);
  };

  const handleIsAnimationDetailsOpenedChange = (event, isExpanded) => {
    setIsAnimationDetailsOpened(isExpanded);
  };
  const setSelectedAnime = (selectedAnime) => {
    setSelectedAnime_(selectedAnime);
    setIsAnimationsOpened(false);
    setIsAnimationDetailsOpened(true);
  };

  return {
    airports, // !!!
    airportIsLoading: !airports,
    relatedPlaceLoading : !relatedPlace,
    animeList,
    animeListIsLoading: !animeList,
    departureArea: focusedLocation?.position ?? defaultDepartureArea,
    selectDepartureArea,
    mediaMarkers: relatedPlaces, // !!!
    selectedPlace,
    setSelectedPlace,
    setSelectedAnime,
    isMediaModalOpen,
    setIsMediaModalOpen,
    requsetModalOpen,
    readAnime,
    currentAnimeIsLoading: !currentAnime,
    currentAnime,
    setCurrentAnime,
    placesIsLoading: !relatedPlaces,
    relatedPlaces,
    relatedPlace,
    isDeparturePointOpened,
    isAnimationsOpened,
    isAnimationDetailsOpened,
    selectBookMark,
    handleIsDeparturePointOpenedChange,
    handleIsAnimationsOpenedChange,
    handleIsAnimationDetailsOpenedChange,
  };
};

export default useLogic;
/*
const readMediaList = useReadMediaList();
const readMarkersByMedia = useReadMarkersByMedia();

const [mediaList, setMediaList] = useState();


const getMarkers = () => {
  if (selectedMedia != null) {
    const markers = await readMarkersByMedia(selectedMedia.id);
    return markers;
  }
}



// services/read-markers-by-media.js

const useReadMarkersByMedia = () => {
  return async (mediaId) => {
    const axiosResult = await axios({
      method: 'get',
      url: `${apiAddr}/markers`,
      params: {media: mediaId},
    });

    const result = axiosResult.data;

    return result;
  }
}


// EXPRESS 

const router = express.Router();
router.get('/', async (req, res) => {
  // 임베딩
  if (req.query.media === 'umamusume') {
    res.send([
      {
        name: '우마무스메(X네 집)',
        position: {lat: 123, lng: 123},
      },
      {
        name: '우마무스메(Y네 집)',
        position: {lat: 123, lng: 123},
      },
      {
        name: '우마무스메(Z네 집)',
        position: {lat: 123, lng: 123},
      },
    ]);
  }


  // DB
  const markers = await Marker.find({media: req.query.media}).exec();

  res.send(markers.map((marker) => {
    return {
      id: marker._id.toString(),
      name: marker.name,
      position: marker.position,
    };
  }))
});

app.use('/markers', router);


*/
