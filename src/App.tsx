import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[90vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
