---
title: Next.js
---

`Next.js` 是一个基于 `React` 的框架，用于构建**服务器端渲染**（`SSR`）和**静态站点生成**（`SSG`）以及**客户端渲染**（`CSR`）的 `Web` 应用程序。

它由 `Vercel` 开发，旨在简化 `React` 应用程序的开发过程。

## 1. SSR

`Next.js` 默认推荐使用 `SSR` 模式，因为 `SSR` 模式可以提供更好的性能和更好的 SEO。

```shell
# 构建
pnpm run build

# 启动node服务托管
pnpm run start
```

## 2. SSG

`SSG` 是 `Static Site Generation` 的缩写，即静态站点生成。

~~`next export` 命令已经被弃用（`Deprecated`）~~

首先在 `next.config.js` 中配置 `output: 'export'` ，然后执行 `pnpm run build` 命令。

这样的话，就会在 `out` 目录下生成静态文件，我们将这个目录部署到 `Vercel` 或者其他静态文件托管平台。

## 3. CSR

`CSR` 是 `Client Side Rendering` 的缩写，即客户端渲染。

其实就是 `SPA` 单页应用。

在 `next.js` 官网有较为详细的[迁移文档](https://nextjs.org/docs/app/guides/single-page-applications)。

此处，笔者根据理解记录一下注意事项：

**在 `SSG` 基础上，需要额外配置 `[[...slug]]` 页面路由，从而将 `SSG` 的多页应用路由转换为 `CSR` 的单页应用路由**。

