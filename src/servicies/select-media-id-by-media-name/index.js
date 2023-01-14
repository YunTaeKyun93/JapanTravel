import useReadMediaList from "../read-media-list";
const useSelectMediaIdByMedia = () => {
  const readMediaList = useReadMediaList();
  return async (mediaName) => {
    const mediaList = await readMediaList();

    const media = mediaList.find((media) => media.name == mediaName);
    const mediaId = media.id;
    return mediaId;
  };
};

export default useSelectMediaIdByMedia;
