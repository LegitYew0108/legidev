import Image from "next/image";
import Link from "next/link";

export default function Links() {
  return (
    <div className="grid grid-cols-2 w-fit gap-10 mx-auto">
      <LinkCard
        href="https://x.com/legitlegit0108"
        imgPath="/xlogo.png"
        name="X/旧Twitter(@legitlegit0108)"
        className=" m-10"
      />
      <LinkCard
        href="https://github.com/LegitYew0108"
        imgPath="/GitHub_Invertocat_Black.svg"
        name="Github(LegitYew0108)"
        className="m-15"
      />
      <DummyLinkCard />
      <DummyLinkCard />
    </div>
  );
}

function LinkCard({
  href,
  imgPath,
  name,
  className,
}: {
  href: string;
  imgPath: string;
  name: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-between aspect-square w-100 bg-white rounded-xl"
    >
      <Image
        src={imgPath}
        className={`w-60 h-60 ${className}`}
        alt=""
        width="0"
        height="0"
        sizes="100%"
      />
      <p className="font-bold text-lg">{name}</p>
    </Link>
  );
}

function DummyLinkCard() {
  return <div className="aspect-square w-100 bg-white rounded-xl" />;
}
