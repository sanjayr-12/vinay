import { useEffect, useState } from "react";
import { useFeedBackStore } from "../store/Store";
import { addFeedBack, getUserFeedBack } from "../apis/apiStore";
import toast, { Toaster } from "react-hot-toast";

const FeedBackCard = () => {
  const setFeedBack = useFeedBackStore((state) => state.setFeedBack);
  const feedback = useFeedBackStore((state) => state.feedback);
  const [depend, setDepend] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getUserFeedBack();
        setFeedBack(response.data);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("server error");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depend]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const content = formData.get("feedback")?.toString();
      if (!content || content?.toString().trim() === "") return;
      const response = await addFeedBack(content);
      setDepend(depend + 1);
      toast.success(response.message);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("server error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5">
      <h1 className="card-title flex justify-center">FeedBack!!!</h1>
      <div className="flex justify-center items-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex gap-5 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Enter ur feedback!!!"
            className="input input-bordered w-full max-w-xs"
            name="feedback"
          />
          <input
            type="submit"
            value={loading ? "submiting..." : "submit"}
            className="btn"
            disabled={loading}
          />
        </form>
      </div>
      <div className="mt-5 flex justify-center items-center flex-wrap gap-10">
        {feedback.length > 0 &&
          feedback.map((item) => {
            return (
              <div
                className={`card w-96 ${
                  item.isAddressed ? "bg-green-500" : "bg-red-700"
                }`}
              >
                <div className="card-body">
                  <p className="card-title">{item.content}</p>
                  <h2>
                    {item.isAddressed
                      ? `Addressed by ${item.addressedBy.name}`
                      : "Status: Pending"}
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
      <Toaster />
    </div>
  );
};

export default FeedBackCard;
