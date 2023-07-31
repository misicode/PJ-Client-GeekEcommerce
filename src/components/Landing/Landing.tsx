import SectionProducts from "../Products/SectionProducts/SectionProducts";
import Slider from "./Slider/Slider";
import Stats from "./Stats/Stats";

const Landing = () => {
  return (
    <main>
      <Slider />
      <SectionProducts title="LANZAMIENTOS" />
      <Stats />
    </main>
  );
};

export default Landing;
