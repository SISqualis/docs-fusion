"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[6988],{

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_administracao_servidores_ldap_mdx_452_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-administracao-servidores-ldap-mdx-452.json
const site_docs_fusion_administracao_servidores_ldap_mdx_452_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/administracao/servidores-ldap","title":"Servidores LDAP","description":"A autenticação de usuários é um pilar fundamental da segurança e usabilidade de qualquer sistema. O Fusion oferece integração com Servidores LDAP (Lightweight Directory Access Protocol) para simplificar e agilizar o processo de login, promovendo uma experiência de acesso mais fluida e segura para os usuários.","source":"@site/docs/fusion/administracao/servidores-ldap.mdx","sourceDirName":"fusion/administracao","slug":"/fusion/administracao/servidores-ldap","permalink":"/docs-fusion/docs/fusion/administracao/servidores-ldap","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Quebra de Vidro","permalink":"/docs-fusion/docs/fusion/administracao/quebra-vidro"},"next":{"title":"Acessos a Prontuários","permalink":"/docs-fusion/docs/fusion/administracao/acessos-prontuarios"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/server.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
];
const Server = (0,createLucideIcon/* default */.A)("server", __iconNode);


//# sourceMappingURL=server.js.map

;// ./node_modules/lucide-react/dist/esm/icons/user-check.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const user_check_iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = (0,createLucideIcon/* default */.A)("user-check", user_check_iconNode);


//# sourceMappingURL=user-check.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
var shield_check = __webpack_require__(6017);
;// ./docs/fusion/administracao/servidores-ldap.mdx


const frontMatter = {
	sidebar_position: 8
};
const contentTitle = 'Servidores LDAP';

const assets = {

};

// Ícones ilustrativos




const toc = [{
  "value": "Agilidade e Segurança no Login com LDAP",
  "id": "agilidade-e-segurança-no-login-com-ldap",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "servidores-ldap",
        children: "Servidores LDAP"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A autenticação de usuários é um pilar fundamental da segurança e usabilidade de qualquer sistema. O Fusion oferece integração com ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Servidores LDAP (Lightweight Directory Access Protocol)"
      }), " para simplificar e agilizar o processo de login, promovendo uma experiência de acesso mais fluida e segura para os usuários."]
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "info",
      title: "O Que é LDAP e Seus Benefícios?",
      icon: (0,jsx_runtime.jsx)(Server, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "LDAP é um protocolo padrão de mercado para acessar e manter serviços de informação de diretório distribuídos. Ao integrar-se com um servidor LDAP (como o Active Directory da Microsoft), o Fusion pode centralizar a autenticação, permitindo que os usuários utilizem suas credenciais de rede existentes (por exemplo, as mesmas usadas para login no Windows) para acessar o sistema. Isso reduz a necessidade de memorizar múltiplas senhas e simplifica a gestão de identidades pela equipe de TI."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agilidade-e-segurança-no-login-com-ldap",
      children: "Agilidade e Segurança no Login com LDAP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A principal vantagem da utilização de LDAP no Fusion é a agilidade no processo de login. Conforme descrito, para dar agilidade ao processo de login no sistema, utilizando os serviços LDAP, o sistema permite validar o usuário e a senha com as mesmas credenciais de acesso ao Windows do computador do usuário."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isso se traduz em:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conveniência para o Usuário:"
        }), " Elimina a necessidade de lembrar de um conjunto separado de credenciais para o Fusion, utilizando um login já familiar."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eficiência Operacional:"
        }), " Reduz o tempo gasto em processos de login e recuperação de senhas específicas do sistema."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Segurança Aprimorada:"
        }), " Aproveita as políticas de segurança já implementadas no diretório LDAP da organização (como requisitos de complexidade de senha, expiração, etc.)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A imagem abaixo ilustra a interface ou o conceito relacionado à configuração de servidores LDAP no Fusion:"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/doc/img/8.1_servidor_ldap.png",
      alt: "Tela de Configuração de Servidor LDAP no Fusion",
      style: {
        borderRadius: '8px',
        border: '1px solid #ccc',
        maxWidth: '100%',
        marginTop: '16px'
      }
    }), "\n", (0,jsx_runtime.jsx)("figcaption", {
      style: {
        textAlign: 'center',
        fontSize: '0.9em',
        color: '#666',
        marginTop: '4px'
      },
      children: "Interface para configuração da integração com servidor LDAP."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "tip",
      title: "Login Unificado",
      icon: (0,jsx_runtime.jsx)(UserCheck, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A integração LDAP efetivamente proporciona uma experiência de ", (0,jsx_runtime.jsx)("strong", {
            children: "login unificado"
          }), " (ou \"single sign-on\" parcial), onde as credenciais de rede corporativa são suficientes para acessar o Fusion. Isso não apenas melhora a satisfação do usuário, mas também otimiza a administração de acessos."]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "warning",
      title: "Considerações de Segurança",
      icon: (0,jsx_runtime.jsx)(shield_check/* default */.A, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Ao configurar a integração LDAP, é crucial garantir que a comunicação entre o Fusion e o servidor LDAP seja segura (por exemplo, utilizando LDAPS - LDAP sobre SSL/TLS) para proteger as credenciais durante o processo de autenticação. As políticas de acesso e as permissões dentro do Fusion ainda são gerenciadas pelo sistema, mesmo após a autenticação via LDAP."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A integração com Servidores LDAP no Fusion é uma funcionalidade valiosa para otimizar a autenticação de usuários, tornando-a mais ágil, conveniente e alinhada com as práticas de gerenciamento de identidades corporativas."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 6017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ShieldCheck)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4722);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("shield-check", __iconNode);


//# sourceMappingURL=shield-check.js.map


/***/ })

}]);