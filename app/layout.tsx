import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helo - AI 目标导师",
  description: "把目标拆成每天能完成的任务，让 AI 导师陪你推进、验收和复盘。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
