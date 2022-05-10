# Portfólio React + Next.js

[Saiba mais sobre esse template](./ABOUT.md)

## Dependências

- styled-components - Biblioteca de CSS dentro do JavaScript

## Extensões VSCode

- styled-components.vscode-styled-components
- graphql.vscode-graphql

## GraphQL GitHub - Repositories

```ts
query getRepositories($last: Int, $isFork: Boolean) {
  viewer {
    repositories(last: 20, isFork: false) {
      nodes {
        id,
        name,
        diskUsage,
        homepageUrl,
        url,
        description,
        createdAt,
        updatedAt,
      }
    }
  }
}
```
