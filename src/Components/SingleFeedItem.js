export const SingleFeedItem = ({
  userImage,
  reason,
  timeStamp,
  rewardee,
  rewarder
}) => {
  return (
    <div className="feedItemContainer">
      <img className="userImage" src={userImage} alt="dummy User" />
      <div className="feedItemContentContainer">
        <p className="rewarderRewardee">
          {rewardee} by {rewarder}
        </p>
        <p className="timeStamp">{timeStamp}</p>
        <p className="reason">{reason}</p>
      </div>
    </div>
  );
};
