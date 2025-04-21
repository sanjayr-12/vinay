import { useEffect } from "react";
import { getImages } from "../apis/apiStore";
import { useImageCategoryStore, useImageStore } from "../store/Store";
import Images from "../components/Images";
import NavBar from "../components/NavBar";
import { ImageCategoryEnum } from "../types/store.types";

const Analysis = () => {
  const setImage = useImageStore((state) => state.setImages);
  const render = useImageStore((state) => state.render);
  const images = useImageStore((state) => state.images);
  const setLoading = useImageCategoryStore((state) => state.setLoading);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await getImages(ImageCategoryEnum.ANALYTICS);
        setImage(result.images);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  return (
    <>
      <NavBar />
      <div className="mt-5 flex justify-center items-center flex-wrap gap-10">
        <Images images={images} />
      </div>
    </>
  );
};

export default Analysis;
