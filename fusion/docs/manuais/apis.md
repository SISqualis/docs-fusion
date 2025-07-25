---
sidebar\_position: 4
title: Processos de Integração
---

# DOCUMENTAÇÃO DOS PROCESSOS DE INTEGRAÇÃO


:::info Objetivo
O objetivo deste documento é descrever as rotinas e o fluxo dos processos de integração de dados do sistema Fusion com os diversos sistemas atualmente integrados com o sistema Fusion.
:::

### HISTÓRICO DE REVISÕES DO DOCUMENTO

| DATA | VERSÃO | DESCRIÇÃO DA ALTERAÇÃO | AUTOR |
| :--- | :--- | :--- | :--- |
|      | Criação do documento       |  | |

## Fusion.Integracoes.Consulfarma

### Processos de integração

#### Carga

Processo que monitora os atendimentos atualizados e alimenta a tabela de integração `ImportacaoAtendimento`. Esta tabela será posteriormente utilizada pelo processo “Importação” para integrar os atendimentos atualizados no banco de dados Consulfarma para o banco de dados do sistema Fusion.

#### Além dos dados de atendimentos, também são integrados os seguintes dados:

  * Pacientes
  * Alergias dos Pacientes
  * Vacinas dos Pacientes
  * Cirurgias
  * Diagnósticos
  * Exames Ambulatoriais
  * Prescrições de Medicamentos

#### Importação

Processo que monitora os registros da tabela `ImportacaoAtendimento` e realiza a integração dos dados de atendimento do banco de dados Consulfarma para o banco de dados do sistema Fusion.

### Fluxo integração

![Fluxo](/img/img1.png)

### Configurações

No arquivo `appsettings.json` é possível configurar as seguintes características do serviço de integração:

  * **Conexão com o banco de dados Consulfarma**
  * **Características do serviço de integração**
      * `IntervaloCarga`: intervalo de execução do processo de integração “Carga”, originalmente configurado para “23:00:05”.
      * `IntervaloImportacao`: intervalo de execução do processo de integração “Importação”, originalmente configurado para “00:00:05”.
      * `MaxRecords`: Número máximo de registros a serem processados por cliclo de execução no processo de integração “Importação”.
      * `IntegracaoID`: Código da integração Consulfarma no banco de dados do sistema Fusion.
  * **Endereço da API Fusion**

-----

## Fusion.Integracoes.eSusAB

### Processos de integração

#### Importação

Importa os atendimentos do banco de dados eSus para o sistema Fusion.O serviço `ImportacaoWorker` é executado a cada 5 segundos e realiza importação dos atendimentos atualizados no banco de dados eSus para o banco de dados do sistema Fusion utilizando a integração via layout json.

Além dos dados dos atendimentos são importados também os seguintes dados:

  * Evolução 
  * Vacinas dos Pacientes 
  * Sinais Vitais 
  * Diagnósticos 
  * Solicitação Exame 
  * Prescrições de medicamentos 

### Fluxo Integração

![Fluxo](/img/img2.png)

### Configurações

No arquivo `appsettings.json` é possível configurar as seguintes características do serviço de integração:

  * **Conexão com o banco de dados eSusAB**
  * **Características do serviço de integração**
      * `Interval`: intervalo de execução do processo de integração “Importação”, originalmente configurado para “00:00:05”.
      * `MaxRecords`: Número máximo de registros a serem processados por cliclo de execução no processo de integração “Importação”.
      * `IntegracaoID`: Código da integração Consulfarma no banco de dados do sistema Fusion.
      * `LayoutID`: Código do layout de importação de dados para o Fusion.
  * **Endereço da API Fusion** 

-----

## Fusion.Integracoes.eSusAB.CargaInicial

### Processos de Integração

#### Carga Inicial

Realiza a carga inicial dos dados de atendimentos importando todos os atendimentos registrados no banco de dados eSus para o sistema Fusion.Esta operação é realizada apenas uma vez quando o sistema Fusion é implantado e o objetivo é importar todo o histórico de atendimentos registrados na base de dados eSus para o sistema Fusion permitindo assim que, a partir desta carga inicial, as integrações de atendimentos do sistema eSus possa ser realizado apenas nos atendimentos atualizados.

### Fluxo Integração 

![Fluxo](/img/img3.png)

### Configurações

No arquivo `appsettings.json` é possível configurar a seguinte característica do serviço de integração:

  * **Conexão com o banco de dados eSusAB**

-----

## Fusion.Integracoes.MV

### Processos de Integração

#### Atualização Fila Pendências

Processo de integração executado originalmente a cada 30 segundos que busca na tabela `ImportacaoAtendimento` os registros com atualização de abertura pendente ou atualização de alta pendente e atualiza a fila de pendências a serem processadas. Esta fila será utilizada posteriormente por outros processos de integração para atualizar os dados no banco de dados do sistema Fusion. A tabela `ImportacaoAtendimento` é alimentada por uma trigger registrada na tabela `DBAMV.ATENDIME` e sempre que um novo registro é incluído, alterado ou excluído desta tabela é inserido, atualizado ou excluído um registro de pendência de atualização da tabela `ImportacaoAtendimente`.

#### Busca Atendimentos Paciente

Processo de integração executado originalmente a cada 5 segundos que verifica se existem pendências de busca de atendimentos na tabela `PendenciaBuscaAtendimentos` e, em caso positivo, alimenta a tabela `ImportacaoAtendimento` com pendências de abertura de atendimento para ser processada posteriormente pelo processo “Processamento Pendencia Abertura”.

#### Busca Atualizações Paciente

Processo de integração que verifica se existem pendências de atualização de dados de pacientes e, em caso positivo, registra uma pendência de integração para ser processada posteriormente pelo processo de integração “Processamento Pendencia Atualização Paciente”.

#### Carga Inicial

Processo de integração executado apenas uma vês no início da implantação do sistema para importar todo o histórico de atendimentos registrados no sistema MV para o sistema Fusion.

#### Processamento Pendencia Abertura

Processo de integração executado originalmente a cada 5 segundos que verifica se existem pendências de abertura de atendimento registradas na fila de pendências atualizada pelo processo “Atualização Fila Pendências” e, em caso positivo, executa a integração das aberturas de atendimento para o sistema Fusion.

#### Processamento Pendencia Alta

Processo de integração executado originalmente a cada 10 segundos que verifica se existem pendências de alta registrada na fila de pendências atualizada pelo processo “Atualização Fila Pendências” e, em caso positivo, executa a integração dos registros de alta para o sistema Fusion.

#### Processamento Pendencia Atualização Paciente

Processo de integração que verifica se existem pendências de atualização de dados de pacientes e, em caso positivo, executa a integração dos pacientes para o sistema Fusion.

#### Processamento Pendencia Troca Leito

Processo de integração que verifica se existem pendências de registro de troca de leito na fila de pendências atualizada pelo processo “Atualização Fila Pendências” e, em caso positivo, executa a integração dos dados de troca de leito para o sistema Fusion.

#### Processamento Pendencia UTI

Processo de integração que verifica se existem registros de atendimento na UTI e, em caso positivo, executa a integração dos atendimentos de UTI para o sistema Fusion.

### Fluxo Integração

![Fluxo](/img/img4.png)

### Configurações

No arquivo `appsettings.json` é possível configurar as seguintes características do serviço de integração:

  * **Conexão com o banco de dados MV** 
  * **Configurações de Intervalo de execução, Habilitado, Id Integração, Id Layout entre outras para os processos de integração:**
      * `CargaInicial`;
      * `AtualizacaoFilaPendencias`;
      * `BuscaAtendimentosPaciente`;
      * `ProcessamentoPendenciaAbertura`;
      * `ProcessamentoPendenciaAlta`;
      * `ProcessamentoPendenciaUti`;
      * `BuscaAtualizacoesPaciente`;
      * `ProcessamentoPendenciaAtualizacaoPaciente`.
  * **Endereço da API Fusion**

-----

## Fusion.Integracoes.Skymed

### Introdução

Projeto de integração de dados que tem como objetivo integrar com o sistema fusion as agendas cirúrgicas do sistema MV. As pendências de integração são geradas na tabela `FUSION_INTEGRACAO.AtualizacaoAgendaCirurgia` através de uma trigger de “Inclusão” e “Alteração” registrada na tabela `DBAMV.AGE_CIR` do sistema MV; sempre que um agendamento cirúrgico é incluído ou alterado um novo registro de pendência de integração é gerado na tabela `FUSION_INTEGRACAO.AtualizacaoAgendaCirurgia`.

### Processos de Integração

#### Importar Pendências

Processo de integração que obtém as pendências de integração de agendamento cirúrgico da tabela `FUSION_INTEGRACAO.AtualizacaoAgendaCirurgia` e gera no banco de dados do sistema Fusion uma pendência de integração de aplicação que será posteriormente processada pelo Projeto de integração “Fusion.Service”[cite: 31].

### Fluxo Integração

![Fluxo](/img/img5.png)

### onfigurações

No arquivo `appsettings.json` é possível configurar a seguinte característica do serviço de integração:

  * **Configurações de Intervalo de execução da integração**

-----

## Fusion.Integracoes.Sotech

### Processos de Integração

#### Carga

Processo de interação que obtém os dados de atendimentos, anamnese, diagnóstico, prescrição de medicamentos, exames ambulatoriais, movimentação de leitos, sinais vitais e evoluções e gera uma pendência de integração na tabela `PendenciaIntegracao` no banco de dados do Fusion. As pendências de integração geradas por este processo serão posteriormente tratadas pelo processo de integração “Integração”.

#### Integração

Processo de integração que obtém as pendências de integração da tabela `PendenciaIntegracao` no banco de dados do sistema Fusion e, com base nas pendências registradas, integra os atendimentos do banco de dados Sotech para o banco de dados do sistema Fusion.

### Fluxo Integração

![Fluxo](/img/img6.png)

### Configurações

No arquivo `appsettings.json` é possível configurar as seguintes características do serviço de integração:

  * **Conexão com o banco de dados Sotech** 
  * **Configurações de Intervalo de execução e quantidade de registros para os processos de integração:** 
      * `Carga`;
      * `Integracao`;
  * **Endereço da API Fusion**

-----

## Fusion.Integracoes.Tasy

### Processos de Integração

#### Buscar Atendimentos Tasy

Processo que obtém os dados de atendimentos do banco de dados do Tasy para preparar a integração destes atendimentos com o Fusion. Este processo primeiramente registra os atendimentos a serem integrados na tabela `ImportarAtendimento` do Fusion para posterior processamento pelos processo de integração “Busca Informações Atendimento”.

#### Busca Informações Atendimento

Processo que lê as pendências de importação de atendimentos da tabela `ImportarAtendimento` gerados pelo processo “Buscar Atendimentos Tasy” e integra os atendimentos com o sistema Fusion.

#### Gerar Pendência Atualização Pacientes

Processo que lê os dados de pacientes da tabela `Pessoa_Fisica` com base na data de atualização do registro e gera uma pendência de integração de pacientes na tabela `PendenciaIntegracao` do banco de dados do Fusion para posterior processamento pelo processo de integração “Integrar Pendência Atualização Pacientes”.

#### Integrar Pendência Atualização Pacientes

Processo que lê a pendencias de integração de dados de pacientes da tabela `PendenciaIntegração` geradas pelo processo “Gerar Pendencia Atualização Pacientes” e integra os dados dos pacientes na tabela `Paciente` do sistema Fusion.

### Fluxo Integração

![Fluxo](/img/img7.png)

### Configurações

No arquivo `appsettings.json` é possível configurar as seguintes características do serviço de integração:

  * **Conexão com o banco de dados TrackCare** 
  * **Conexão com o banco de dados Integrador** 
  * **Configurações de Intervalo de execução e quantidade de registros para os processos de integração:** 
      * `BuscarAendimentosImportar;
      * `BuscarInformacoesAtendimentos;
  * **Endereço da API Fusion** 

-----

## Fusion.Integracoes.TrackCare

### Processos de Integração

#### Carga Inicial Pacientes

Processo que busca na tabela `SQLUser.PA_Person` os registros de pacientes a serem integrados com base no último ID de paciente que havia sido integrado. Na primeira vês que o processo é executado ele busca os pacientes do Id 1 até a quantidade de registros configurados para processamento por ciclo de integração, no ciclo seguinte o Id inicial de pesquisa é incrementado da quantidade de registros integrados no ciclo anterior e assim sucessivamente até que todos os registos de pacientes sejam integrados. Os dados dos pacientes são primeiramente gravados na tabela `PacienteSES` e serão posteriormente integrados pelo processo “Sincronizar Pacientes”.

#### Envio Arquivo Fusion

Processo que obtém os registros de integração HL7 da tabela `PacienteArquivo` e envia para a integração HL7 do Fusion. A tabela `PacienteArquivo` é alimentada pelo processo “Pendencia Busca Paciente”.

#### Pendência Busca Paciente

Processo que obtém do banco TrackCare os dados de:

  * Admissões 
  * Alergias 
  * Diagnósticos 
  * Anamneses 
  * Evolução 
  * Procedimentos 
  * Medicamentos 
  * Cirurgias 
  * Sinais Vitais 

E gera o registro de um arquivo de integração com os dados do paciente na tabela `PacienteArquivo` que será posteriormente integrado com o sistema Fusion através do processo “Envio Arquivo Fusion”.

#### Sincronizar Pacientes

Processo que obtém os pacientes cujos dados foram recentemente atualizados através da tabela `PacienteSES` do banco TrackCare e sincroniza estes dados com o banco integrador comparando os registros dos dois bancos que possuam alguma diferença em seus dados.

### Fluxo Integração

![Fluxo](/img/img8.png)

### Configurações

No arquivo `appsettings.json` é possível configurar as seguintes características do serviço de integração:

  * **Conexão com o banco de dados TrackCare** 
  * **Conexão com o banco de dados Integrador** 
  * **Configurações de Intervalo de execução, Habilitado e quantidade de registros para os processos de integração:**
      * `CargaInicialPacientes`;
      * `SincronizarPacientes`;
      * `PendenciaBuscaPaciente`;
      * `EnvioArquivoFusion`;
  * **Endereço da API Fusion**