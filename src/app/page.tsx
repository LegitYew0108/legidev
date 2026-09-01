import { AboutMe } from "./components/aboutMe";
import { Articles } from "./components/articles";
import { TopCareer } from "./pages/career/components/timeline";
import { TopImage } from "./components/topImage";
import { WorksSlide } from "./pages/career/components/works";

export default function Home() {
  return (
    <div className="">
      <TopImage />
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-300">
          <AboutMe />
          <TopCareer count={6} />
          <WorksSlide />
          <Articles />
        </div>
      </div>
    </div>
  );
}
