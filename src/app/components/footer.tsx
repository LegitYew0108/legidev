import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col pt-20">
      <div className="h-1 bg-[#666666]"></div>
      <div className="flex h-45 bg-white justify-between items-center px-5">
        <div className="flex">
          <FooterLogo />
        </div>
        <div className="flex">
          <SiteMap />
        </div>
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="flex flex-col p-10 text-right">
      <Image
        src="/legit_logomark_black.svg"
        alt="Legit logo"
        width="300"
        height="100"
      />
      <p className="font-bold text-[#666666] -mt-3 mr-2">れぎっと</p>
    </div>
  );
}

function SiteMap() {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg text-[#ff98e9] font-bold pb-1">サイトマップ</h3>
      <Link href="/" className="underline">
        Home
      </Link>
      <Link href="/career" className="underline">
        Career
      </Link>
      <Link href="/links" className="underline">
        Links
      </Link>
      <Link href="/blog" className="underline">
        Blog
      </Link>
      <Link href="/about" className="underline">
        About
      </Link>
    </div>
  );
}
