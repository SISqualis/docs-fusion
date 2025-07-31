"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[2059],{

/***/ 3086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_administracao_acessos_prontuarios_mdx_dea_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-administracao-acessos-prontuarios-mdx-dea.json
const site_docs_fusion_administracao_acessos_prontuarios_mdx_dea_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/administracao/acessos-prontuarios","title":"Acessos a Prontuários","description":"O acesso aos prontuários eletrônicos de pacientes é uma das funcionalidades centrais em sistemas de informação em saúde. O Fusion disponibiliza uma tela específica para o monitoramento da quantidade de acessos aos prontuários, oferecendo uma ferramenta valiosa para fins de auditoria, segurança e gestão.","source":"@site/docs/fusion/administracao/acessos-prontuarios.mdx","sourceDirName":"fusion/administracao","slug":"/fusion/administracao/acessos-prontuarios","permalink":"/docs-fusion/docs/fusion/administracao/acessos-prontuarios","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Servidores LDAP","permalink":"/docs-fusion/docs/fusion/administracao/servidores-ldap"},"next":{"title":"Servidores de Banco de Dados","permalink":"/docs-fusion/docs/fusion/administracao/servidores-db"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/eye.js
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = (0,createLucideIcon/* default */.A)("eye", __iconNode);


//# sourceMappingURL=eye.js.map

;// ./node_modules/lucide-react/dist/esm/icons/chart-column.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const chart_column_iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = (0,createLucideIcon/* default */.A)("chart-column", chart_column_iconNode);


//# sourceMappingURL=chart-column.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
var shield_check = __webpack_require__(6017);
;// ./docs/fusion/administracao/acessos-prontuarios.mdx


const frontMatter = {
	sidebar_position: 9
};
const contentTitle = 'Acessos a Prontuários';

const assets = {

};

// Ícones ilustrativos




const toc = [{
  "value": "Importância do Monitoramento de Acessos",
  "id": "importância-do-monitoramento-de-acessos",
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
        id: "acessos-a-prontuários",
        children: "Acessos a Prontuários"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "O acesso aos prontuários eletrônicos de pacientes é uma das funcionalidades centrais em sistemas de informação em saúde. O Fusion disponibiliza uma tela específica para o monitoramento da quantidade de acessos aos prontuários, oferecendo uma ferramenta valiosa para fins de auditoria, segurança e gestão."
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "info",
      title: "Propósito da Tela de Acessos",
      icon: (0,jsx_runtime.jsx)(Eye, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Conforme descrito, esta é \"Uma tela que indica a quantidade de acessos aos prontuário do sistema\". Seu principal objetivo é fornecer uma visão quantitativa sobre a frequência com que os registros dos pacientes estão sendo consultados, por quem e quando."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importância-do-monitoramento-de-acessos",
      children: "Importância do Monitoramento de Acessos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "O rastreamento e a visualização da quantidade de acessos aos prontuários são cruciais por diversos motivos:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Segurança e Privacidade:"
        }), " Permite identificar padrões de acesso incomuns ou suspeitos que possam indicar uma violação de segurança ou privacidade dos dados do paciente."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auditoria e Conformidade:"
        }), " Gera dados essenciais para trilhas de auditoria, ajudando as instituições a cumprirem regulamentações de proteção de dados e a responderem a eventuais investigações."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gestão de Recursos:"
        }), " Entender quais prontuários são mais acessados e por quais setores pode fornecer insights para a otimização de fluxos de trabalho e alocação de recursos."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transparência:"
        }), " Demonstra o compromisso da instituição com a segurança da informação e a responsabilização no manuseio de dados sensíveis."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A imagem abaixo, intitulada \"Dashboard Pacient\" no arquivo original, sugere uma apresentação visual dos dados de acesso, possivelmente em formato de painel ou dashboard:"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/doc/img/9_dashboard_pacient.png",
      alt: "Dashboard de Acessos a Prontuários no Fusion",
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
      children: "Tela indicativa da quantidade de acessos aos prontuários."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "tip",
      title: "Análise de Padrões",
      icon: (0,jsx_runtime.jsx)(ChartColumn, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Através desta tela, gestores e administradores de segurança podem analisar tendências, identificar picos de acesso, e correlacionar esses acessos com eventos específicos ou com perfis de usuários, auxiliando na detecção proativa de comportamentos anormais."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "warning",
      title: "Proteção de Dados Sensíveis",
      icon: (0,jsx_runtime.jsx)(shield_check/* default */.A, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "O monitoramento contínuo dos acessos é uma camada adicional de proteção para os dados sensíveis dos pacientes. Qualquer desvio do esperado deve ser investigado para garantir que apenas usuários autorizados estejam acessando as informações estritamente necessárias para o desempenho de suas funções."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A funcionalidade de visualização da quantidade de acessos a prontuários no Fusion reforça o controle sobre informações críticas, sendo uma ferramenta indispensável para a governança de dados em saúde."
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