# Projeto Base em React e NextJS

Este é um modelo de projeto limpo, para iniciar novos projetos React utilizando Next e Typescript em 2022.

## Como esse projeto foi criado

Primeiro passo, criando um novo projeto com npm

```bash
npx create-next-app react-nextjs --typescript --use-npm
```

Remover importações desnecessárias e estilos em \_app.tsx e index.tsx

Iniciando o projeto

```bash
npm run dev
```

Configurar eslint:

```bash
npx eslint --init
```

Selecionar as seguintes opções de configuração:

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
- Does your project use TypeScript? » Yes
- Where does your code run » Browser e Node
- Use a popular style guide » standard
- What format do you want your config file to be in? » JSON
- Would you like to install them now with npm? » Yes

Instalar o Prettier e plugns para eslint:

```bash
npm i prettier eslint-plugin-prettier eslint-config-prettier -D
```

Configurar o vscode com eslint e Prettier:

- Crie um arquivo de configuração do VScode dentro da pasta .vscode na raiz do projeto: `.vscode/settings.json`

```bash
{
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.format": true
  }
}
```

- Arquivo de configuração .eslintrc.json

```bash
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "next"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}
```

- Criar arquivo ignore do eslint `.eslintignore`

```bash
node_modules
.next
/*.js
```

- Criar de configuração do prettier `prettier.config.js`

```bash
module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  endOfLine: 'auto'
};
```

- Criar pasta src e mover pasta pages para dentro dentro.

## Stitches

Instalação:

```bash
npm install @stitches/react
```

Criar arquivo de Configuração `stitches.config.ts`

```bash
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset
} = createStitches({
  theme: {
    fonts: {
      system: 'system-ui'
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white'
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px'
    }
  }
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    hiContrast: 'white',
    loContrast: 'hsl(206,10%,5%)'
  }
})
```

Configuração SSR, criar arquivo `_document.tsx` dentro da pasta `/pages`

```bash
import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## Radix

Intalação Radix Colors

```bash
npm install @radix-ui/colors
```

Intalação Radix Icons

```bash
npm install @radix-ui/react-icons
```

### Next-themes and Stitches DarkTheme

Instalação

```bash
npm install next-themes
```

Configuração

```bash
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, globalCss } from '../../stitches.config'

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden'
  },
  body: {
    margin: 0,
    backgroundColor: '$loContrast'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
```

## next-images

Instalação:

```bash
npm i next-images
```

Configuração:

- Adicionar as seguintes linhas em `next.config.js`

```bash
const withImages = require('next-images')
module.exports = {
  reactStrictMode: true,
}
module.exports = withImages({
  esModule: true,
  inlineImageLimit: false // A codificação de URL base4/data (SVG) não é suportada ao usar o componente para otimização.
})
```

- Criar arquivo de configuração adicional do Next:
  - additional.d.ts
  - Adicionar linha `/// <reference types="next-images" />`
  - Em `tsconfig.json` incluir o novo arquivo criado `additional.d.ts`

```bash
"include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "additional.d.ts"
  ],
```
