import { PageTop } from "../components/pagesContent";
import { AllCareer } from "./components/timeline";
import { WorksGrid } from "./components/works";

export default function Career() {
  return (
    <div className="flex flex-col">
      <PageTop imgPath="/research.jpg" imgPosY={5} title="Career">
        小さい頃から楽しむことを主眼において、ものづくりを行ってきました。
        <br />
        これまでに研究活動や大会で、チームを率いて活動を行い、XRやロボットの領域をはじめとして賞も頂いています。
        <br />
        <br />
        これからも楽しんで活動していきます。
      </PageTop>

      <AllCareer height={30} />

      <WorksGrid />
    </div>
  );
}
