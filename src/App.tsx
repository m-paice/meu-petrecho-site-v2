import { ToastContainer } from "react-toastify";

import { LayoutContextProvider } from "./context/layout";
import { Routes } from "./routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <LayoutContextProvider>
        <Routes />
      </LayoutContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
