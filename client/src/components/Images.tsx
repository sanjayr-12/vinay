import { useState } from "react";
import { deleteImage } from "../apis/apiStore";
import {
  useImageCategoryStore,
  useImageStore,
  useUserStore,
} from "../store/Store";
import { ImageType } from "../types/store.types";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../utils/Loading";

const Images = ({ images }: { images: ImageType[] }) => {
  const user = useUserStore((state) => state.user);
  const reRender = useImageStore((state) => state.reRender);
  const [imageId, setImageId] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const loading = useImageCategoryStore((state) => state.loading);

  const handleDelete = async (docId: string, public_id: string) => {
    try {
      setDeleteLoading(true);
      const response = await deleteImage(docId, public_id);
      toast.success(response.message);
      reRender();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
        return <p>No images</p>;
      }
    } finally {
      setDeleteLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (images.length === 0) {
    return <p>No images</p>;
  }

  const handleDownload = async (url: string, name: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to download image");
      }
    }
  };

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
            <div className="flex justify-end gap-4">
              <button
                className="btn btn-error"
                onClick={() => (
                  handleDelete(i._id, i.public_id), setImageId(i._id)
                )}
                disabled={
                  deleteLoading && i._id === imageId ? deleteLoading : false
                }
              >
                {deleteLoading && i._id === imageId ? "deleting..." : "X"}
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleDownload(i.url, i.imageName)}
              >
                Download
              </button>
            </div>
          ) : (
            <div className="flex justify-end gap-4">
              <button className="btn btn-secondary text-lg">♡</button>
              <button
                className="btn btn-success"
                onClick={() => handleDownload(i.url, i.imageName)}
              >
                Download
              </button>
            </div>
          )}

          <dialog id={`modal-${i.url}`} className="modal">
            <div className="modal-box">
              <img
                src={i.url}
                alt={i.imageName}
                className="object-cover w-full h-full"
              />
              <div className="modal-action flex gap-5">
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
                <button
                  className="btn btn-success"
                  onClick={() => handleDownload(i.url, i.imageName)}
                >
                  Download
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
