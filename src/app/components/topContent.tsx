import Image from "next/image";

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
    <div className="flex pt-15 pb-5">
      <Image src="/legit_icon_simple.svg" alt="" width="53" height="75" />
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-5xl">{title}</h1>
        <div className="h-2 w-20 bg-[#ff98e9]"></div>
      </div>
    </div>
  );
}

export function Link({ title, path }: { title: string; path: string }) {}
