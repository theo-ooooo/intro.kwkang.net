import Renderer from "@/components/notion/Renderer";
import { getPage } from "@/utills/notion";
import { NotionRenderer } from "react-notion-x";

export default async function Home() {
  const recordMap = await getPage("2e211b9df81f473ca887d06afccaef1b");
  return (
    <main>
      <Renderer recordMap={recordMap} />
    </main>
  );
}
