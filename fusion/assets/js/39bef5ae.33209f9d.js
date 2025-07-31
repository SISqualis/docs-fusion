"use strict";
(self["webpackChunkfusion"] = self["webpackChunkfusion"] || []).push([[6661],{

/***/ 5464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fusion_res_res_mdx_39b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fusion-res-res-mdx-39b.json
const site_docs_fusion_res_res_mdx_39b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fusion/res/res","title":"R.E.S - Repositório Eletrônico de Saúde","description":"A funcionalidade de Repositório Eletrônico de Saúde (R.E.S.) no Fusion é essencial para a visualização consolidada dos registros de saúde de um paciente. Para acessar estas informações, utilize a ferramenta de filtro para localizar o paciente desejado. É possível aplicar filtros por diversos campos, como nome, data de nascimento, número de identificação, entre outros critérios disponíveis na tela. Após a inserção dos parâmetros de busca, execute a pesquisa.","source":"@site/docs/fusion/res/res.mdx","sourceDirName":"fusion/res","slug":"/fusion/res/","permalink":"/docs-fusion/docs/fusion/res/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"R.E.S","permalink":"/docs-fusion/docs/category/res"},"next":{"title":"Gestão de Pacientes","permalink":"/docs-fusion/docs/category/gestão-de-pacientes"}}');
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
;// ./docs/fusion/res/res.mdx


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'R.E.S - Repositório Eletrônico de Saúde';

const assets = {

};






const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "res---repositório-eletrônico-de-saúde",
        children: "R.E.S - Repositório Eletrônico de Saúde"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A funcionalidade de Repositório Eletrônico de Saúde (R.E.S.) no Fusion é essencial para a visualização consolidada dos registros de saúde de um paciente. Para acessar estas informações, utilize a ferramenta de filtro para localizar o paciente desejado. É possível aplicar filtros por diversos campos, como nome, data de nascimento, número de identificação, entre outros critérios disponíveis na tela. Após a inserção dos parâmetros de busca, execute a pesquisa."
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "tip",
      title: "Dica de Pesquisa Eficiente",
      children: (0,jsx_runtime.jsx)("p", {
        children: "Para otimizar a busca, utilize pelo menos dois critérios de filtro. Por exemplo, combine o nome parcial do paciente com a data de nascimento para obter resultados mais precisos e reduzir o tempo de resposta do sistema."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Pesquisa de Paciente para acesso ao R.E.S.",
        src: (__webpack_require__(6995)/* ["default"] */ .A) + "",
        width: "1366",
        height: "768"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para aceder ao histórico completo do paciente no R.E.S., clique no ícone ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"VISUALIZAR\""
      }), ", geralmente localizado na parte inferior da tela ou na linha correspondente ao paciente selecionado. Esta ação abrirá uma visão detalhada, organizada cronologicamente, que pode incluir consultas, exames, internações, medicações, alergias, vacinas, e outros dados clínicos relevantes."]
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "info",
      title: "Acesso ao Histórico Detalhado",
      children: (0,jsx_runtime.jsxs)("p", {
        children: ["O botão ", (0,jsx_runtime.jsx)("strong", {
          children: "VISUALIZAR"
        }), ", situado à direita na linha do paciente selecionado, é o seu portal para o histórico de saúde unificado."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "O R.E.S. está estruturado em diversas abas, cada uma focada num aspecto específico do cuidado ao paciente:"
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "note",
      title: "Navegação Entre Abas",
      children: (0,jsx_runtime.jsx)("p", {
        children: "Cada aba do R.E.S. mantém os filtros aplicados, permitindo uma navegação fluida entre as diferentes seções sem perder o contexto do paciente selecionado. Use as teclas de atalho Ctrl+Tab para alternar rapidamente entre as abas."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      defaultValue: "atendimento",
      values: [{
        label: 'Atendimento',
        value: 'atendimento'
      }, {
        label: 'Diagnóstico',
        value: 'diagnostico'
      }, {
        label: 'Evoluções',
        value: 'evolucoes'
      }, {
        label: 'Anamnese',
        value: 'anamnese'
      }, {
        label: 'Medicamentos Prescritos',
        value: 'medicamentos_prescritos'
      }, {
        label: 'Medicamentos Administrados',
        value: 'medicamentos_administrados'
      }, {
        label: 'Procedimentos Solicitados',
        value: 'procedimentos_solicitados'
      }, {
        label: 'Procedimentos Realizados',
        value: 'procedimentos_realizados'
      }, {
        label: 'Sinais Vitais',
        value: 'sinais_vitais'
      }, {
        label: 'Transportes',
        value: 'transportes'
      }, {
        label: 'Eventos',
        value: 'eventos'
      }, {
        label: 'Vacinas',
        value: 'vacinas'
      }, {
        label: 'Alergias',
        value: 'alergias'
      }],
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "atendimento",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Histórico Completo de Atendimentos: A Interoperabilidade em Ação"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Nesta seção, acede-se ao histórico integral de atendimentos do paciente, independentemente da unidade ou sistema onde ocorreram. Graças à capacidade de interoperabilidade do Fusion, os dados de diferentes sistemas de gestão são integrados, centralizando as informações de cada paciente."
          })
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Considere um paciente que chega a uma unidade de emergência com um histórico médico complexo. Com o Fusion, é possível visualizar todos os atendimentos, exames, internações e medicamentos, mesmo que estes dados estejam dispersos por múltiplos sistemas (consultório, laboratório, hospital, farmácia)."
          })
        }), (0,jsx_runtime.jsx)("p", {
          children: "Esta visão unificada e cronologicamente organizada permite:"
        }), (0,jsx_runtime.jsxs)("ul", {
          children: [(0,jsx_runtime.jsx)("li", {
            children: "Compreensão integral do quadro clínico do paciente."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Tomada de decisões mais informadas e eficazes."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Prevenção de erros médicos e redundâncias em exames e tratamentos."
          }), (0,jsx_runtime.jsx)("li", {
            children: "Oferta de um atendimento mais célere, seguro e personalizado."
          })]
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "A interoperabilidade proporcionada pelo Fusion transforma a forma como os profissionais de saúde acedem e utilizam as informações dos pacientes, otimizando o fluxo de trabalho e, primordialmente, beneficiando a saúde e o bem-estar de cada indivíduo."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "caution",
          title: "Atenção à Confidencialidade",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Ao aceder aos dados históricos de atendimento, certifique-se de que possui as devidas autorizações e que está a seguir os protocolos de confidencialidade da instituição. O acesso inadequado pode resultar em violações de privacidade."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/3_atendimentos_do_pacietne.png",
          alt: "Tela de Atendimentos do Paciente no Fusion",
          class: "img-fluid rounded shadow-sm my-3"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Ao clicar numa linha específica da lista de atendimentos, obtém-se acesso ao prontuário detalhado daquele atendimento, conforme ilustrado abaixo. Nesta tela, diversas abas fornecem acesso a informações específicas do prontuário."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/3-1_dentro_atendimento.png",
          alt: "Detalhes de um Atendimento Específico no Fusion",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "diagnostico",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Diagnósticos Precisos: A Base para um Tratamento Eficaz"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Aqui são apresentados os diagnósticos registados pelos profissionais de saúde no prontuário do paciente. Estas informações são cruciais para a compreensão do estado de saúde do indivíduo e para a definição de um plano de tratamento adequado."
          })
        }), (0,jsx_runtime.jsx)("p", {
          children: "Um diagnóstico preciso é fundamental para uma tomada de decisão clínica eficaz, permitindo:"
        }), (0,jsx_runtime.jsxs)("ul", {
          children: [(0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "Identificar a causa dos sintomas:"
            }), " Compreender a origem dos problemas de saúde é essencial."]
          }), (0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "Definir o tratamento correto:"
            }), " Prescrição de medicamentos, terapias ou procedimentos específicos."]
          }), (0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "Monitorizar a progressão da doença:"
            }), " Avaliar a eficácia do tratamento e realizar ajustes."]
          }), (0,jsx_runtime.jsxs)("li", {
            children: [(0,jsx_runtime.jsx)("strong", {
              children: "Prevenir complicações:"
            }), " Um diagnóstico precoce pode garantir um melhor prognóstico."]
          })]
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "No Fusion, os diagnósticos são apresentados de forma clara e organizada, facilitando a consulta e o acompanhamento."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "warning",
          title: "Validação de Diagnósticos",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Sempre verifique a data e o profissional responsável pelo diagnóstico. Em casos de diagnósticos conflitantes de diferentes sistemas, consulte o médico responsável para esclarecimentos antes de tomar decisões clínicas."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/3_diagnostico.png",
          alt: "Tela de Diagnósticos do Paciente no Fusion",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "evolucoes",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Registos de Evolução Multiprofissionais: Uma Visão Completa do Cuidado"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta seção reúne os registos de evolução do paciente, inseridos por diferentes profissionais de saúde (médicos, enfermeiros, fisioterapeutas, nutricionistas, etc.). Permite acompanhar a progressão do paciente de forma abrangente, centralizando todas as anotações, independentemente do sistema de gestão hospitalar de origem."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "tip",
          title: "Filtro por Profissional",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Utilize o filtro por categoria profissional para visualizar evoluções específicas. Por exemplo, filtre apenas por \"Enfermagem\" para acompanhar os cuidados de rotina ou por \"Fisioterapia\" para monitorizar a reabilitação motora."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_evolucao.png",
          alt: "Tela de Evoluções do Paciente no Fusion",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "anamnese",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Registo do Conjunto de Anamnese: A História do Paciente em Detalhes"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Acede-se aqui ao registo completo da anamnese do paciente, um conjunto de informações cruciais para a compreensão da sua história de saúde. Este registo oferece um panorama completo, desde informações básicas até ao histórico familiar. Estes dados são essenciais para um diagnóstico preciso, plano de tratamento individualizado, acompanhamento da evolução e segurança do paciente."
          })
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "O Fusion centraliza todas as informações da anamnese de diferentes sistemas de gestão num único local."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "info",
          title: "Importância da Anamnese Completa",
          children: (0,jsx_runtime.jsx)("p", {
            children: "A anamnese é fundamental para o diagnóstico correto. Sempre verifique se há informações de anamnese em diferentes períodos, pois o histórico do paciente pode ter sido atualizado em consultas subsequentes."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_anamneses.png",
          alt: "Tela de Anamnese do Paciente no Fusion",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "medicamentos_prescritos",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Medicamentos Prescritos"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Através da integração de dados de prontuário com o Fusion, o profissional de saúde acede, de forma centralizada, a todas as prescrições médicas do paciente, independentemente do sistema de gestão em que foram geradas. Esta funcionalidade garante uma visão completa do tratamento medicamentoso."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "caution",
          title: "Verificação de Interações Medicamentosas",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Sempre verifique possíveis interações entre medicamentos prescritos e administrados. Compare as prescrições de diferentes períodos para identificar mudanças no tratamento e garantir a segurança do paciente."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_med_prescrito.png",
          alt: "Tela de Medicamentos Prescritos do Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "medicamentos_administrados",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Medicamentos Administrados"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "A integração de dados de prontuário com o Fusion permite visualizar, de forma centralizada, as medicações efetivamente administradas ao paciente, independentemente do sistema de gestão onde foram registadas. Garante uma visão completa do tratamento medicamentoso aplicado."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "note",
          title: "Rastreabilidade da Administração",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Esta seção permite verificar se os medicamentos prescritos foram efetivamente administrados, incluindo horários, dosagens e profissional responsável. Use esta informação para monitorizar a adesão ao tratamento."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_med_administrad.png",
          alt: "Tela de Medicamentos Administrados ao Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "procedimentos_solicitados",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Procedimentos Solicitados"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Visualize todas as solicitações de procedimentos realizadas em diferentes sistemas, centralizadas no Fusion. A plataforma consolida estas informações, agiliza o fluxo de trabalho e garante a integridade dos dados, contribuindo para um cuidado mais eficiente e seguro."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "tip",
          title: "Acompanhamento de Solicitações",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Utilize esta seção para verificar o status das solicitações de procedimentos e identificar possíveis atrasos ou pendências. Filtros por data e tipo de procedimento podem ajudar na organização do fluxo de trabalho."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_proc_realiz.png",
          alt: "Tela de Procedimentos Solicitados para o Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "procedimentos_realizados",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Procedimentos Realizados"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Aceda e visualize todos os procedimentos efetivamente realizados no paciente, provenientes de diferentes sistemas e centralizados no Fusion. A plataforma consolida as informações, oferecendo um histórico completo e integrado, independentemente do sistema de origem."
          })
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Com uma interface intuitiva, o profissional seleciona o paciente e acede ao histórico de procedimentos realizados, com detalhes como data, hora, local, profissional responsável e resultados, quando disponíveis."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "info",
          title: "Resultados de Procedimentos",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Quando disponíveis, os resultados dos procedimentos são exibidos diretamente na interface. Para procedimentos com imagens ou relatórios extensos, utilize os links de acesso direto aos sistemas de origem."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_proc_solic.png",
          alt: "Tela de Procedimentos Realizados no Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "sinais_vitais",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Sinais Vitais"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Registo dos sinais vitais coletados no sistema eletrônico de prontuário da instituição e consolidados no Fusion, permitindo um acompanhamento contínuo dos parâmetros fisiológicos do paciente."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "note",
          title: "Monitorização Contínua",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Os sinais vitais são apresentados em ordem cronológica, permitindo identificar tendências e padrões. Use os filtros de data para focar em períodos específicos de internação ou tratamento."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_sinais_vit.png",
          alt: "Tela de Sinais Vitais do Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "transportes",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Transportes"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Indicação de movimentações do paciente, como transferências entre unidades ou agendamentos de transporte, quando o sistema de gestão de origem regista estas informações."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "tip",
          title: "Logística Hospitalar",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Esta funcionalidade é especialmente útil em hospitais de grande porte para rastrear a localização atual do paciente e histórico de movimentações. Facilita a coordenação entre diferentes departamentos."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_transp_pac.png",
          alt: "Tela de Registo de Transportes do Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "eventos",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Eventos"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Disponibiliza a visualização de eventos clínicos relevantes registados no Prontuário Eletrônico do Paciente (PEP) e integrados ao Fusion."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "warning",
          title: "Eventos Críticos",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Preste atenção especial a eventos marcados como críticos ou urgentes. Estes podem incluir reações adversas, intercorrências ou mudanças significativas no estado clínico que requerem atenção imediata."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_eventos.png",
          alt: "Tela de Eventos Clínicos do Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "vacinas",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Vacinas"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Visualize o histórico completo de vacinação do paciente, centralizado no Fusion. A plataforma reúne as informações de diferentes sistemas de registo, oferecendo um histórico unificado e acessível."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "info",
          title: "Calendário Vacinal",
          children: (0,jsx_runtime.jsx)("p", {
            children: "Utilize esta seção para verificar o status de imunização do paciente e identificar vacinas em atraso. Esta informação é crucial para prevenir doenças e garantir a proteção adequada, especialmente em pacientes imunocomprometidos."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4_vacina.png",
          alt: "Tela de Histórico de Vacinação do Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "alergias",
        children: [(0,jsx_runtime.jsx)("h4", {
          children: "Alergias"
        }), (0,jsx_runtime.jsx)("p", {
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Aceda e visualize o histórico completo de alergias do paciente, centralizado no Fusion. É importante notar que o Fusion não regista as alergias diretamente, mas consolida as informações de alergia que foram inseridas no sistema de gestão de origem, oferecendo um histórico unificado."
          })
        }), (0,jsx_runtime.jsx)(Admonition/* default */.A, {
          type: "danger",
          title: "Alerta de Segurança - Alergias",
          children: (0,jsx_runtime.jsx)("p", {
            children: "As informações de alergia são fundamentais para a segurança do paciente. Sempre verifique esta seção antes de prescrever medicamentos ou procedimentos. Em caso de dúvidas sobre alergias registadas, confirme diretamente com o paciente ou responsável."
          })
        }), (0,jsx_runtime.jsx)("img", {
          src: "/doc/img/4alergia.png",
          alt: "Tela de Registo de Alergias do Paciente",
          class: "img-fluid rounded shadow-sm my-3"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Admonition/* default */.A, {
      type: "tip",
      title: "Boas Práticas de Utilização do R.E.S.",
      children: [(0,jsx_runtime.jsx)("p", {
        children: "Para obter o máximo benefício do Repositório Eletrônico de Saúde:"
      }), (0,jsx_runtime.jsxs)("ul", {
        children: [(0,jsx_runtime.jsx)("li", {
          children: "Sempre verifique a data das informações para garantir que está a trabalhar com dados atualizados"
        }), (0,jsx_runtime.jsx)("li", {
          children: "Use os filtros de data e profissional para focar na informação mais relevante"
        }), (0,jsx_runtime.jsx)("li", {
          children: "Combine informações de diferentes abas para uma visão holística do paciente"
        }), (0,jsx_runtime.jsx)("li", {
          children: "Em caso de inconsistências entre sistemas, priorize as informações mais recentes e confirme com a equipa responsável"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(Admonition/* default */.A, {
      type: "note",
      title: "Suporte e Assistência",
      children: (0,jsx_runtime.jsx)("p", {
        children: "Para questões técnicas ou dúvidas sobre a utilização do R.E.S., entre em contacto com a equipa de suporte técnico da sua instituição. Para questões clínicas sobre os dados apresentados, consulte sempre o profissional de saúde responsável pelo paciente."
      })
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

/***/ 6995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3_pesquisa_do_paciente-6445e92e8535f24f768ae1a00f142849.png");

/***/ })

}]);