# FusionDocs

Documentação oficial do sistema Fusion da SISqualis.

## 🚀 Sobre

Este projeto utiliza [Docusaurus](https://docusaurus.io/) para gerar a documentação do sistema Fusion, proporcionando uma experiência moderna e responsiva para consulta da documentação.

## 📋 Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/SISqualis/doc-fusion.git

# Entre na pasta do projeto
cd doc-fusion

# Instale as dependências
npm install
```

## 🏃‍♂️ Executando localmente

```bash
# Inicia o servidor de desenvolvimento
npm start
```

O site estará disponível em `http://localhost:3000`

## 🏗️ Build para produção

```bash
# Gera os arquivos estáticos
npm run build

# Serve os arquivos estáticos localmente para teste
npm run serve
```

## 🚀 Deploy

O deploy é automatizado via GitHub Actions. A cada push na branch `main`, o site é automaticamente atualizado no GitHub Pages.

**URL de produção:** https://sisqualis.github.io/doc-fusion/

## 📁 Estrutura do projeto

```
├── docs/                 # Arquivos de documentação em MDX
├── src/                  # Componentes React customizados
├── static/               # Arquivos estáticos (imagens, etc.)
├── docusaurus.config.ts  # Configuração do Docusaurus
└── sidebars.ts          # Configuração da sidebar
```

## 📝 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

© 2024 Sisqualis – Hal 9000 Sistemas de informação em saúde – Todos os direitos reservados.
CNPJ: 15.300.158/0001-54

## 🆘 Suporte

Para suporte, entre em contato através do [site oficial](https://sisqualis.com.br/) ou pelas redes sociais da SISqualis.