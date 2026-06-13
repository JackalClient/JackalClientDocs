import { withMermaid } from 'vitepress-plugin-mermaid'
import { defineTeekConfig } from 'vitepress-theme-teek/config'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { RssPlugin, type RSSOptions } from 'vitepress-plugin-rss'
import { readFileSync, readdirSync } from 'node:fs'

const modulesDir = new URL('../modules', import.meta.url)

const moduleDocs = readdirSync(modulesDir, { withFileTypes: true })
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.endsWith('.md') &&
      entry.name !== 'index.md' &&
      entry.name !== 'NAMED_COLOR_BASE_LIST.md'
  )
  .map((entry) => {
    const name = entry.name.replace(/\.md$/, '')
    const content = readFileSync(new URL(`../modules/${entry.name}`, import.meta.url), 'utf-8')
    const lines = content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
    const alias = lines[1] && lines[1] !== name ? lines[1] : ''

    return {
      text: alias ? `${alias}（${name}）` : name,
      link: `/modules/${name}`
    }
  })
  .sort((a, b) => a.link.localeCompare(b.link, 'en', { sensitivity: 'base' }))

const rss: RSSOptions = {
  title: 'JackalClient Docs',
  description: 'Windows client toolbox documentation',
  baseUrl: 'https://doc.wormwake.com',
  copyright: 'Copyright (c) JackalClient',
  language: 'zh-CN'
}


const sidebarGroups = [
  {
    text: '开始 START',
    items: [
      { text: '文档概览', link: '/overview' },
      { text: '快速开始', link: '/quick-start' }
    ]
  },
  {
    text: '核心内容 CORE',
    items: [
      { text: '功能与模块地图', link: '/module-map' },
      { text: '完整模块介绍', link: '/modules/' },
      { text: '命令目录页', link: '/commands-catalogue' },
      { text: '完整命令手册', link: '/commands/' },
      { text: '安全说明', link: '/safety' },
      { text: '文件介绍', link: '/client-files' },
      { text: '版本与演进', link: '/history-summary' }
    ]
  },
  {
    text: '命令 COMMANDS',
    items: [
      { text: '章节总览', link: '/commands/' },
      { text: '按用途选命令', link: '/commands/usage-guide' },
      { text: '系统命令', link: '/commands/system-commands' },
      { text: '文件命令', link: '/commands/file-commands' },
      { text: '网络命令', link: '/commands/network-commands' },
      { text: 'B站命令', link: '/commands/bili-commands' },
      { text: '文本处理命令', link: '/commands/text-processing-commands' }
    ]
  },
  {
    text: '专题文档 THEMES',
    items: [
      { text: '常见问题', link: '/faq' },
      { text: '专业版', link: '/pro' },
      { text: '更好的歌词说明', link: '/betterlyrics' }
    ]
  },
  {
    text: '模块 MODULES',
    items: [{ text: '模块介绍', link: '/modules/' }, ...moduleDocs]
  }
]

const teekConfig = defineTeekConfig({
  teekTheme: false,
  vitePlugins: {
    sidebar: true,
    sidebarOption: {
      ignoreList: ['modules', 'public', '.vitepress']
    },
    permalink: false,
    mdH1: false,
    docAnalysis: true,
    docAnalysisOption: {
      cn: 400,
      en: 200
    }
  },
  themeEnhance: {
    enabled: true,
    position: 'top',
    layoutSwitch: { disabled: true },
    spotlight: { disabled: true },
    themeColor: { defaultColorName: 'vp-default' }
  },
  search: {
    provider: 'local'
  },
  nav: [
    { text: '首页', link: '/' },
    { text: '快速开始', link: '/quick-start' },
    { text: '模块介绍', link: '/modules/' },
    { text: '常见问题', link: '/faq' },
    { text: '官网', link: 'https://www.wormwake.com/jackalclient/' }
  ],
  sidebar: {
    '/': sidebarGroups
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/acmuhan/JackalClientDocs' }
  ],
  editLink: {
    pattern: 'https://github.com/acmuhan/JackalClientDocs/edit/main/docs/:path',
    text: '在 GitHub 上编辑此页'
  },
  lastUpdated: true,
  lastUpdatedText: '上次更新时间'
})

const originalMarkdownConfig = teekConfig.markdown?.config
teekConfig.markdown = {
  ...(teekConfig.markdown ?? {}),
  config(md) {
    md.use(groupIconMdPlugin)
    originalMarkdownConfig?.(md)
  }
}

teekConfig.vite = teekConfig.vite ?? {}
teekConfig.vite.optimizeDeps = teekConfig.vite.optimizeDeps ?? {}
teekConfig.vite.optimizeDeps.exclude = [
  ...(teekConfig.vite.optimizeDeps.exclude ?? []),
  '@nolebase/vitepress-plugin-enhanced-readabilities/client'
]
teekConfig.vite.ssr = teekConfig.vite.ssr ?? {}
teekConfig.vite.ssr.noExternal = [
  ...(Array.isArray(teekConfig.vite.ssr.noExternal) ? teekConfig.vite.ssr.noExternal : []),
  '@nolebase/vitepress-plugin-enhanced-readabilities',
  '@nolebase/ui'
]
teekConfig.vite.plugins = [
  ...(teekConfig.vite.plugins ?? []),
  groupIconVitePlugin(),
  RssPlugin(rss)
]

export default withMermaid({
  ...teekConfig,
  title: 'JackalClient',
  description: 'Windows client toolbox documentation',
  lastUpdated: true
})
