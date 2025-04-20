import { useEffect, useState } from "react";
import { useFeedBackStore } from "../store/Store";
import { actionFeedBack, getAllFeedBack } from "../apis/apiStore";
import toast, { Toaster } from "react-hot-toast";

const ActionFeedBackCard = () => {
  const setFeedBack = useFeedBackStore((state) => state.setFeedBack);
  const feedback = useFeedBackStore((state) => state.feedback);
  const [depend, setDepend] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getAllFeedBack();
        setFeedBack(response.data);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("server error");
        }
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depend]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleAction = async (id: string) => {
    try {
      const response = await actionFeedBack(id);
      toast.success(response.message);
      setDepend(depend + 1);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("server error");
      }
    }
  };

  return (
    <div className="mt-10 flex justify-center items-center flex-wrap gap-10">
      {feedback.length > 0 ? (
        feedback.map((item) => {
          return (
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <p className="card-title">{item.content}</p>
                <br />
                <h2> feedback by {item.user.name}</h2>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => handleAction(item._id)}
                  >
                    Resolve
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="mt-10 card-title">looks like no one gave feedback</p>
      )}
      <Toaster />
    </div>
  );
};

export default ActionFeedBackCard;
