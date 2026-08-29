import Image from "next/image";

export function TopImage() {
  return (
    <div className="w-full relative">
      <Image
        src="/top_image.jpg"
        alt="This is 'Raika(黎華)' and 'Score(統刻)' we developed for  NHK Gakusei robocon'26."
        width="1920"
        height="1080"
      />
      <p className="absolute bottom-15 left-8 font-bold text-5xl text-white">
        ひたすらに、技術を楽しむ。
      </p>
      <p className="absolute bottom-4 right-4 text-3xl text-white">
        NHK学生ロボコン’26 「黎華・統刻」
      </p>
    </div>
  );
}
