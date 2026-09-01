import { TopContent, TopPagesLink } from "@/app/components/topContent";
import Image from "next/image";

export function WorksGrid() {
  const works = [
    {
      imgPath: "/score.jpg",
      title: "R1 統刻(スコア)",
      sentence:
        "NHK学生ロボコン26に向けた手動ロボット。手動機ではあるものの、ほぼフィールド内における動作はすべて半自動化しており、スマートフォンコントローラーで状態監視と操作ができる。",
      imgPosY: 60,
    },
    {
      imgPath: "/raika.jpg",
      title: "R2 黎華(ライカ)",
      sentence:
        "NHK学生ロボコン26に向けた完全自動ロボット。フィールド内における動作はすべて自動動作する。フィールドにある高さ200mmの段を超えるための段超え機構を備えており、フィールド内のワークの配置から、最適なルートを通るように制御している。",
      imgPosY: 60,
    },
    {
      imgPath: "/score.jpg",
      title: "R1 統刻(スコア)",
      sentence:
        "NHK学生ロボコン26に向けた手動ロボット。手動機ではあるものの、ほぼフィールド内における動作はすべて半自動化しており、スマートフォンコントローラーで状態監視と操作ができる。",
      imgPosY: 60,
    },
    {
      imgPath: "/raika.jpg",
      title: "R2 黎華(ライカ)",
      sentence:
        "NHK学生ロボコン26に向けた完全自動ロボット。フィールド内における動作はすべて自動動作する。フィールドにある高さ200mmの段を超えるための段超え機構を備えており、フィールド内のワークの配置から、最適なルートを通るように制御している。",
      imgPosY: 60,
    },
  ];

  return (
    <TopContent title="Works">
      <div className="grid grid-cols-2 w-fit mx-auto gap-10">
        {works.map((work, index) => (
          <WorksCard key={`${index}`} {...work} />
        ))}
      </div>
    </TopContent>
  );
}

export function WorksSlide() {
  return (
    <TopContent title="Works">
      <WorksSlider />
      <TopPagesLink title="Works" path="/pages/blog/works" />
    </TopContent>
  );
}

function WorksSlider() {
  const works = [
    {
      imgPath: "/score.jpg",
      title: "R1 統刻(スコア)",
      sentence:
        "NHK学生ロボコン26に向けた手動ロボット。手動機ではあるものの、ほぼフィールド内における動作はすべて半自動化しており、スマートフォンコントローラーで状態監視と操作ができる。",
      imgPosY: 60,
    },
    {
      imgPath: "/raika.jpg",
      title: "R2 黎華(ライカ)",
      sentence:
        "NHK学生ロボコン26に向けた完全自動ロボット。フィールド内における動作はすべて自動動作する。フィールドにある高さ200mmの段を超えるための段超え機構を備えており、フィールド内のワークの配置から、最適なルートを通るように制御している。",
      imgPosY: 60,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-scroll">
        <div className="flex gap-8 pr-8">
          {works.map((work, index) => (
            <WorksCard key={`first-${index}`} {...work} />
          ))}
        </div>
        <div className="flex gap-8 pr-8">
          {works.map((work, index) => (
            <WorksCard key={`second-${index}`} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorksCard({
  imgPath,
  imgPosX,
  imgPosY,
  title,
  sentence,
}: {
  imgPath: string;
  imgPosX?: number;
  imgPosY?: number;
  title: string;
  sentence: string;
}) {
  const imgX = imgPosX ?? 50;
  const imgY = imgPosY ?? 50;

  return (
    <div className="flex shrink-0 gap-3 w-112 h-63 p-5 items-center bg-white drop-shadow-2xl rounded-2xl">
      <Image
        src={imgPath}
        alt=""
        className={`shrink-0 w-[200px] h-[200px] object-cover rounded-xl`}
        style={{ objectPosition: `${imgX}% ${imgY}%` }}
        width={200}
        height={200}
      />
      <div className="flex flex-col h-full">
        <div className="flex">
          <p>NHK学ロボ&apos;26@</p>
          <Image src="/RobohanLogoMark.svg" alt="" width="60" height="15" />
        </div>
        <h2 className="font-bold text-2xl pb-2 underline decoration-[#55e0ff]">
          {title}
        </h2>
        <p className="line-clamp-6 text-ellipsis">{sentence}</p>
      </div>
    </div>
  );
}
