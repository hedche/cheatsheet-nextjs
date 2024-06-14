import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DevOps Cheatsheet</span>,
  project: {
    link: 'https://github.com/hedche/cheatsheet-nextjs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'If you like this project, please give it a star!',
  },
}

export default config
