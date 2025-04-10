import { useState } from "react";
import { deleteImage } from "../apis/apiStore";
import { useImageStore, useUserStore } from "../store/Store";
import { ImageType } from "../types/store.types";
import toast, { Toaster } from "react-hot-toast";

const Images = () => {
  const images = useImageStore((state) => state.images);
  const user = useUserStore((state) => state.user);
  const reRender = useImageStore((state) => state.reRender);
  const [loading, setLoading] = useState(false);
  const [imageId, setImageId] = useState("");

  const handleDelete = async (docId: string, public_id: string) => {
    try {
      setLoading(true);
      const response = await deleteImage(docId, public_id);
      toast.success(response.message);
      reRender();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  if (images.length === 0) {
    return <p>No images</p>;
  }
  return (
    <>
      {images.map((i: ImageType) => (
        <div className="card bg-base-100 w-96 shadow-xl" key={i.url}>
          <figure className="w-full h-full">
            <img
              src={i.url}
              alt={i.imageName}
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => {
                const modal = document.getElementById(
                  `modal-${i.url}`
                ) as HTMLDialogElement;
                modal?.showModal();
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{i.imageName}</h2>
            <p>
              uploaded by{" "}
              {user?._id === i.uploadedBy._id ? "You" : i.uploadedBy.name}
            </p>
          </div>
          {user?._id === i.uploadedBy._id ? (
            <div className="flex justify-end">
              <button
                className="btn btn-error"
                onClick={() => (
                  handleDelete(i._id, i.public_id), setImageId(i._id)
                )}
                disabled={loading && i._id === imageId ? loading : false}
              >
                {loading && i._id === imageId ? "deleting..." : "X"}
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button className="btn btn-secondary text-lg">♡</button>
            </div>
          )}
          <dialog id={`modal-${i.url}`} className="modal">
            <div className="modal-box">
              <img
                src={i.url}
                alt={i.imageName}
                className="object-cover w-full h-full"
              />
              <div className="modal-action">
                <button
                  className="btn"
                  onClick={() => {
                    const modal = document.getElementById(
                      `modal-${i.url}`
                    ) as HTMLDialogElement;
                    modal?.close();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      ))}
      <Toaster />
    </>
  );
};

export default Images;
