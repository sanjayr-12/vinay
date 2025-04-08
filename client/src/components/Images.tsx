import { useImageStore, useUserStore } from "../store/Store";
import { ImageType } from "../types/store.types";

const Images = () => {
  const images = useImageStore((state) => state.images);
  const user = useUserStore((state) => state.user);
  if (images.length === 0) {
    return <p>No images</p>;
  }
  return (
    <>
      {images.map((i: ImageType) => (
        <div className="card bg-base-100 w-96 h-96 shadow-xl" key={i.url}>
          <figure className="w-full h-full">
            <img
              src={i.url}
              alt={i.imageName}
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => {
                const modal = document.getElementById(`modal-${i.url}`) as HTMLDialogElement;
                modal?.showModal();
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{i.imageName}</h2>
            <p>
              uploaded by {user?._id === i.uploadedBy._id ? "You" : i.uploadedBy.name}
            </p>
          </div>
          {user?._id === i.uploadedBy._id ? (
            <div className="flex justify-end">
              <button className="btn btn-error">X</button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button className="btn btn-secondary text-lg">♡</button>
            </div>
          )}
          <dialog id={`modal-${i.url}`} className="modal">
            <div className="modal-box">
              <img src={i.url} alt={i.imageName} className="object-cover w-full h-full" />
              <div className="modal-action">
                <button className="btn" onClick={() => {
                  const modal = document.getElementById(`modal-${i.url}`) as HTMLDialogElement;
                  modal?.close();
                }}>Close</button>
              </div>
            </div>
          </dialog>
        </div>
      ))}
    </>
  );
};

export default Images;
