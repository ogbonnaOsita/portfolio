/* eslint-disable react/prop-types */
const SectionHeader = ({
  text = "about",
  span = "me",
  fcolor = "#fff",
  bcolor = "#000",
  scolor = "#4bffa5",
}) => {
  let bText;
  if (span !== "") {
    bText = text + "_" + span;
  } else {
    bText = text;
  }
  return (
    <div>
      <h2
        className={`mb-[5rem] relative text-[3.5vw] font-extrabold text-[${fcolor}] text-center uppercase stroke-[1rem] z-20 bg-clip-text
        before:content-['${bText}'] before:text-[8vw] before:absolute  before:top-[50%] before:left-[50%] before:-translate-x-[50%] 
        before:-translate-y-[50%] before:text-center before:text-[${bcolor}] before:-z-[1] before:w-full before:opacity-30`}
      >
        {text} <span className={`text-[${scolor}]`}>{span}</span>
      </h2>
    </div>
  );
};

export default SectionHeader;
