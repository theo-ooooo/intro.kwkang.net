import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// notion 테마 스타일링 (필수)
import "react-notion-x/src/styles.css";

// 코드 하이라이트 스타일용 (선택)
import "prismjs/themes/prism-tomorrow.css";

// 공식등 수학적 기호 스타일용 (선택)
import "katex/dist/katex.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INTRODUCTION THEO",
  description: "introduction theo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
