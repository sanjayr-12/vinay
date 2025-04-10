import { useState } from "react";
import { imageUpload } from "../apis/apiStore";
import { useImageStore } from "../store/Store";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const Upload = () => {
  const reRender = useImageStore((state) => state.reRender);
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false);
  const handleImageUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("img");
    const imageName: string = formData.get("imgName")?.toString() || "";
    if (!file || imageName?.toString().trim() == "") {
      return;
    }
    if (file && file instanceof File) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setLoading(true);
        const result = await imageUpload(base64String, imageName);
        setLoading(false);
        reRender();
        toast.success(result.message)
        formRef.current?.reset()
      };

      reader.readAsDataURL(file);
    } else {
      toast.error("No file selected or file is not valid");
    }
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleImageUpload}
            ref={formRef}
            className="flex flex-col gap-4"
          >
            <p className="py-4 text-lg font-bold">Choose an image to upload</p>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full max-w-xs"
              name="img"
              required
            />
            <input
              type="text"
              placeholder="Name of the image"
              className="input w-full max-w-xs"
              name="imgName"
              required
            />
            <div className="modal-action justify-end gap-4">
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "uploading..." : "Submit"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  (
                    document.getElementById("my_modal_1") as HTMLDialogElement
                  )?.close()
                }
              >
                Close
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </dialog>
    </>
  );
};

export default Upload;
