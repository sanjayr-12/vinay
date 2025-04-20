import { useEffect } from "react";
import { getImages } from "../apis/apiStore";
import { useImageStore } from "../store/Store";
import Images from "../components/Images";
import NavBar from "../components/NavBar";

const Design = () => {
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
    <>
      <NavBar />
      <div className="mt-5 flex justify-center items-center flex-wrap gap-10">
        <Images />
      </div>
    </>
  );
};

export default Design;
