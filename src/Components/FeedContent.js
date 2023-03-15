import React, { useEffect } from "react";
import { SingleFeedItem } from "./SingleFeedItem";
import { useData } from "./../Context";

export const FeedContent = () => {
  const { dataState = {}, dispatch } = useData();
  const { currentFeed, typeOfFeed } = dataState;
  useEffect(() => {
    dispatch({
      type: "FILTER_FEED"
    });
  }, [dispatch]);
  return (
    <div>
      <div className="feedHeader">
        <button
          className={typeOfFeed === "ALL" ? "selectedNavButton" : "navButton"}
          onClick={() =>
            dispatch({
              type: "UPDATE_FEED_TYPE",
              payload: "ALL"
            })
          }
        >
          Feed
        </button>
        <button
          className={
            typeOfFeed === "MY_REWARDS" ? "selectedNavButton" : "navButton"
          }
          onClick={() =>
            dispatch({
              type: "UPDATE_FEED_TYPE",
              payload: "MY_REWARDS"
            })
          }
        >
          My Rewards
        </button>
      </div>
      <div className="border">
        <button
          className="addRewardButton"
          onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
        >
          +
        </button>
      </div>
      <div className="feedContainer">
        {currentFeed.map((feedItem) => {
          return (
            <SingleFeedItem
              key={feedItem.feedId}
              userImage={feedItem.userImage}
              reason={feedItem.reason}
              timeStamp={feedItem.time}
              rewardee={feedItem.rewardee}
              rewarder={feedItem.rewarder}
            />
          );
        })}
      </div>
    </div>
  );
};
