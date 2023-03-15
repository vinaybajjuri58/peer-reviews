const getFilteredFeed = ({ feed, filter, currentUserId }) => {
  switch (filter) {
    case "ALL":
      return feed;
    case "MY_REWARDS":
      return feed.filter((item) => item.rewardeeId === currentUserId);
    default:
      return feed;
  }
};

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        displayModal: !state.displayModal
      };
    case "ADD_FEED_DATA":
      return {
        ...state,
        feed: [...state.feed, action.payload],
        currentFeed: getFilteredFeed({
          feed: [...state.feed, action.payload],
          filter: state.typeOfFeed,
          currentUserId: state.userData.userId
        }),
        userData: {
          ...state.userData,
          given: state.userData.given - Number(action.payload.reward)
        }
      };
    case "FILTER_FEED":
      return {
        ...state,
        currentFeed: getFilteredFeed({
          feed: state.feed,
          filter: state.typeOfFeed,
          currentUserId: state.userData.userId
        })
      };
    case "UPDATE_FEED_TYPE":
      return {
        ...state,
        typeOfFeed: action.payload,
        currentFeed: getFilteredFeed({
          feed: state.feed,
          filter: action.payload,
          currentUserId: state.userData.userId
        })
      };
    default:
      return { ...state };
  }
};
