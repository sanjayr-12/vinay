import { generateAIImage } from "../apis/apiStore";

const Generate = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prompt: string = formData.get("prompt")?.toString() || "";
    if (prompt && prompt?.toString().trim() === "") {
      return;
    }
    try {
      const response = await generateAIImage(prompt);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="py-4 text-lg font-bold">
              {" "}
              This feature is not completed so wait... or die...
            </p>
            <input
              type="text"
              placeholder="Describe your image"
              className="input input-ghost w-full max-w-xs"
                          name="prompt"
                          disabled
            />
            <div className="flex justify-end gap-4">
              <input type="submit" value="generate" className="btn" disabled/>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  (
                    document.getElementById("my_modal_2") as HTMLDialogElement
                  )?.close()
                }
              >
                Close
              </button>
            </div>
            {/* <GenerateModel /> */}
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Generate;
