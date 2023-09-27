import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="m-10 mx-96 ">
        <Nav />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
