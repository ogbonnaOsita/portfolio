import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./pages/LandingPage";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      {mode === "dark" ? (
        <AnimatedCursor
          innerSize={0}
          outerSize={30}
          color="75, 255, 165"
          outerAlpha={0.4}
          innerScale={0.8}
          outerScale={2}
          trailingSpeed={4}
          showSystemCursor={true}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      ) : (
        ""
      )}
      {mode !== "dark" ? (
        <AnimatedCursor
          innerSize={0}
          outerSize={30}
          color="245, 158, 0"
          outerAlpha={0.4}
          innerScale={0.8}
          outerScale={2}
          trailingSpeed={4}
          showSystemCursor={true}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      ) : (
        ""
      )}
      <div>
        <main>
          <LandingPage />
        </main>
      </div>
    </>
  );
}

export default App;
