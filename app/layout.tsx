import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "个人作品集 | Portfolio",
  description: "展示我的项目和个人经历的作品集网站",
  keywords: ["作品集", "项目展示", "个人网站", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
