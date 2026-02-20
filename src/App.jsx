import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import SearchContainer from "./components/Search/SearchContainer";
import HomeContent from "./components/HomeContent/HomeContent";
import Home from "./Pages/Home";
import ComingSoon from "./components/ComingSoon";
import FilterComponet from "./components/FilterComponent/FilterComponent";
import CalendarComponent from "./components/Calendar/CalendarComponent";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className=" h-screen flex justify-center items-center">
        <OrbitProgress
          dense
          color="#F97316"
          size="medium"
          text=""
          textColor="#d11a1a"
        />
      </div>
    ); // or loader

  return (
    <div className="w-full">
      <Header />

      <main className="flex-grow pt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
