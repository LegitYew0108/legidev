import { AboutMe } from "./components/aboutMe";
import { Articles } from "./components/articles";
import { Career } from "./components/career";
import { TopImage } from "./components/topImage";
import { Works } from "./components/works";

export default function Home() {
  return (
    <div className="">
      <TopImage />
      <div className="flex justify-center w-full">
        <div className="flex flex-col w-300">
          <AboutMe />
          <Career />
          <Works />
          <Articles />
        </div>
      </div>
    </div>
  );
}
