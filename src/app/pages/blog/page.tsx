import Image from "next/image";

export default function BlogTop() {
  return (
    <div className="flex pb-5">
      <div className="flex items-center justify-center text-white font-extrabold text-4xl aspect-square w-80 shrink-0 mr-20 object-cover rounded-xl bg-[#666666]">
        未開設
      </div>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-10">Blog</h1>
        <p className="text-lg font-semibold">
          ブログはシステム構築中につき未開設です。
        </p>
      </div>
    </div>
  );
}

function Closed({
  imgPath,
  imgPosX,
  imgPosY,
  title,
  children,
}: {
  imgPath: string;
  imgPosX?: number;
  imgPosY?: number;
  title: string;
  children: React.ReactNode;
}) {
  const imgX = imgPosX ?? 50;
  const imgY = imgPosY ?? 50;

  return (
    <div className="flex pb-5">
      <Image
        className="aspect-square w-80 shrink-0 mr-20 object-cover rounded-xl"
        style={{ objectPosition: `${imgX}% ${imgY}%` }}
        src={imgPath}
        alt="Main Image"
        width={0}
        height={0}
        sizes="100%"
      />
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-10">{title}</h1>
        <p className="text-lg font-semibold">{children}</p>
      </div>
    </div>
  );
}
