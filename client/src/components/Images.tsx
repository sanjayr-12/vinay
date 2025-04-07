import { useImageStore } from "../store/Store";
import { ImageType } from "../types/store.types";

const Images = () => {
  const images = useImageStore((state) => state.images);

  if (images.length === 0) {
    return <p>No images</p>;
  }
  return (
    <>
      {images.map((i: ImageType) => (
        <div className="card bg-base-100 w-96 shadow-xl" key={i.url}>
          <figure>
            <img src={i.url} alt={i.imageName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{i.imageName}</h2>
            <p>uploaded by {i.uploadedBy.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Images;
