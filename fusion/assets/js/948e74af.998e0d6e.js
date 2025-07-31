"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[5897,7336],{

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

/***/ 2761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_autenticacao_acesso_mdx_948_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-autenticacao-acesso-mdx-948.json
const site_docs_fusion_autenticacao_acesso_mdx_948_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/autenticacao/acesso","title":"Acesso","description":"Acesso","source":"@site/docs/fusion/autenticacao/acesso.mdx","sourceDirName":"fusion/autenticacao","slug":"/fusion/autenticacao/acesso","permalink":"/docs-fusion/docs/fusion/autenticacao/acesso","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Acesso"},"sidebar":"tutorialSidebar","previous":{"title":"Autenticação e Acesso","permalink":"/docs-fusion/docs/category/autenticação-e-acesso"},"next":{"title":"Gerenciamento de Acesso","permalink":"/docs-fusion/docs/fusion/autenticacao/gerenciamento-acesso"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(1470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(9365);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
;// ./docs/fusion/autenticacao/acesso.mdx


const frontMatter = {
	sidebar_position: 1,
	title: 'Acesso'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "Procedimento de Login",
  "id": "procedimento-de-login",
  "level": 3
}, {
  "value": "Recuperação de Senha",
  "id": "recuperação-de-senha",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Acesso"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        backgroundColor: '#1a3953',
        padding: '20px',
        borderRadius: '8px',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #91d5ff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      },
      children: (0,jsx_runtime.jsxs)("div", {
        children: [(0,jsx_runtime.jsx)("h2", {
          style: {
            marginTop: '0',
            color: '#fff',
            fontSize: '1.5em'
          },
          children: "Como acesso o Fusion?"
        }), (0,jsx_runtime.jsx)("p", {
          style: {
            marginBottom: '0',
            color: '#fff',
            fontSize: '1em'
          },
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "O sistema Fusion é uma plataforma robusta, projetada para ser implementada diretamente na infraestrutura do cliente, garantindo segurança e controle sobre os dados. Esta seção detalha o procedimento padrão para acessar o sistema e as opções disponíveis na tela de login, incluindo a recuperação de senha."
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "procedimento-de-login",
      children: "Procedimento de Login"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para acessar a plataforma Fusion, siga os passos abaixo:"
    }), "\n", (0,jsx_runtime.jsx)(Tabs/* default */.A, {
      children: (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "desktop",
        label: "🖥️ Desktop",
        default: true,
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Acesso via Computador:"
          })
        }), (0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px',
            margin: '20px 0'
          },
          children: [(0,jsx_runtime.jsxs)("div", {
            style: {
              padding: '20px',
              border: '2px solid #e3f2fd',
              borderRadius: '10px',
              background: 'linear-gradient(145deg, #f8fbff, #e3f2fd)',
              textAlign: 'center'
            },
            children: [(0,jsx_runtime.jsx)("div", {
              style: {
                fontSize: '2em',
                marginBottom: '10px'
              },
              children: "🌐"
            }), (0,jsx_runtime.jsx)("h4", {
              children: "1. Abra o Navegador"
            }), (0,jsx_runtime.jsx)("p", {
              children: "Utilize Chrome, Firefox, Edge ou Safari"
            })]
          }), (0,jsx_runtime.jsxs)("div", {
            style: {
              padding: '20px',
              border: '2px solid #e8f5e8',
              borderRadius: '10px',
              background: 'linear-gradient(145deg, #f8fff8, #e8f5e8)',
              textAlign: 'center'
            },
            children: [(0,jsx_runtime.jsx)("div", {
              style: {
                fontSize: '2em',
                marginBottom: '10px'
              },
              children: "🔗"
            }), (0,jsx_runtime.jsx)("h4", {
              children: "2. Insira o Endereço"
            }), (0,jsx_runtime.jsx)("p", {
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "fusion.nomedohospital.com.br/login"
              })
            })]
          }), (0,jsx_runtime.jsxs)("div", {
            style: {
              padding: '20px',
              border: '2px solid #fff3e0',
              borderRadius: '10px',
              background: 'linear-gradient(145deg, #fffef8, #fff3e0)',
              textAlign: 'center'
            },
            children: [(0,jsx_runtime.jsx)("div", {
              style: {
                fontSize: '2em',
                marginBottom: '10px'
              },
              children: "🔐"
            }), (0,jsx_runtime.jsx)("h4", {
              children: "3. Autenticação"
            }), (0,jsx_runtime.jsx)("p", {
              children: "Insira usuário e senha nos campos apropriados"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Dica Importante",
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Para garantir um acesso estável e seguro, é crucial que suas credenciais estejam sempre atualizadas. Além disso, verifique se a sua conexão com a rede local da instituição está configurada corretamente."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["🔧 ", (0,jsx_runtime.jsx)("strong", {
          children: "Configurações Avançadas de Rede"
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        style: {
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px',
          marginTop: '10px'
        },
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Requisitos de Rede:"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Conexão estável à rede interna da instituição"
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Troubleshooting:"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verifique se está conectado à rede correta"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Limpe o cache do navegador se necessário"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Entre em contato com o TI em caso de problemas persistentes"
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '20px 0'
      },
      children: [(0,jsx_runtime.jsx)("p", {
        children: "Interface de Login do Sistema Fusion"
      }), (0,jsx_runtime.jsx)("img", {
        src: "/doc/img/login.jpeg",
        alt: "Tela de login do sistema Fusion",
        style: {
          maxWidth: '400px',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }
      }), (0,jsx_runtime.jsx)("p", {
        style: {
          fontSize: '0.8em',
          color: '#666',
          marginTop: '10px'
        },
        children: "Exemplo da tela de login onde o usuário insere suas credenciais."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recuperação-de-senha",
      children: "Recuperação de Senha"
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '20px',
        border: '1px solid #f4a261'
      },
      children: [(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '15px'
        },
        children: [(0,jsx_runtime.jsx)("span", {
          style: {
            fontSize: '2em',
            marginRight: '15px'
          },
          children: "🔑"
        }), (0,jsx_runtime.jsx)("h4", {
          style: {
            margin: 0,
            color: '#2d3748'
          },
          children: "Esqueceu sua senha? Não se preocupe!"
        })]
      }), (0,jsx_runtime.jsx)("p", {
        style: {
          margin: 0,
          color: '#4a5568'
        },
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Nosso sistema oferece um processo seguro e rápido para recuperação de credenciais."
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caso você tenha esquecido sua senha, o sistema Fusion oferece um mecanismo para recuperá-la:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Localize o Link:"
        }), " Na tela de login, procure pelo link ou botão destinado à recuperação de senha (geralmente intitulado \"Esqueceu sua senha?\", \"Lembrar senha\" ou similar)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Informe seu E-mail:"
        }), " Ao clicar no link, você será direcionado para uma nova tela. Nesta tela, insira o endereço de e-mail associado ao seu cadastro no sistema."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Receba as Instruções:"
        }), " Após submeter seu e-mail, o sistema enviará instruções detalhadas para o endereço fornecido, permitindo que você redefina ou recupere sua senha."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
        margin: '30px 0',
        padding: '20px',
        background: '#f7fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      },
      children: [(0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'center',
          flex: '1',
          minWidth: '150px'
        },
        children: [(0,jsx_runtime.jsx)("div", {
          style: {
            width: '60px',
            height: '60px',
            background: '#3182ce',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px',
            color: 'white',
            fontSize: '1.5em'
          },
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "📧"
          })
        }), (0,jsx_runtime.jsx)("h5", {
          children: "Tempo médio"
        }), (0,jsx_runtime.jsx)("p", {
          style: {
            color: '#4a5568',
            margin: 0
          },
          children: "2-5 minutos"
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'center',
          flex: '1',
          minWidth: '150px'
        },
        children: [(0,jsx_runtime.jsx)("div", {
          style: {
            width: '60px',
            height: '60px',
            background: '#38a169',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px',
            color: 'white',
            fontSize: '1.5em'
          },
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "🔒"
          })
        }), (0,jsx_runtime.jsx)("h5", {
          children: "Segurança"
        }), (0,jsx_runtime.jsx)("p", {
          style: {
            color: '#4a5568',
            margin: 0
          },
          children: "Criptografia AES-256"
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'center',
          flex: '1',
          minWidth: '150px'
        },
        children: [(0,jsx_runtime.jsx)("div", {
          style: {
            width: '60px',
            height: '60px',
            background: '#ed8936',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px',
            color: 'white',
            fontSize: '1.5em'
          },
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "🕐"
          })
        }), (0,jsx_runtime.jsx)("h5", {
          children: "Validade"
        }), (0,jsx_runtime.jsx)("p", {
          style: {
            color: '#4a5568',
            margin: 0
          },
          children: "Link válido por 24h"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '20px 0'
      },
      children: [(0,jsx_runtime.jsx)("p", {
        children: "Interface de Recuperação de Senha"
      }), (0,jsx_runtime.jsx)("img", {
        src: "/doc/img/lembrete.png",
        alt: "Tela de lembrete/recuperação de senha do sistema Fusion",
        style: {
          maxWidth: '400px',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }
      }), (0,jsx_runtime.jsx)("p", {
        style: {
          fontSize: '0.8em',
          color: '#666',
          marginTop: '10px'
        },
        children: "Exemplo da tela para iniciar o processo de recuperação de senha."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Importante",
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Mantenha suas credenciais sempre seguras e nunca compartilhe com terceiros. O sistema Fusion registra todos os acessos para auditoria de segurança."
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        background: '#2668ae',
        border: '1px solid #91d5ff',
        padding: '30px',
        borderRadius: '15px',
        textAlign: 'center',
        margin: '30px 0',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      },
      children: [(0,jsx_runtime.jsx)("h3", {
        style: {
          color: '#fff',
          marginBottom: '15px'
        },
        children: "Pronto para começar?"
      }), (0,jsx_runtime.jsx)("p", {
        style: {
          color: '#fff',
          fontSize: '1.1em',
          marginBottom: '20px'
        },
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Este guia simplificado visa facilitar seu primeiro contato e o acesso contínuo ao sistema Fusion."
        })
      }), (0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.9)',
          padding: '12px 20px',
          borderRadius: '25px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        },
        children: [(0,jsx_runtime.jsx)("span", {
          style: {
            marginRight: '10px',
            fontSize: '1.2em'
          },
          children: "💬"
        }), (0,jsx_runtime.jsx)("span", {
          style: {
            color: '#2d3748',
            fontWeight: 'bold'
          },
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Dificuldades? Entre em contato com o suporte técnico da sua instituição"
          })
        })]
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 7293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Admonition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/admonitionUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children){const items=react.Children.toArray(children);const mdxAdmonitionTitleWrapper=items.find(item=>/*#__PURE__*/react.isValidElement(item)&&item.type==='mdxAdmonitionTitle');const rest=items.filter(item=>item!==mdxAdmonitionTitleWrapper);const mdxAdmonitionTitle=mdxAdmonitionTitleWrapper?.props.children;return{mdxAdmonitionTitle,rest:rest.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:rest}):null};}function processAdmonitionProps(props){const{mdxAdmonitionTitle,rest}=extractMDXAdmonitionTitle(props.children);const title=props.title??mdxAdmonitionTitle;return{...props,// Do not return "title: undefined" prop
// this might create unwanted props overrides when merging props
// For example: {...default,...props}
...(title&&{title}),children:rest};}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"admonition":"admonition_xJq3","admonitionHeading":"admonitionHeading_Gvgb","admonitionIcon":"admonitionIcon_Rf37","admonitionContent":"admonitionContent_BuS1"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionContainer({type,className,children}){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.common.admonition,ThemeClassNames/* ThemeClassNames */.G.common.admonitionType(type),styles_module.admonition,className),children:children});}function AdmonitionHeading({icon,title}){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.admonitionHeading,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module.admonitionIcon,children:icon}),title]});}function AdmonitionContent({children}){return children?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.admonitionContent,children:children}):null;}function AdmonitionLayout(props){const{type,icon,title,children,className}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)(AdmonitionContainer,{type:type,className:className,children:[title||icon?/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionHeading,{title:title,icon:icon}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionContent,{children:children})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Note.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconNote(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Note.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const infimaClassName='alert alert--secondary';const defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconNote,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function AdmonitionTypeNote(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...defaultProps,...props,className:(0,clsx/* default */.A)(infimaClassName,props.className),children:props.children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Tip.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconTip(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Tip.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Tip_infimaClassName='alert alert--success';const Tip_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconTip,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function AdmonitionTypeTip(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Tip_defaultProps,...props,className:(0,clsx/* default */.A)(Tip_infimaClassName,props.className),children:props.children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Info.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconInfo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Info.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Info_infimaClassName='alert alert--info';const Info_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconInfo,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function AdmonitionTypeInfo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Info_defaultProps,...props,className:(0,clsx/* default */.A)(Info_infimaClassName,props.className),children:props.children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Warning.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconCaution(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 16 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Warning.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Warning_infimaClassName='alert alert--warning';const Warning_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconCaution,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function AdmonitionTypeWarning(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Warning_defaultProps,...props,className:(0,clsx/* default */.A)(Warning_infimaClassName,props.className),children:props.children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Danger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconDanger(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 16",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Danger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Danger_infimaClassName='alert alert--danger';const Danger_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconDanger,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function AdmonitionTypeDanger(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Danger_defaultProps,...props,className:(0,clsx/* default */.A)(Danger_infimaClassName,props.className),children:props.children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Caution.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Caution_infimaClassName='alert alert--warning';const Caution_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconCaution,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,{...Caution_defaultProps,...props,className:(0,clsx/* default */.A)(Caution_infimaClassName,props.className),children:props.children});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Types.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const admonitionTypes={note:AdmonitionTypeNote,tip:AdmonitionTypeTip,info:AdmonitionTypeInfo,warning:AdmonitionTypeWarning,danger:AdmonitionTypeDanger};// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases={secondary:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeNote,{title:"secondary",...props}),important:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeInfo,{title:"important",...props}),success:props=>/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeTip,{title:"success",...props}),caution:AdmonitionTypeCaution};/* harmony default export */ const Types = ({...admonitionTypes,...admonitionAliases});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getAdmonitionTypeComponent(type){const component=Types[type];if(component){return component;}console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);return Types.info;}function Admonition(unprocessedProps){const props=processAdmonitionProps(unprocessedProps);const AdmonitionTypeComponent=getAdmonitionTypeComponent(props.type);return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeComponent,{...props});}

/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


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