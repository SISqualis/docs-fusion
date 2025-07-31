"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[8830],{

/***/ 541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img2-0403bc4a87ed35bbc968b1aa46cde6aa.png");

/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_manuais_apis_md_c17_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-manuais-apis-md-c17.json
const site_docs_manuais_apis_md_c17_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"manuais/apis","title":"Processos de Integração","description":"O objetivo deste documento é descrever as rotinas e o fluxo dos processos de integração de dados do sistema Fusion com os diversos sistemas atualmente integrados com o sistema Fusion.","source":"@site/docs/manuais/apis.md","sourceDirName":"manuais","slug":"/manuais/apis","permalink":"/docs-fusion/docs/manuais/apis","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar\\\\_position":4,"title":"Processos de Integração"},"sidebar":"tutorialSidebar","previous":{"title":"Acesso ao FUSION via PEP MV","permalink":"/docs-fusion/docs/manuais/pep"},"next":{"title":"Acesso ao PEP MV via URL","permalink":"/docs-fusion/docs/manuais/pep-token"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/manuais/apis.md


const frontMatter = {
	'sidebar\_position': 4,
	title: 'Processos de Integração'
};
const contentTitle = 'DOCUMENTAÇÃO DOS PROCESSOS DE INTEGRAÇÃO';

const assets = {

};



const toc = [{
  "value": "HISTÓRICO DE REVISÕES DO DOCUMENTO",
  "id": "histórico-de-revisões-do-documento",
  "level": 3
}, {
  "value": "Fusion.Integracoes.Consulfarma",
  "id": "fusionintegracoesconsulfarma",
  "level": 2
}, {
  "value": "Processos de integração",
  "id": "processos-de-integração",
  "level": 3
}, {
  "value": "Carga",
  "id": "carga",
  "level": 4
}, {
  "value": "Além dos dados de atendimentos, também são integrados os seguintes dados:",
  "id": "além-dos-dados-de-atendimentos-também-são-integrados-os-seguintes-dados",
  "level": 4
}, {
  "value": "Importação",
  "id": "importação",
  "level": 4
}, {
  "value": "Fluxo integração",
  "id": "fluxo-integração",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações",
  "level": 3
}, {
  "value": "Fusion.Integracoes.eSusAB",
  "id": "fusionintegracoesesusab",
  "level": 2
}, {
  "value": "Processos de integração",
  "id": "processos-de-integração-1",
  "level": 3
}, {
  "value": "Importação",
  "id": "importação-1",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-1",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações-1",
  "level": 3
}, {
  "value": "Fusion.Integracoes.eSusAB.CargaInicial",
  "id": "fusionintegracoesesusabcargainicial",
  "level": 2
}, {
  "value": "Processos de Integração",
  "id": "processos-de-integração-2",
  "level": 3
}, {
  "value": "Carga Inicial",
  "id": "carga-inicial",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-2",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações-2",
  "level": 3
}, {
  "value": "Fusion.Integracoes.MV",
  "id": "fusionintegracoesmv",
  "level": 2
}, {
  "value": "Processos de Integração",
  "id": "processos-de-integração-3",
  "level": 3
}, {
  "value": "Atualização Fila Pendências",
  "id": "atualização-fila-pendências",
  "level": 4
}, {
  "value": "Busca Atendimentos Paciente",
  "id": "busca-atendimentos-paciente",
  "level": 4
}, {
  "value": "Busca Atualizações Paciente",
  "id": "busca-atualizações-paciente",
  "level": 4
}, {
  "value": "Carga Inicial",
  "id": "carga-inicial-1",
  "level": 4
}, {
  "value": "Processamento Pendencia Abertura",
  "id": "processamento-pendencia-abertura",
  "level": 4
}, {
  "value": "Processamento Pendencia Alta",
  "id": "processamento-pendencia-alta",
  "level": 4
}, {
  "value": "Processamento Pendencia Atualização Paciente",
  "id": "processamento-pendencia-atualização-paciente",
  "level": 4
}, {
  "value": "Processamento Pendencia Troca Leito",
  "id": "processamento-pendencia-troca-leito",
  "level": 4
}, {
  "value": "Processamento Pendencia UTI",
  "id": "processamento-pendencia-uti",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-3",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações-3",
  "level": 3
}, {
  "value": "Fusion.Integracoes.Skymed",
  "id": "fusionintegracoesskymed",
  "level": 2
}, {
  "value": "Introdução",
  "id": "introdução",
  "level": 3
}, {
  "value": "Processos de Integração",
  "id": "processos-de-integração-4",
  "level": 3
}, {
  "value": "Importar Pendências",
  "id": "importar-pendências",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-4",
  "level": 3
}, {
  "value": "onfigurações",
  "id": "onfigurações",
  "level": 3
}, {
  "value": "Fusion.Integracoes.Sotech",
  "id": "fusionintegracoessotech",
  "level": 2
}, {
  "value": "Processos de Integração",
  "id": "processos-de-integração-5",
  "level": 3
}, {
  "value": "Carga",
  "id": "carga-1",
  "level": 4
}, {
  "value": "Integração",
  "id": "integração",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-5",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações-4",
  "level": 3
}, {
  "value": "Fusion.Integracoes.Tasy",
  "id": "fusionintegracoestasy",
  "level": 2
}, {
  "value": "Processos de Integração",
  "id": "processos-de-integração-6",
  "level": 3
}, {
  "value": "Buscar Atendimentos Tasy",
  "id": "buscar-atendimentos-tasy",
  "level": 4
}, {
  "value": "Busca Informações Atendimento",
  "id": "busca-informações-atendimento",
  "level": 4
}, {
  "value": "Gerar Pendência Atualização Pacientes",
  "id": "gerar-pendência-atualização-pacientes",
  "level": 4
}, {
  "value": "Integrar Pendência Atualização Pacientes",
  "id": "integrar-pendência-atualização-pacientes",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-6",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações-5",
  "level": 3
}, {
  "value": "Fusion.Integracoes.TrackCare",
  "id": "fusionintegracoestrackcare",
  "level": 2
}, {
  "value": "Processos de Integração",
  "id": "processos-de-integração-7",
  "level": 3
}, {
  "value": "Carga Inicial Pacientes",
  "id": "carga-inicial-pacientes",
  "level": 4
}, {
  "value": "Envio Arquivo Fusion",
  "id": "envio-arquivo-fusion",
  "level": 4
}, {
  "value": "Pendência Busca Paciente",
  "id": "pendência-busca-paciente",
  "level": 4
}, {
  "value": "Sincronizar Pacientes",
  "id": "sincronizar-pacientes",
  "level": 4
}, {
  "value": "Fluxo Integração",
  "id": "fluxo-integração-7",
  "level": 3
}, {
  "value": "Configurações",
  "id": "configurações-6",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "documentação-dos-processos-de-integração",
        children: "DOCUMENTAÇÃO DOS PROCESSOS DE INTEGRAÇÃO"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Objetivo",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "O objetivo deste documento é descrever as rotinas e o fluxo dos processos de integração de dados do sistema Fusion com os diversos sistemas atualmente integrados com o sistema Fusion."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "histórico-de-revisões-do-documento",
      children: "HISTÓRICO DE REVISÕES DO DOCUMENTO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "DATA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "VERSÃO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "DESCRIÇÃO DA ALTERAÇÃO"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "AUTOR"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Criação do documento"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoesconsulfarma",
      children: "Fusion.Integracoes.Consulfarma"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração",
      children: "Processos de integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "carga",
      children: "Carga"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que monitora os atendimentos atualizados e alimenta a tabela de integração ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoAtendimento"
      }), ". Esta tabela será posteriormente utilizada pelo processo “Importação” para integrar os atendimentos atualizados no banco de dados Consulfarma para o banco de dados do sistema Fusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "além-dos-dados-de-atendimentos-também-são-integrados-os-seguintes-dados",
      children: "Além dos dados de atendimentos, também são integrados os seguintes dados:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pacientes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alergias dos Pacientes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vacinas dos Pacientes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cirurgias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnósticos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exames Ambulatoriais"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prescrições de Medicamentos"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "importação",
      children: "Importação"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que monitora os registros da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoAtendimento"
      }), " e realiza a integração dos dados de atendimento do banco de dados Consulfarma para o banco de dados do sistema Fusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração",
      children: "Fluxo integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(9302)/* ["default"] */ .A) + "",
        width: "734",
        height: "717"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar as seguintes características do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados Consulfarma"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Características do serviço de integração"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntervaloCarga"
            }), ": intervalo de execução do processo de integração “Carga”, originalmente configurado para “23:00:05”."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntervaloImportacao"
            }), ": intervalo de execução do processo de integração “Importação”, originalmente configurado para “00:00:05”."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MaxRecords"
            }), ": Número máximo de registros a serem processados por cliclo de execução no processo de integração “Importação”."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntegracaoID"
            }), ": Código da integração Consulfarma no banco de dados do sistema Fusion."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endereço da API Fusion"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoesesusab",
      children: "Fusion.Integracoes.eSusAB"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-1",
      children: "Processos de integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "importação-1",
      children: "Importação"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Importa os atendimentos do banco de dados eSus para o sistema Fusion.O serviço ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoWorker"
      }), " é executado a cada 5 segundos e realiza importação dos atendimentos atualizados no banco de dados eSus para o banco de dados do sistema Fusion utilizando a integração via layout json."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Além dos dados dos atendimentos são importados também os seguintes dados:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evolução"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vacinas dos Pacientes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sinais Vitais"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnósticos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solicitação Exame"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prescrições de medicamentos"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-1",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(541)/* ["default"] */ .A) + "",
        width: "577",
        height: "574"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações-1",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar as seguintes características do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados eSusAB"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Características do serviço de integração"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Interval"
            }), ": intervalo de execução do processo de integração “Importação”, originalmente configurado para “00:00:05”."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MaxRecords"
            }), ": Número máximo de registros a serem processados por cliclo de execução no processo de integração “Importação”."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IntegracaoID"
            }), ": Código da integração Consulfarma no banco de dados do sistema Fusion."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "LayoutID"
            }), ": Código do layout de importação de dados para o Fusion."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endereço da API Fusion"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoesesusabcargainicial",
      children: "Fusion.Integracoes.eSusAB.CargaInicial"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-2",
      children: "Processos de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "carga-inicial",
      children: "Carga Inicial"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Realiza a carga inicial dos dados de atendimentos importando todos os atendimentos registrados no banco de dados eSus para o sistema Fusion.Esta operação é realizada apenas uma vez quando o sistema Fusion é implantado e o objetivo é importar todo o histórico de atendimentos registrados na base de dados eSus para o sistema Fusion permitindo assim que, a partir desta carga inicial, as integrações de atendimentos do sistema eSus possa ser realizado apenas nos atendimentos atualizados."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-2",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(9412)/* ["default"] */ .A) + "",
        width: "787",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações-2",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar a seguinte característica do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados eSusAB"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoesmv",
      children: "Fusion.Integracoes.MV"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-3",
      children: "Processos de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "atualização-fila-pendências",
      children: "Atualização Fila Pendências"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo de integração executado originalmente a cada 30 segundos que busca na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoAtendimento"
      }), " os registros com atualização de abertura pendente ou atualização de alta pendente e atualiza a fila de pendências a serem processadas. Esta fila será utilizada posteriormente por outros processos de integração para atualizar os dados no banco de dados do sistema Fusion. A tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoAtendimento"
      }), " é alimentada por uma trigger registrada na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DBAMV.ATENDIME"
      }), " e sempre que um novo registro é incluído, alterado ou excluído desta tabela é inserido, atualizado ou excluído um registro de pendência de atualização da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoAtendimente"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "busca-atendimentos-paciente",
      children: "Busca Atendimentos Paciente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo de integração executado originalmente a cada 5 segundos que verifica se existem pendências de busca de atendimentos na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendenciaBuscaAtendimentos"
      }), " e, em caso positivo, alimenta a tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportacaoAtendimento"
      }), " com pendências de abertura de atendimento para ser processada posteriormente pelo processo “Processamento Pendencia Abertura”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "busca-atualizações-paciente",
      children: "Busca Atualizações Paciente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração que verifica se existem pendências de atualização de dados de pacientes e, em caso positivo, registra uma pendência de integração para ser processada posteriormente pelo processo de integração “Processamento Pendencia Atualização Paciente”."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "carga-inicial-1",
      children: "Carga Inicial"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração executado apenas uma vês no início da implantação do sistema para importar todo o histórico de atendimentos registrados no sistema MV para o sistema Fusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "processamento-pendencia-abertura",
      children: "Processamento Pendencia Abertura"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração executado originalmente a cada 5 segundos que verifica se existem pendências de abertura de atendimento registradas na fila de pendências atualizada pelo processo “Atualização Fila Pendências” e, em caso positivo, executa a integração das aberturas de atendimento para o sistema Fusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "processamento-pendencia-alta",
      children: "Processamento Pendencia Alta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração executado originalmente a cada 10 segundos que verifica se existem pendências de alta registrada na fila de pendências atualizada pelo processo “Atualização Fila Pendências” e, em caso positivo, executa a integração dos registros de alta para o sistema Fusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "processamento-pendencia-atualização-paciente",
      children: "Processamento Pendencia Atualização Paciente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração que verifica se existem pendências de atualização de dados de pacientes e, em caso positivo, executa a integração dos pacientes para o sistema Fusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "processamento-pendencia-troca-leito",
      children: "Processamento Pendencia Troca Leito"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração que verifica se existem pendências de registro de troca de leito na fila de pendências atualizada pelo processo “Atualização Fila Pendências” e, em caso positivo, executa a integração dos dados de troca de leito para o sistema Fusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "processamento-pendencia-uti",
      children: "Processamento Pendencia UTI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo de integração que verifica se existem registros de atendimento na UTI e, em caso positivo, executa a integração dos atendimentos de UTI para o sistema Fusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-3",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(5323)/* ["default"] */ .A) + "",
        width: "692",
        height: "867"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações-3",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar as seguintes características do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados MV"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurações de Intervalo de execução, Habilitado, Id Integração, Id Layout entre outras para os processos de integração:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CargaInicial"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AtualizacaoFilaPendencias"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BuscaAtendimentosPaciente"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ProcessamentoPendenciaAbertura"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ProcessamentoPendenciaAlta"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ProcessamentoPendenciaUti"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BuscaAtualizacoesPaciente"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ProcessamentoPendenciaAtualizacaoPaciente"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endereço da API Fusion"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoesskymed",
      children: "Fusion.Integracoes.Skymed"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "introdução",
      children: "Introdução"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projeto de integração de dados que tem como objetivo integrar com o sistema fusion as agendas cirúrgicas do sistema MV. As pendências de integração são geradas na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FUSION_INTEGRACAO.AtualizacaoAgendaCirurgia"
      }), " através de uma trigger de “Inclusão” e “Alteração” registrada na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DBAMV.AGE_CIR"
      }), " do sistema MV; sempre que um agendamento cirúrgico é incluído ou alterado um novo registro de pendência de integração é gerado na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FUSION_INTEGRACAO.AtualizacaoAgendaCirurgia"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-4",
      children: "Processos de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "importar-pendências",
      children: "Importar Pendências"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo de integração que obtém as pendências de integração de agendamento cirúrgico da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FUSION_INTEGRACAO.AtualizacaoAgendaCirurgia"
      }), " e gera no banco de dados do sistema Fusion uma pendência de integração de aplicação que será posteriormente processada pelo Projeto de integração “Fusion.Service”[cite: 31]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-4",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(4194)/* ["default"] */ .A) + "",
        width: "424",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onfigurações",
      children: "onfigurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar a seguinte característica do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurações de Intervalo de execução da integração"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoessotech",
      children: "Fusion.Integracoes.Sotech"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-5",
      children: "Processos de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "carga-1",
      children: "Carga"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo de interação que obtém os dados de atendimentos, anamnese, diagnóstico, prescrição de medicamentos, exames ambulatoriais, movimentação de leitos, sinais vitais e evoluções e gera uma pendência de integração na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendenciaIntegracao"
      }), " no banco de dados do Fusion. As pendências de integração geradas por este processo serão posteriormente tratadas pelo processo de integração “Integração”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "integração",
      children: "Integração"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo de integração que obtém as pendências de integração da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendenciaIntegracao"
      }), " no banco de dados do sistema Fusion e, com base nas pendências registradas, integra os atendimentos do banco de dados Sotech para o banco de dados do sistema Fusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-5",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(2377)/* ["default"] */ .A) + "",
        width: "632",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações-4",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar as seguintes características do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados Sotech"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurações de Intervalo de execução e quantidade de registros para os processos de integração:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Carga"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Integracao"
            }), ";"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endereço da API Fusion"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoestasy",
      children: "Fusion.Integracoes.Tasy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-6",
      children: "Processos de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "buscar-atendimentos-tasy",
      children: "Buscar Atendimentos Tasy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que obtém os dados de atendimentos do banco de dados do Tasy para preparar a integração destes atendimentos com o Fusion. Este processo primeiramente registra os atendimentos a serem integrados na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportarAtendimento"
      }), " do Fusion para posterior processamento pelos processo de integração “Busca Informações Atendimento”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "busca-informações-atendimento",
      children: "Busca Informações Atendimento"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que lê as pendências de importação de atendimentos da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportarAtendimento"
      }), " gerados pelo processo “Buscar Atendimentos Tasy” e integra os atendimentos com o sistema Fusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "gerar-pendência-atualização-pacientes",
      children: "Gerar Pendência Atualização Pacientes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que lê os dados de pacientes da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Pessoa_Fisica"
      }), " com base na data de atualização do registro e gera uma pendência de integração de pacientes na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendenciaIntegracao"
      }), " do banco de dados do Fusion para posterior processamento pelo processo de integração “Integrar Pendência Atualização Pacientes”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "integrar-pendência-atualização-pacientes",
      children: "Integrar Pendência Atualização Pacientes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que lê a pendencias de integração de dados de pacientes da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PendenciaIntegração"
      }), " geradas pelo processo “Gerar Pendencia Atualização Pacientes” e integra os dados dos pacientes na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Paciente"
      }), " do sistema Fusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-6",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(5472)/* ["default"] */ .A) + "",
        width: "691",
        height: "651"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações-5",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar as seguintes características do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados TrackCare"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados Integrador"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurações de Intervalo de execução e quantidade de registros para os processos de integração:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "`BuscarAendimentosImportar;"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "`BuscarInformacoesAtendimentos;"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endereço da API Fusion"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fusionintegracoestrackcare",
      children: "Fusion.Integracoes.TrackCare"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "processos-de-integração-7",
      children: "Processos de Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "carga-inicial-pacientes",
      children: "Carga Inicial Pacientes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que busca na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SQLUser.PA_Person"
      }), " os registros de pacientes a serem integrados com base no último ID de paciente que havia sido integrado. Na primeira vês que o processo é executado ele busca os pacientes do Id 1 até a quantidade de registros configurados para processamento por ciclo de integração, no ciclo seguinte o Id inicial de pesquisa é incrementado da quantidade de registros integrados no ciclo anterior e assim sucessivamente até que todos os registos de pacientes sejam integrados. Os dados dos pacientes são primeiramente gravados na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PacienteSES"
      }), " e serão posteriormente integrados pelo processo “Sincronizar Pacientes”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "envio-arquivo-fusion",
      children: "Envio Arquivo Fusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que obtém os registros de integração HL7 da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PacienteArquivo"
      }), " e envia para a integração HL7 do Fusion. A tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PacienteArquivo"
      }), " é alimentada pelo processo “Pendencia Busca Paciente”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pendência-busca-paciente",
      children: "Pendência Busca Paciente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Processo que obtém do banco TrackCare os dados de:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admissões"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alergias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnósticos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anamneses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evolução"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Procedimentos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medicamentos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cirurgias"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sinais Vitais"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["E gera o registro de um arquivo de integração com os dados do paciente na tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PacienteArquivo"
      }), " que será posteriormente integrado com o sistema Fusion através do processo “Envio Arquivo Fusion”."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sincronizar-pacientes",
      children: "Sincronizar Pacientes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Processo que obtém os pacientes cujos dados foram recentemente atualizados através da tabela ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PacienteSES"
      }), " do banco TrackCare e sincroniza estes dados com o banco integrador comparando os registros dos dois bancos que possuam alguma diferença em seus dados."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fluxo-integração-7",
      children: "Fluxo Integração"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fluxo",
        src: (__webpack_require__(6007)/* ["default"] */ .A) + "",
        width: "689",
        height: "782"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurações-6",
      children: "Configurações"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No arquivo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appsettings.json"
      }), " é possível configurar as seguintes características do serviço de integração:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados TrackCare"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conexão com o banco de dados Integrador"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurações de Intervalo de execução, Habilitado e quantidade de registros para os processos de integração:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CargaInicialPacientes"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SincronizarPacientes"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PendenciaBuscaPaciente"
            }), ";"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "EnvioArquivoFusion"
            }), ";"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endereço da API Fusion"
        })
      }), "\n"]
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

/***/ 2377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img6-c992fcd8185a7aa4136ab8033cd84d60.png");

/***/ }),

/***/ 4194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img5-e6e88b8f5e742d60150d5dd3cf3c782c.png");

/***/ }),

/***/ 5323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img4-a0fc14d82e5f87e1c5fd1da1491ced43.png");

/***/ }),

/***/ 5472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img7-916d5d3c20fbfc0d8844d0cdb2d9d96b.png");

/***/ }),

/***/ 6007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img8-30fca677b298a066b4d06121d7619e23.png");

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

/***/ 9302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img1-05016d1c60d7e25c1a7699b99e6c1fed.png");

/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img3-067c4b81e6632f5ba0164e960c543757.png");

/***/ })

}]);