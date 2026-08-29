import { TopContent } from "./topContent";
import Image from "next/image";

export function AboutMe() {
  return (
    <TopContent title="About Me">
      <div className="flex">
        <AboutImage />
        <div className="flex flex-col">
          <p className="font-semibold">インターネット名義</p>
          <p className="font-bold text-3xl mb-2">れぎっと(Legit)</p>
          <p className="mb-2 text-lg">
            大阪大学工学部電子情報工学科情報　システム工学コース　4年
            <br />
            (⇨2027年度より大阪大学大学院　情報科学研究科へ進学予定)
          </p>
          <p className="mb-2 text-lg">
            大阪大学Robohanというロボコンを行う学生団体(サークル)所属。Robohanで計7台のロボットをチームで制作してきた。
            時にリーダーとしてチームを主導し、時に技術者としてロボットの制御を担当し、様々なロボットの開発に携わった。
            <br />
            また、分散型VRSNSの実現を目指すSuteraVRというOSSにおいて開発に参加するなど、ロボットやVRといった分野で開発活動を行っている。
          </p>
          <p className="text-lg">
            常に技術を楽しんで開発することを大事に、日々活動しています!
          </p>
        </div>
      </div>
    </TopContent>
  );
}

function AboutImage() {
  return (
    <div className="shrink-0 mr-10 relative w-[300px] h-[300px] overflow-hidden rounded-xl">
      <Image
        src="/legit_image.JPG"
        alt=""
        fill
        className="object-cover object-[20%_0] scale-140"
      />
    </div>
  );
}
