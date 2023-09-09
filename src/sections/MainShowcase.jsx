import Showcase from "../components/showcase/Showcase";
import Navbar from "./Navbar";

const MainShowcase = () => {
  return (
    <div id="home" className="h-[100vh]">
      <div className="max-w-[90%] md:max-w-[80%] h-[100%] mx-auto  flex flex-col justify-between">
        {/* <Navbar /> */}
        <Navbar />
        <Showcase />
        <div></div>
      </div>
    </div>
  );
};

export default MainShowcase;
