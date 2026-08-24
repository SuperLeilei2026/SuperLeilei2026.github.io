import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Leinstein's public portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /LEINSTEIN/);
  assert.match(html, /城市潜像/);
  assert.match(html, /先陪你一起画出完美一天的画像，再决定住在哪儿/);
  assert.match(html, /这些项目，是为谁、解决什么问题/);
  assert.match(html, /宏观经济与空间规划研究者/);
  assert.match(html, /宠物表达分身/);
  assert.match(html, /小雷编辑部/);
  assert.match(html, /Research Framing Compiler/);
  assert.match(html, /BUY \/ RENT \/ WAIT/);
  assert.match(html, /ENERGY &amp; SOCIAL/);
  assert.match(html, /CREATIVE STAGE/);
  assert.match(html, /300 人个人演唱会/);
  assert.match(html, /当业务与技术说着不同语言/);
  assert.match(html, /我的公众号文章/);
  assert.match(html, /我对这些方向感兴趣，想认识同道人/);
  assert.match(html, /暴暴躁躁伍六七/);
  assert.match(html, /GFpqHJEK8MmPXbtDw8uDyw/);
  assert.match(html, /OAKAnXNgp4Eqy-ZFCykm6w/);
  assert.match(html, /A7UUXFvaaT/);
  assert.match(html, /city-afterimage-demo\.mp4/);
  assert.match(html, /superleilei2026\.github\.io\/city-afterimage/);
  assert.match(html, /github\.com\/SuperLeilei2026\/city-afterimage/);
  assert.match(html, /leinstein-portrait\.jpg/);
  assert.match(html, /new-year-video-illustration\.png/);
  assert.match(html, /article-big-question-illustration\.png/);
  assert.match(html, /article-fitness-illustration\.png/);
  assert.match(html, /og-leinstein-room-908\.png/);
  assert.doesNotMatch(html, /\/_next\/image/);
  assert.doesNotMatch(html, /雷静|LEILEI/);
  assert.doesNotMatch(html, /省级智库研究城市|政策研究 Multi-Agent/);
  assert.doesNotMatch(html, /从一个真实的人开始|四间尚未住满的房间/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps the corrected project artwork uncropped", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    css,
    /\.project-card-wine \.project-image > img,[\s\S]*?object-fit: contain !important;/,
  );
  assert.match(
    css,
    /\.project-accent-image img \{[\s\S]*?object-fit: contain !important;/,
  );
  assert.match(css, /--pink-light: #f7dce4;/);
  assert.match(css, /--blue-light: #cee8f0;/);
});
