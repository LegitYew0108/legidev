import { TopContent } from "./topContent";

export function Articles() {
  return (
    <TopContent title="Articles">
      <div className="relative">
        <DummyArticles />
        <p className="font-bold text-5xl absolute -translate-1/2 top-1/2 left-1/2">
          準備中...
        </p>
      </div>
    </TopContent>
  );
}

function DummyArticles() {
  return (
    <div className="grid grid-cols-2 gap-5 w-fit mx-auto">
      <div className="h-54 w-96 bg-white rounded-xl"></div>
      <div className="h-54 w-96 bg-white rounded-xl"></div>
      <div className="h-54 w-96 bg-white rounded-xl"></div>
      <div className="h-54 w-96 bg-white rounded-xl"></div>
    </div>
  );
}
