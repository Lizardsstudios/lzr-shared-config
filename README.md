# @lzr/shared-config

Configurações compartilhadas obrigatórias para todos os projetos da **LZR Technologies**.

Ref: [Engineering Handbook v2.0](https://code.lzrtechnologies.com)

## Pacotes

| Pacote | Descrição | Versão |
|--------|-----------|--------|
| `@lzr/eslint-config` | ESLint config para TypeScript/React/Node | 1.0.0 |
| `@lzr/prettier-config` | Prettier config padrão LZR | 1.0.0 |
| `@lzr/tsconfig` | TSConfig base (strict mode obrigatório) | 1.0.0 |
| `@lzr/commitlint-config` | Conventional Commits config | 1.0.0 |

## Instalação

```bash
npm install -D @lzr/eslint-config
npm install -D @lzr/prettier-config
npm install -D @lzr/tsconfig
npm install -D @lzr/commitlint-config
```

## Princípios (Handbook Seção 00)

- **Zero `any`** — Use `unknown` + narrowing
- **Strict mode** — Sempre ativado, sem exceção
- **Conventional Commits** — Obrigatório em todos os repos
- **Formatação automática** — Prettier roda no pre-commit

## Licença

Privado — LZR Technologies Corp.
