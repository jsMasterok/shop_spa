import Header from "@/app/components/Header";
import SectionsLayout from "./components/sections/layout";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Header />
      <SectionsLayout />
    </main>
  );
}
