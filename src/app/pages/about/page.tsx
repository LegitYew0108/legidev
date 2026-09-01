import { PageTop } from "../components/pagesContent";
import { Credits } from "./components/credits";
import { TechStack } from "./components/techStack";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageTop imgPath="/legit_abatar.jpg" imgPosY={50} title="About this site">
        このウェブサイトは、れぎっとのホームページです。
        <br />
        れぎっとの活動記録兼、技術勉強のために制作されており、
        <br />
        個人の事情によって適宜更新されることがあります。
      </PageTop>

      <TechStack />
      <Credits />
    </div>
  );
}
