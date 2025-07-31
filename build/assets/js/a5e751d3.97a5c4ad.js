"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[6400],{

/***/ 8037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("triangle-alert", __iconNode);


//# sourceMappingURL=triangle-alert.js.map


/***/ }),

/***/ 8938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_administracao_pendencia_integracao_mdx_a5e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-administracao-pendencia-integracao-mdx-a5e.json
const site_docs_fusion_administracao_pendencia_integracao_mdx_a5e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/administracao/pendencia-integracao","title":"Pendências de Integração","description":"O monitoramento e tratamento de pendências são cruciais para a saúde e confiabilidade das integrações de dados. No Fusion, a área de \\"Pendência Integração\\" é dedicada a listar e facilitar a análise de transações ou processos que não foram concluídos automaticamente durante as rotinas de integração.","source":"@site/docs/fusion/administracao/pendencia-integracao.mdx","sourceDirName":"fusion/administracao","slug":"/fusion/administracao/pendencia-integracao","permalink":"/docs-fusion/docs/fusion/administracao/pendencia-integracao","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Layouts","permalink":"/docs-fusion/docs/fusion/administracao/layouts"},"next":{"title":"Domínios de Informação","permalink":"/docs-fusion/docs/fusion/administracao/dominios-informacao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(8037);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/search.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = (0,createLucideIcon/* default */.A)("search", __iconNode);


//# sourceMappingURL=search.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list-checks.js
var list_checks = __webpack_require__(9095);
;// ./docs/fusion/administracao/pendencia-integracao.mdx


const frontMatter = {
	sidebar_position: 5
};
const contentTitle = 'Pendências de Integração';

const assets = {

};

// Ícones ilustrativos




const toc = [{
  "value": "Análise e Tratamento de Pendências",
  "id": "análise-e-tratamento-de-pendências",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pendências-de-integração",
        children: "Pendências de Integração"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "O monitoramento e tratamento de pendências são cruciais para a saúde e confiabilidade das integrações de dados. No Fusion, a área de \"Pendência Integração\" é dedicada a listar e facilitar a análise de transações ou processos que não foram concluídos automaticamente durante as rotinas de integração."
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "info",
      title: "O Que São Pendências de Integração?",
      icon: (0,jsx_runtime.jsx)(triangle_alert/* default */.A, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Pendências de integração representam itens que, por diversos motivos (falhas de comunicação, dados inconsistentes, erros de validação, etc.), não puderam ser processados de forma automática pelo sistema durante uma tentativa de integração. Estes pontos requerem atenção e análise manual para garantir a integridade e a completude dos dados."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "análise-e-tratamento-de-pendências",
      children: "Análise e Tratamento de Pendências"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tela de Pendências de Integração centraliza os itens que exigem intervenção. O objetivo principal é fornecer uma visão clara dos problemas ocorridos, permitindo que os usuários responsáveis possam investigar as causas e tomar as ações corretivas necessárias."
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "tip",
      title: "Identificando e Filtrando Pendências",
      icon: (0,jsx_runtime.jsx)(Search, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Para auxiliar na análise, a interface geralmente oferece funcionalidades de filtro. Isso permite que os usuários localizem pendências específicas com base em critérios como data, tipo de integração, sistema de origem/destino, entre outros, otimizando o processo de investigação."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A imagem abaixo ilustra a interface onde as pendências de integração são apresentadas, destacando a possibilidade de aplicar filtros para refinar a busca:"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/doc/img/18_filtro_de_pendencias.png",
      alt: "Tela de Filtro de Pendências de Integração no Fusion",
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
      children: "Interface para visualização e filtragem de pendências de integração."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "warning",
      title: "Importância da Gestão de Pendências",
      icon: (0,jsx_runtime.jsx)(list_checks/* default */.A, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A gestão proativa das pendências de integração é vital. Ignorar ou adiar a análise desses itens pode levar a inconsistências nos dados, informações desatualizadas ou ausentes nos sistemas, e, em última instância, impactar negativamente as operações e decisões baseadas nesses dados. Um processo bem definido para revisar e resolver pendências é uma prática recomendada."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manter as pendências de integração sob controle é um esforço contínuo que contribui significativamente para a qualidade dos dados e a eficiência dos processos integrados no ambiente Fusion."
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

/***/ 9095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ListChecks)
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
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListChecks = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("list-checks", __iconNode);


//# sourceMappingURL=list-checks.js.map


/***/ })

}]);