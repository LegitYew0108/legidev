import Image from "next/image";
import Link from "next/link";

export function TopContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Title title={title} />
      <div className="mx-10">{children}</div>
    </div>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="flex pt-15 pb-8">
      <Image src="/legit_icon_simple.svg" alt="" width="40" height="35" />
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="h-2 w-20 bg-[#ff98e9]"></div>
      </div>
    </div>
  );
}

export function TopPagesLink({ title, path }: { title: string; path: string }) {
  return (
    <div className="mt-5 flex justify-end">
      <div className="w-0 h-15 border-y-[15px] border-y-transparent border-r-[12px] border-r-[#98e9fb]" />
      <Link
        href={path}
        className="w-35 h-15 flex flex-row-reverse items-center bg-[#98e9fb]"
      >
        <div className="flex items-center justify-center w-7 h-7 mr-2 bg-white rounded-[50%]">
          <Image src="/arrow.svg" alt="" width="18" height="18" />
        </div>
        <p className="flex-1 text-center font-semibold text-2xl">{title}</p>
      </Link>
      <div className="w-0 h-15 border-y-[15px] border-y-transparent border-l-[12px] border-l-[#98e9fb]" />
    </div>
  );
}
