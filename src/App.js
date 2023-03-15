import { Header, NewRewardModal, FeedContent } from "./Components";
import { useData } from "./Context";
import "./styles.css";

export default function App() {
  const { dataState = {} } = useData();
  const { displayModal } = dataState;
  return (
    <div className="App">
      <Header />
      <FeedContent />
      {displayModal && <NewRewardModal />}
    </div>
  );
}
