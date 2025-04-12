const GenerateModel = () => {
  return (
    <div className="modal-action justify-end gap-4">
      <button
        type="button"
        className="btn"
        onClick={() =>
          (document.getElementById("my_modal_2") as HTMLDialogElement)?.close()
        }
      >
        Close
      </button>
    </div>
  );
};

export default GenerateModel;
