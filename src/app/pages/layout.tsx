export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-12 flex justify-center w-full">
      <div className="w-300">{children}</div>
    </div>
  );
}
