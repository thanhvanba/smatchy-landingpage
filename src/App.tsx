import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import line from "../public/line_bg.svg";

function App() {
  return (
    <>
      <img
        src={line}
        alt=""
        className="fixed w-auto top-[140%] left-[312%] -translate-x-1/2 scale-[6] origin-center"
      />

      <Header />
      <Home />
    </>
  );
}

export default App;
