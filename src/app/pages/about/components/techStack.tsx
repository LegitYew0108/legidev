import { TopContent } from "@/app/components/topContent";
import Image from "next/image";

export function TechStack() {
  return (
    <TopContent title="Tech Stack">
      <p className="font-bold text-lg mb-5">
        基本的な技術スタックですが、このウェブサイト制作に使用している技術スタックを紹介します。
      </p>

      <div className="flex flex-col gap-5">
        <NextjsCard />
        <p className="font-bold w-full text-center text-lg mb-5">
          -- 以降、追記予定 --
        </p>
      </div>
    </TopContent>
  );
}

function NextjsCard() {
  return (
    <TechStackCard iconPath="/nextjs-icon.svg">
      <div className="flex flex-col items-start">
        <Image
          src="/next.svg"
          className="h-15 w-auto my-5"
          alt=""
          width="0"
          height="0"
        />
        <p>
          フレームワークとしてNEXT.JSを使用しています。
          <br />
          上記の通り、私はこのウェブサイトを勉強目的で制作しております。そこでシェア率の高い基本的なフレームワークを使用しようと考え、Next.jsを採用しました。
          <br />
          Next.jsはJSの代表的なライブラリであるReactを基盤とした、高機能なフレームワークです。
          <br />
          学生ロボコン26のTauriコントローラーを実装した際にReactを使っていたのもあり、Next.js独特の機能さえ慣れれば簡単に扱えました。
        </p>
      </div>
    </TechStackCard>
  );
}

function TechStackCard({
  iconPath,
  children,
}: {
  iconPath: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="shrink-0 w-60 h-60 mr-10 bg-white rounded-xl p-10">
        <Image src={iconPath} className="w-full" alt="" width="0" height="0" />
      </div>
      {children}
    </div>
  );
}
