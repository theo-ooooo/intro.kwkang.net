import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export async function getPage(pageId: string) {
  return await notion.getPage(pageId);
}
