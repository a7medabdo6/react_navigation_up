import NavMobile from "./components/NavMobile";
import NavDesktop from "./components/NavDesktop";
import React from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className="App">
      {isDesktopOrLaptop && <NavDesktop />}

      {isTabletOrMobile && <NavMobile />}
    </div>
  );
}

export default App;
