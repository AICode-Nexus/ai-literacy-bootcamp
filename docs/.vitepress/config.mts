import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'AI 素养训练营',
  description: '面向非研发体系人员的 AI 能力提升培训课程',
  lang: 'zh-CN',
  base: '/ai-literacy-bootcamp/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ai-literacy-bootcamp/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI 素养训练营' }],
    ['meta', { property: 'og:description', content: '面向非研发人员的 AI 能力提升 - 场景优先，动手为主' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI 素养训练营',

    nav: [
      { text: '首页', link: '/' },
      { text: '课程列表', link: '/courses' },
      { text: '完整大纲', link: '/outline' },
      { text: '工具清单', link: '/tools' },
      { text: 'GitHub', link: 'https://github.com/AICode-Nexus/ai-literacy-bootcamp' }
    ],

    sidebar: [
      {
        text: '课程介绍',
        items: [
          { text: '课程定位', link: '/' },
          { text: '课程列表', link: '/courses' },
          { text: '完整大纲', link: '/outline' },
          { text: '课程设计', link: '/design' },
          { text: '工具清单', link: '/tools' }
        ]
      },
      {
        text: '阶段一：认知与基础',
        items: [
          { text: '第 0 课：AI 认知重构', link: '/lessons/lesson-0' },
          { text: '第 1 课：提示词工程', link: '/lessons/lesson-1' }
        ]
      },
      {
        text: '阶段二：场景化应用',
        items: [
          { text: '第 2 课：AI 写作助手', link: '/lessons/lesson-2' },
          { text: '第 3 课：AI 数据分析', link: '/lessons/lesson-3' },
          { text: '第 4 课：AI 产品设计', link: '/lessons/lesson-4' }
        ]
      },
      {
        text: '阶段三：进阶与生态',
        items: [
          { text: '第 5 课：AI 工作流自动化', link: '/lessons/lesson-5' },
          { text: '第 6 课：AI 工具生态', link: '/lessons/lesson-6' }
        ]
      },
      {
        text: '阶段四：安全与治理',
        items: [
          { text: '第 7 课：AI 协作与安全', link: '/lessons/lesson-7' }
        ]
      },
      {
        text: '实战专题',
        items: [
          { text: 'Claude Code Skills', link: '/lessons/skill-workshop' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AICode-Nexus/ai-literacy-bootcamp' }
    ],

    footer: {
      message: '采用 CC BY-NC-SA 4.0 许可协议',
      copyright: 'Copyright © 2026 AI 素养训练营'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
}))
