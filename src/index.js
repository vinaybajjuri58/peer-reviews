import { createRoot } from "react-dom/client";
import { DataProvider } from "./Context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <DataProvider>
    <App />
  </DataProvider>
);
