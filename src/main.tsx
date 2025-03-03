import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import { persistor, store } from "./Redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster richColors position="bottom-right" />
        <Layout />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
