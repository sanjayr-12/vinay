import { useEffect } from "react";
import { getImages } from "../apis/apiStore";
import { useImageStore } from "../store/Store";
import Images from "./Images";

const Body = () => {
  const setImage = useImageStore((state) => state.setImages);
  const render = useImageStore((state) => state.render);

  useEffect(() => {
    (async () => {
      const result = await getImages();
      setImage(result.images);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);
  return (
    <div className="mt-5 flex justify-center items-center flex-wrap gap-10">
      <Images/>
    </div>
  );
};

export default Body;
