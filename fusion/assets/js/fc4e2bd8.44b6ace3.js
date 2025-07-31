"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[9535],{

/***/ 5970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_administracao_solicitacao_importacao_pacientes_mdx_fc4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-administracao-solicitacao-importacao-pacientes-mdx-fc4.json
const site_docs_fusion_administracao_solicitacao_importacao_pacientes_mdx_fc4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/administracao/solicitacao-importacao-pacientes","title":"Importação de Pacientes","description":"A importação de dados de pacientes é uma tarefa crítica em diversas situações, como a migração de um sistema legado, a integração de dados de uma nova unidade de saúde ou o carregamento de listas de pacientes de fontes externas. O Fusion pode oferecer uma funcionalidade de \\"Solicitação de Importação de Pacientes\\" para gerenciar esse processo de forma controlada e organizada.","source":"@site/docs/fusion/administracao/solicitacao-importacao-pacientes.mdx","sourceDirName":"fusion/administracao","slug":"/fusion/administracao/solicitacao-importacao-pacientes","permalink":"/docs-fusion/docs/fusion/administracao/solicitacao-importacao-pacientes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"sidebar_position":19},"sidebar":"tutorialSidebar","previous":{"title":"Pendências de Aplicações","permalink":"/docs-fusion/docs/fusion/administracao/pendencias-aplicacoes"},"next":{"title":"Pendências de Importação","permalink":"/docs-fusion/docs/fusion/administracao/pendencias-importacao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/user-plus.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = (0,createLucideIcon/* default */.A)("user-plus", __iconNode);


//# sourceMappingURL=user-plus.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/list-checks.js
var list_checks = __webpack_require__(9095);
;// ./node_modules/lucide-react/dist/esm/icons/shield-question.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const shield_question_iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const ShieldQuestion = (0,createLucideIcon/* default */.A)("shield-question", shield_question_iconNode);


//# sourceMappingURL=shield-question.js.map

;// ./docs/fusion/administracao/solicitacao-importacao-pacientes.mdx


const frontMatter = {
	sidebar_position: 19
};
const contentTitle = 'Importação de Pacientes';

const assets = {

};

// Ícones ilustrativos




const toc = [{
  "value": "Processo e Componentes de uma Solicitação de Importação",
  "id": "processo-e-componentes-de-uma-solicitação-de-importação",
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
        id: "importação-de-pacientes",
        children: "Importação de Pacientes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A importação de dados de pacientes é uma tarefa crítica em diversas situações, como a migração de um sistema legado, a integração de dados de uma nova unidade de saúde ou o carregamento de listas de pacientes de fontes externas. O Fusion pode oferecer uma funcionalidade de \"Solicitação de Importação de Pacientes\" para gerenciar esse processo de forma controlada e organizada."
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "info",
      title: "O Que é a Solicitação de Importação de Pacientes?",
      icon: (0,jsx_runtime.jsx)(UserPlus, {}),
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "A \"Solicitação de Importação de Pacientes\" é um processo ou módulo dentro do Fusion que permite aos usuários autorizados requisitarem e acompanharem a importação em lote de dados de pacientes para o sistema. Este mecanismo visa garantir que as importações sejam realizadas de maneira padronizada, segura e com a devida rastreabilidade."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "processo-e-componentes-de-uma-solicitação-de-importação",
      children: "Processo e Componentes de uma Solicitação de Importação"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Um sistema de solicitação de importação de pacientes geralmente envolve várias etapas e considerações:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definição da Fonte de Dados:"
        }), " Especificar a origem dos dados dos pacientes (ex: arquivo CSV, planilhas, conexão com outro banco de dados, serviço de API)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formato e Mapeamento dos Dados:"
        }), " Definir o layout esperado dos dados de origem e como cada campo será mapeado para os campos correspondentes no banco de dados do Fusion (ex: nome, data de nascimento, CPF, CNS, endereço)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validação e Limpeza de Dados:"
        }), " Implementar verificações para garantir a qualidade e a consistência dos dados a serem importados. Pode envolver regras de validação, tratamento de duplicidades e limpeza de dados inconsistentes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agendamento e Execução:"
        }), " Permitir o agendamento da importação para horários de menor impacto no sistema ou a execução sob demanda."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aprovação e Acompanhamento:"
        }), " Em alguns cenários, a solicitação de importação pode passar por um fluxo de aprovação antes da execução. O solicitante deve poder acompanhar o status da importação (ex: pendente, em processamento, concluída com sucesso, concluída com erros)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logs e Relatórios:"
        }), " Gerar logs detalhados de cada processo de importação, incluindo o número de registros processados, sucessos, falhas e os motivos dos erros, para fins de auditoria e correção."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "tip",
      title: "Benefícios de um Processo Formalizado",
      icon: (0,jsx_runtime.jsx)(list_checks/* default */.A, {}),
      children: (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Utilizar um sistema de solicitação para importações de pacientes ajuda a:"
        }), (0,jsx_runtime.jsxs)("ul", {
          children: [(0,jsx_runtime.jsx)("li", {
            children: "Padronizar o processo de importação."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Aumentar a qualidade e a consistência dos dados importados."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Garantir a segurança e a privacidade das informações durante a transferência."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Manter um histórico rastreável de todas as importações realizadas."
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "warning",
      title: "Considerações Críticas na Importação",
      icon: (0,jsx_runtime.jsx)(ShieldQuestion, {}),
      children: (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "A importação de dados de pacientes é uma operação sensível. É crucial:"
        }), (0,jsx_runtime.jsxs)("ul", {
          children: [(0,jsx_runtime.jsx)("li", {
            children: "Assegurar a conformidade com as leis de proteção de dados (como a LGPD)."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Realizar testes exaustivos com amostras de dados antes de uma importação em larga escala."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Ter um plano de contingência para o caso de falhas ou necessidade de reversão."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Garantir que apenas pessoal autorizado tenha permissão para solicitar e executar importações."
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "note",
      title: "Interface Visual",
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Como não foi fornecida uma imagem específica para esta funcionalidade no material de origem, a descrição acima é baseada em funcionalidades comuns de sistemas que gerenciam importação de dados. Uma interface visual para \"Solicitação de Importação de Pacientes\" tipicamente incluiria formulários para submeter os detalhes da solicitação, opções para anexar arquivos de dados e uma área para visualizar o status e os resultados das importações."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Um módulo de \"Solicitação de Importação de Pacientes\" bem estruturado no Fusion seria uma ferramenta poderosa para garantir que a entrada de grandes volumes de dados de pacientes no sistema seja feita de forma eficiente, segura e controlada."
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