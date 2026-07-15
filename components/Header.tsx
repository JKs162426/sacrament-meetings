export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-[#031926] text-[#f4e9cd] px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Sacrament Meeting Program</h1>
      <span className="text-sm">{today}</span>
    </header>
  );
}
