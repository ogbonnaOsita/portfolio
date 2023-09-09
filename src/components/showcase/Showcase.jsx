import TextSpan from "./TextSpan";
import AwesomeBtn from "../awesomeBtn/AwesomeBtn";

const Showcase = () => {
  const firstName = "Osita".split("");
  const lastName = "Ogbonna".split("");
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="text-center text-white">
        <h4 className="font-bold font-mono dark:text-[#4bffa5] text-[#F59E00] -mb-2">
          Hi, my name is
        </h4>
        <div className="text-4xl mb-2 md:text-7xl lg:text-8xl font-bold dark:text-gray-100 text-[#141414]">
          {firstName.map((letter, index) => (
            <TextSpan key={index}>{letter}</TextSpan>
          ))}{" "}
          {lastName.map((letter, index) => (
            <TextSpan key={index}>{letter}</TextSpan>
          ))}
        </div>
        <span className="text-gray-500">
          I build things for the web, One Page at a Time
        </span>
        <p className="mb-5 text-gray-300">Web Developer | UI/UX Designer</p>
        <AwesomeBtn text="Hire Me" link="contact" />
      </div>
    </div>
  );
};

export default Showcase;
