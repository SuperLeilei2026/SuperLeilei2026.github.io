import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ||
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Leinstein｜研究复杂系统，设计人的参与";
  const description =
    "Leinstein 的个人主页：宏观经济与空间规划研究、AI 产品构建、内容与现场创造。让 AI 帮助人更好地感受、表达、连接并共同判断。";

  return {
    title,
    description,
    icons: {
      icon: "/leinstein-portrait.jpg",
      shortcut: "/leinstein-portrait.jpg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "zh_CN",
      images: [
        {
          url: `${origin}/og-leinstein-room-908.png`,
          width: 1200,
          height: 630,
          alt: "Leinstein — Research, Product, People",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og-leinstein-room-908.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
