import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-[7rem]">
      <div className="max-w-[80%] mx-auto ">
        <div>
          <h2
            className={` mb-10 md:mb-[5rem] relative text-[3.5vw] font-extrabold text-secondary dark:text-[#fff] text-center uppercase stroke-[1rem] z-20 bg-clip-text
        before:content-['my_portfolio'] before:text-[8vw] before:absolute  before:top-[50%] before:left-[50%] before:-translate-x-[50%] 
        before:-translate-y-[50%] before:text-center before:text-[#000] before:-z-[1] before:w-full before:opacity-30`}
          >
            my{" "}
            <span className={`text-primary dark:text-darkPrimary`}>
              portfolio
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <a
            href="https://ultinoresourceslimited.com"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard
              image="/website1.png"
              title="Ultino Resources Ltd"
              caption="Website"
            />
          </a>
          <a
            href="https://shoolybrandtltd.com"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard
              image="/website2.png"
              title="Shooly Brandt"
              caption="Website"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
