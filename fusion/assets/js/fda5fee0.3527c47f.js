"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[875],{

/***/ 1470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(7485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(1682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(679);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){return react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);})?.filter(Boolean)??[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(({props:{value,label,attributes,default:isDefault}})=>({value,label,attributes,default:isDefault}));}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp??extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue({value,tabValues}){return tabValues.some(a=>a.value===value);}function getInitialStateValue({defaultValue,tabValues}){if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=tabValues.find(tabValue=>tabValue.default)??tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey({queryString=false,groupId}){if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId??null;}function useTabQueryString({queryString=false,groupId}){const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage({groupId}){const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue??storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList({className,block,selectedValue,selectValue,tabValues}){const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]??tabRefs[0];break;}case'ArrowLeft':{const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]??tabRefs[tabRefs.length-1];break;}default:break;}focusElement?.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(({value,label,attributes})=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>{tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes?.className,{'tabs__item--active':selectedValue===value}),children:label??value},value))});}function TabContent({lazy,children,selectedValue}){const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,{...tabs,...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{...tabs,...props})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,{...props,children:sanitizeTabsChildren(props.children)},String(isBrowser));}

/***/ }),

/***/ 2352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_administracao_integracao_mdx_fda_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-administracao-integracao-mdx-fda.json
const site_docs_fusion_administracao_integracao_mdx_fda_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/administracao/integracao","title":"Integrações","description":"A capacidade de integração do Fusion é fundamental para conectar o sistema a diversas fontes de dados e outros softwares, garantindo um fluxo de informações coeso e eficiente. Esta seção detalha como cadastrar e configurar as integrações.","source":"@site/docs/fusion/administracao/integracao.mdx","sourceDirName":"fusion/administracao","slug":"/fusion/administracao/integracao","permalink":"/docs-fusion/docs/fusion/administracao/integracao","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Gerenciamento de Acesso","permalink":"/docs-fusion/docs/fusion/administracao/niveis-acesso"},"next":{"title":"Layouts","permalink":"/docs-fusion/docs/fusion/administracao/layouts"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(1470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(9365);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/link.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = (0,createLucideIcon/* default */.A)("link", __iconNode);


//# sourceMappingURL=link.js.map

;// ./node_modules/lucide-react/dist/esm/icons/share-2.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const share_2_iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = (0,createLucideIcon/* default */.A)("share-2", share_2_iconNode);


//# sourceMappingURL=share-2.js.map

;// ./node_modules/lucide-react/dist/esm/icons/circle-plus.js
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const circle_plus_iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = (0,createLucideIcon/* default */.A)("circle-plus", circle_plus_iconNode);


//# sourceMappingURL=circle-plus.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings-2.js
var settings_2 = __webpack_require__(6195);
;// ./docs/fusion/administracao/integracao.mdx


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Integrações';

const assets = {

};

// Ícones ilustrativos, adicionei PlusCircle






const toc = [{
  "value": "Detalhes da Configuração de Integração",
  "id": "detalhes-da-configuração-de-integração",
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
        id: "integrações",
        children: "Integrações"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A capacidade de integração do Fusion é fundamental para conectar o sistema a diversas fontes de dados e outros softwares, garantindo um fluxo de informações coeso e eficiente. Esta seção detalha como cadastrar e configurar as integrações."
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "info",
      title: "Visão Geral da Integração",
      icon: (0,jsx_runtime.jsx)(Link, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "O módulo de integração do Fusion permite o cadastro, a configuração e o monitoramento de todas as interconexões com sistemas externos. Ele oferece ferramentas para definir os parâmetros de comunicação, os formatos de dados (layouts) e visualizar logs de transação, essenciais para a interoperabilidade em saúde."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detalhes-da-configuração-de-integração",
      children: "Detalhes da Configuração de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Explore as etapas e opções para estabelecer e gerenciar as integrações no sistema:"
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "cadastro",
        label: "Cadastro e Logs de Integração",
        icon: (0,jsx_runtime.jsx)(Share2, {}),
        default: true,
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Listagem e Criação de Integrações"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["A área de integrações exibe uma listagem das configurações existentes, onde é possível também acessar os ", (0,jsx_runtime.jsx)("strong", {
              children: "Logs de APIs"
            }), ". Esta funcionalidade é crucial para o monitoramento de transações e diagnóstico de eventuais problemas."]
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_integracao.png",
          alt: "Tela de listagem de Integrações e acesso a Logs de API",
          style: {
            borderRadius: '8px',
            border: '1px solid #ccc',
            maxWidth: '600px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '16px',
            marginBottom: '16px'
          }
        }), (0,jsx_runtime.jsx)("figcaption", {
          style: {
            textAlign: 'center',
            fontSize: '0.9em',
            color: '#666',
            marginTop: '4px',
            marginBottom: '24px'
          },
          children: "Interface de listagem de integrações e acesso a logs."
        }), (0,jsx_runtime.jsxs)(Admonition/* default */.A, {
          type: "note",
          icon: (0,jsx_runtime.jsx)(CirclePlus, {}),
          title: "Nova Integração",
          children: [(0,jsx_runtime.jsx)("p", {
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ao selecionar a opção para criar uma ", (0,jsx_runtime.jsx)("strong", {
                children: "Nova Integração"
              }), " (ou editar uma existente), o usuário é direcionado para a tela de ", (0,jsx_runtime.jsx)("strong", {
                children: "Manutenção de Integração"
              }), ". Nesta tela, é possível definir:"]
            })
          }), (0,jsx_runtime.jsxs)("ul", {
            children: [(0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)("strong", {
                children: "Código:"
              }), " Um identificador único para a integração."]
            }), (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)("strong", {
                children: "Nome:"
              }), " Um nome descritivo para a integração."]
            }), (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)("strong", {
                children: "Descrição:"
              }), " Detalhes adicionais sobre a finalidade da integração."]
            }), (0,jsx_runtime.jsxs)("li", {
              children: [(0,jsx_runtime.jsx)("strong", {
                children: "Opções Comportamentais:"
              }), " Como \"Permite Pesquisa Ativa de Paciente?\" e \"Exibir no Visualizador?\"."]
            })]
          }), (0,jsx_runtime.jsx)("p", {
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Além disso, esta tela organiza em abas a configuração de ", (0,jsx_runtime.jsx)("strong", {
                children: "Layouts"
              }), ", ", (0,jsx_runtime.jsx)("strong", {
                children: "APIs"
              }), " e ", (0,jsx_runtime.jsx)("strong", {
                children: "Barramentos"
              }), ", permitindo, por exemplo, adicionar e configurar os layouts de dados específicos para a troca de informações."]
            })
          })]
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/nova_integracao.png",
          alt: "Tela de Manutenção de Integração para Nova Integração",
          style: {
            borderRadius: '8px',
            border: '1px solid #ccc',
            maxWidth: '100%',
            marginTop: '16px'
          }
        }), (0,jsx_runtime.jsx)("figcaption", {
          style: {
            textAlign: 'center',
            fontSize: '0.9em',
            color: '#666',
            marginTop: '4px'
          },
          children: "Tela \"Manutenção de Integração\" para configuração detalhada."
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "tip",
      title: "Flexibilidade e Padronização",
      icon: (0,jsx_runtime.jsx)(settings_2/* default */.A, {}),
      children: (0,jsx_runtime.jsx)("p", {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "A combinação do suporte a múltiplos métodos de integração (Layouts, APIs, Barramento) com a adesão a padrões de dados como FHIR, HL7 e OpenEHR, confere ao Fusion grande flexibilidade e capacidade de interoperar com um vasto ecossistema de sistemas de saúde."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A configuração adequada das integrações e seus layouts é essencial para assegurar a troca de informações precisa e confiável entre o Fusion e outros sistemas."
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

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Settings2)
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
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("settings-2", __iconNode);


//# sourceMappingURL=settings-2.js.map


/***/ }),

/***/ 9365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem({children,hidden,className}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ })

}]);