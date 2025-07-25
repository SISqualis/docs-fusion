# FusionDoc - Documentação SISqualis

Documentação oficial dos sistemas da SISqualis construída com Docusaurus.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Configuração Inicial

1. **Criar o repositório no GitHub:**
   - Nome: `fusion-doc`
   - Organização: `SISqualis`
   - URL final: `https://sisqualis.github.io/fusion-doc/`

2. **Configurar GitHub Pages:**
   - Vá em Settings > Pages
   - Source: GitHub Actions
   - O workflow já está configurado em `.github/workflows/deploy.yml`

3. **Fazer push do código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SISqualis/fusion-doc.git
   git push -u origin main
   ```

### Desenvolvimento Local

```bash
cd fusion
npm install
npm start
```

O site estará disponível em `http://localhost:3000`

### Build de Produção

```bash
cd fusion
npm run build
```

### Deploy Manual (se necessário)

```bash
cd fusion
npm run deploy
```

## 📁 Estrutura do Projeto

```
DocFusion/
├── .gitignore              # Gitignore da raiz
├── README.md               # Este arquivo
└── fusion/                 # Projeto Docusaurus
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml  # Workflow GitHub Actions
    ├── docs/               # Documentação
    ├── src/                # Componentes customizados
    ├── static/             # Arquivos estáticos
    ├── docusaurus.config.ts # Configuração principal
    └── package.json        # Dependências
```

## 🔧 Configurações Importantes

- **URL de produção:** `https://sisqualis.github.io`
- **Base URL:** `/fusion-doc/`
- **Organização:** `SISqualis`
- **Repositório:** `fusion-doc`

## 📝 Notas

- O deploy é automático a cada push na branch `main`
- O workflow usa Node.js 18
- O build é feito sem minificação para melhor debugging
- Certifique-se de que o repositório tenha as permissões corretas para GitHub Pages
