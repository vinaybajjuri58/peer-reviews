import React, { useState } from "react";
import { useData } from "./../Context";

export const NewRewardModal = () => {
  const { dataState, dispatch } = useData();
  const [error, setError] = useState("");
  const { userData = {}, feed } = dataState;
  const { name, userId, userImage } = userData;
  const [formContent, setFormContent] = useState({
    to: "",
    reward: 0,
    reason: ""
  });
  const { to, reward, reason } = formContent;
  const clickHandler = () => {
    if (to.length > 0 && Number.isInteger(reward) && reason.length > 0) {
      const date = new Date();
      dispatch({
        type: "ADD_FEED_DATA",
        payload: {
          feedId: feed.length + 1,
          userImage: userImage,
          time: date.toDateString(),
          rewarder: name,
          rewarderId: userId,
          rewardee: to,
          rewardeeId: "3",
          reward: reward,
          reason: reason
        }
      });
      setFormContent({
        to: "",
        reward: "",
        reason: ""
      });
      dispatch({
        type: "TOGGLE_MODAL"
      });
    } else {
      if (to.length === 0) {
        setError("Name cannot be empty");
      } else if (!Number.isInteger(reward)) {
        setError("reward has to be a number");
      } else if (reason.length === 0) {
        setError("Reason cannot be empty");
      } else {
        setError("Please check the form values");
      }
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "to":
        setFormContent((initial) => ({ ...initial, to: value }));
        break;
      case "reward":
        setFormContent((initial) => ({ ...initial, reward: Number(value) }));
        break;
      case "reason":
        setFormContent((initial) => ({ ...initial, reason: value }));
        break;
      default:
        setFormContent((initial) => ({ ...initial }));
    }
  };
  return (
    <div className="newRewardModal">
      <button
        className="crossIcon"
        onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
      >
        X
      </button>
      <div className="inputContainer">
        <label>
          <p className="label">To</p>{" "}
        </label>
        <input value={to} name="to" onChange={changeHandler} />
      </div>
      <div className="inputContainer">
        <label>
          <p className="label">Reward</p>{" "}
        </label>
        <input value={reward} name="reward" onChange={changeHandler} />
      </div>
      <div className="inputContainer">
        <label>
          <p className="label">Why?</p>{" "}
        </label>
        <textarea value={reason} name="reason" onChange={changeHandler} />
      </div>
      {error && <p>{error}</p>}
      <button className="rewardButton" onClick={clickHandler}>
        Reward
      </button>
    </div>
  );
};
