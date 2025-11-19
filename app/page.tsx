import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <div className="flex justify-between px-64 w-full border">
      <h1 className="font-bold text-6xl text-center font-sans">بسم الله</h1>
      <ThemeToggle />
    </div>
  );
}
