import { useLoadingStore } from "../store/Store";

const UploadModel = () => {
  const loading = useLoadingStore((state)=>state.uploadLoading)
  return (
    <div className="modal-action justify-end gap-4">
      <button
        type="button"
        className="btn"
        onClick={() =>
          (document.getElementById("my_modal_1") as HTMLDialogElement)?.close()
        }
      >
        Close
      </button>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? "uploading..." : "Submit"}
      </button>
    </div>
  );
}

export default UploadModel