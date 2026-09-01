import { TopContent, TopPagesLink } from "@/app/components/topContent";

interface CareerEntry {
  date: Date;
  title: string;
}

export function TopCareer({ count }: { count: number }) {
  const date = new Date("2005/1/8");

  const data: Array<CareerEntry> = new Array(count).fill({
    date,
    title: "Hello",
  });

  return (
    <TopContent title="Career">
      <PartialCareer entries={data} ellipsis={true} />
      <TopPagesLink title="Career" path="/pages/career" />
    </TopContent>
  );
}

export function PartialCareer({
  entries,
  ellipsis = false,
}: {
  entries: Array<CareerEntry>;
  ellipsis?: boolean;
}) {
  return (
    <div className="flex">
      <div className="w-2 bg-[#666666] rounded-xl mr-10"></div>
      <div className="flex flex-col gap-3 w-full">
        {entries.map((entry, index) => (
          <CareerCard key={`${index}`} {...entry} />
        ))}
        {ellipsis && <Ellipsis />}
      </div>
    </div>
  );
}

export function AllCareer({ height = 20 }: { height?: number }) {
  const date = new Date("2005/1/8");

  const entries: Array<CareerEntry> = new Array(10).fill({
    date,
    title: "Hello",
  });

  return (
    <TopContent title="Career">
      <div className="flex">
        <div className="w-2 bg-[#666666] rounded-xl mr-10"></div>
        <div
          className="flex flex-col gap-3 p-3 w-full overflow-scroll"
          style={{ height: `${height}rem` }}
        >
          {entries.map((entry, index) => (
            <CareerCard key={`${index}`} {...entry} />
          ))}
        </div>
      </div>
    </TopContent>
  );
}

function CareerCard({ date, title }: { date: Date; title: string }) {
  return (
    <div className="shrink-0 flex h-12 w-full items-center px-10 bg-white drop-shadow-xl/50 rounded-xl">
      <div className="flex flex-col text-xl font-regular">
        <p>
          {date.getFullYear().toString()}/{date.getMonth().toString()}/
          {date.getDay().toString()}
        </p>
        <div className="h-1 w-full px-2 -mt-1 bg-[#55e0ff]"></div>
      </div>
      <p className="flex-1 text-xl text-center">{title}</p>
    </div>
  );
}

function Ellipsis() {
  return (
    <div className="flex flex-col items-center gap-2 mt-5">
      <div className="w-2 h-2 rounded-[50%] bg-[#666666]"></div>
      <div className="w-2 h-2 rounded-[50%] bg-[#666666]"></div>
      <div className="w-2 h-2 rounded-[50%] bg-[#666666]"></div>
    </div>
  );
}
