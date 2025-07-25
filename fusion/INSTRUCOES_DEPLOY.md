# 📋 Instruções Completas para Deploy no GitHub Pages

## ✅ Status Atual

- ✅ Projeto Docusaurus configurado
- ✅ Configurações do GitHub Pages ajustadas
- ✅ Workflow do GitHub Actions criado
- ✅ Build testado e funcionando
- ✅ README.md criado

## 🚀 Próximos Passos

### **PASSO 1: Criar o Repositório no GitHub**

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Configure:
   - **Repository name:** `doc-fusion`
   - **Owner:** SISqualis
   - **Description:** "Documentação do sistema Fusion"
   - **Visibility:** Public
   - **NÃO marque** nenhuma opção adicional
4. Clique em **"Create repository"**

### **PASSO 2: Subir o Projeto para o GitHub**

Execute os comandos abaixo no terminal (já está na pasta correta):

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Docusaurus setup"

# Definir a branch principal
git branch -M main

# Adicionar o repositório remoto
git remote add origin https://github.com/SISqualis/doc-fusion.git

# Enviar para o GitHub
git push -u origin main
```

### **PASSO 3: Configurar GitHub Pages**

1. No repositório GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. Salve as configurações

### **PASSO 4: Aguardar o Deploy**

1. Vá na aba **Actions** do repositório
2. Aguarde o workflow "Deploy to GitHub Pages" terminar
3. Quando aparecer ✅ verde, o site estará pronto

## 🌐 URLs Finais

- **Site:** https://sisqualis.github.io/doc-fusion/
- **Repositório:** https://github.com/SISqualis/doc-fusion

## 🔄 Para Futuras Atualizações

Após a configuração inicial, para atualizar a documentação:

```bash
# Fazer alterações nos arquivos
# Depois:
git add .
git commit -m "Descrição das alterações"
git push
```

O site será automaticamente atualizado em alguns minutos!

## 🆘 Troubleshooting

### Se o deploy falhar:
1. Verifique a aba **Actions** no GitHub
2. Clique no workflow que falhou
3. Veja os logs de erro
4. Geralmente é problema de permissões ou configuração

### Se o site não carregar:
1. Aguarde até 10 minutos após o deploy
2. Verifique se o GitHub Pages está ativo em Settings > Pages
3. Teste a URL: https://sisqualis.github.io/doc-fusion/

## 📞 Suporte

Se precisar de ajuda, verifique:
- [Documentação do Docusaurus](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Pronto para começar? Execute os comandos do PASSO 2! 🚀**