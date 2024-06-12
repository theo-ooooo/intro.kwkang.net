"use client";

import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

interface Props {
  recordMap: ExtendedRecordMap;
}

export default function Renderer({ recordMap }: Props) {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  );
}
