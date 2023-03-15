import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";

const initialState = {
  displayModal: false,
  typeOfFeed: "ALL",
  feed: [
    {
      feedId: "0",
      userImage:
        "https://www.payal.co.uk/wp-content/uploads/image_carousel_thumbs/Dummy-profile-picture-nx3mkaougs1i6vxuvb4p5i72go7eap7qkoqrv1pd8k.png",
      time: Date("October 13, 2014 11:13:00"),
      rewarder: "David Greene",
      rewarderId: "2",
      rewardee: "John Cena",
      rewardeeId: "3",
      reward: 2,
      reason: "Big thanks for help in helping on the outage today!!"
    },
    {
      feedId: "1",
      userImage:
        "https://www.payal.co.uk/wp-content/uploads/image_carousel_thumbs/Dummy-profile-picture-nx3mkaougs1i6vxuvb4p5i72go7eap7qkoqrv1pd8k.png",
      time: Date("October 13, 2014 11:13:00"),
      rewarder: "David Greene",
      rewarderId: "2",
      rewardee: "John Cena",
      rewardeeId: "3",
      reward: 100,
      reason: "Big thanks for help in helping on the outage today!!"
    },
    {
      feedId: "2",
      userImage:
        "https://www.payal.co.uk/wp-content/uploads/image_carousel_thumbs/Dummy-profile-picture-nx3mkaougs1i6vxuvb4p5i72go7eap7qkoqrv1pd8k.png",
      time: Date("October 13, 2014 11:13:00"),
      rewarder: "David Greene",
      rewarderId: "2",
      rewardee: "Jane Doe",
      rewardeeId: "1",
      reward: 2,
      reason: "Big thanks for help in helping on the outage today!!"
    }
  ],
  currentFeed: [],
  userData: {
    name: "Jane Doe",
    userImage:
      "https://www.payal.co.uk/wp-content/uploads/image_carousel_thumbs/Dummy-profile-picture-nx3mkaougs1i6vxuvb4p5i72go7eap7qkoqrv1pd8k.png",
    myRewards: 250,
    given: 100,
    userId: "1"
  }
};

const DataContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <DataContext.Provider value={{ dataState, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
