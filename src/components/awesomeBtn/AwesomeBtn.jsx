import "./index.css";
import { Link } from "react-scroll";

const AwesomeBtn = ({ text, link }) => {
  const mouseMoveHandler = (e) => {
    // const x = e.pageX - btnRef.current.offsetLeft;
    // const y = e.pageY - btnRef.current.offsetTop;

    const submitBtn = document.querySelector(".awesome-btn");
    var rect = submitBtn.getBoundingClientRect();

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    submitBtn.style.setProperty("--x", x + "px");
    submitBtn.style.setProperty("--y", y + "px");
  };
  return (
    <div>
      <Link
        to={link}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onMouseMoveCapture={(e) => mouseMoveHandler(e)}
        href="#"
        className="dark:text-[#4bffa5] text-[#F59E00] dark:hover:text-[#333] px-5 py-2 border-2 border-[#F59E00] dark:border-[#4bffa5] rounded-md awesome-btn dark:before:bg-[#4bffa5] before:bg-[#F59E00]"
      >
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default AwesomeBtn;
