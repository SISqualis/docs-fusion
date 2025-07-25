import type { ReactNode, FC } from 'react'; // Adicione FC aqui
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// --- Icons (Placeholders - Replace with actual SVGs or an icon library if desired) ---
// Example: import MyIcon from '@site/static/img/my-icon.svg';
// For now, using emojis as simple visual cues.
const PatientIcon = () => <span className={styles.featureIcon}>🧑‍⚕️</span>;
const PrivacyIcon = () => <span className={styles.featureIcon}>🔒</span>;
const ResIcon = () => <span className={styles.featureIcon}>📋</span>;
const InteropIcon = () => <span className={styles.featureIcon}>🔗</span>;
const HealthRecordIcon = () => <span className={styles.featureIcon}>🩺</span>;


type FeatureItem = {
  title: string;
  // Icon?: () => JSX.Element; // Linha original com problema
  Icon?: FC<{}>; // Alterado para React.FC que não recebe props
  emojiIcon?: string;
  description: ReactNode;
  link: string;
  linkText: string;
};

const primaryFeatures: FeatureItem[] = [
  {
    title: 'Visão Geral do FUSION',
    description:
      'Entenda o propósito central do FUSION como um Registro Eletrônico de Saúde (RES) e sua capacidade de unificar dados de saúde.',
    link: '/docs/intro', // IMPORTANT: Update this link
    linkText: 'Comece por aqui',
  },
  {
    title: 'Gerenciamento de Pacientes',
    description:
      'Aprenda a navegar pela lista de pacientes, configurar opções de privacidade, gerenciar consentimentos e visualizar logs de auditoria.',
    link: '/docs/fusion/gestao-pacientes/pacientes', // IMPORTANT: Update this link
    linkText: 'Detalhes do Paciente',
  },
  {
    title: 'Registro Eletrônico de Saúde (RES)',
    description:
      'Explore o histórico completo do paciente: atendimentos, diagnósticos, evoluções, medicamentos, procedimentos, vacinas, alergias e mais.',
    link: '/docs/fusion/res/', // IMPORTANT: Update this link
    linkText: 'Acessar RES',
  },
  {
    title: 'Acesso e Autenticação',
    description:
      'Como acessar o FUSION de forma segura, incluindo autenticação, autorização e gerenciamento de consentimentos.',
    link: '/docs/fusion/autenticacao/acesso', // IMPORTANT: Update this link
    linkText: 'Segurança de Dados',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/logo-dark.png" alt="FUSION Logo" className={styles.heroLogo} /> {/* Assuming you have a logo in static/img/logo.png */}
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {/* Using a more descriptive tagline from your HTML */}
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Armazenando e Conectando Informações de Saúde. <br/>Seu Sistema de Interoperabilidade completo e unificado.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"> {/* IMPORTANT: Update this link to your starting doc */}
            Acessar Documentação
          </Link>
          {/* Optional secondary button */}
          {/* <Link
            className={clsx("button button--outline button--lg", styles.outlineButton)}
            to="/docs/categoria/funcionalidades-chave">
            Principais Funcionalidades
          </Link> */}
        </div>
      </div>
    </header>
  );
}

function IntroductionSection() {
  return (
    <section className={styles.introductionSection}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--10 col--offset-1')}>
            <Heading as="h2" className={styles.sectionTitle}>
              O que é o FUSION?
            </Heading>
            <p className={styles.sectionText}>
              O Fusion armazena as informações de saúde de uma pessoa, cumprindo a principal função de um Registro Eletrônico de Saúde (RES). Através do Fusion, é possível unificar dados de laboratórios, imagens, históricos de atendimento em ambulatórios, prontuários hospitalares, farmácias, unidades de saúde pública e privada, vacinas e outros.
            </p>
            <p className={styles.sectionText}>
              No cenário da saúde atual, a interoperabilidade deixou de ser apenas uma meta aspiracional para se tornar uma necessidade estratégica. A capacidade de diferentes sistemas, dispositivos e aplicativos acessarem, trocarem e utilizarem dados de forma integrada é essencial para otimizar o atendimento aos pacientes e melhorar os resultados em saúde. É nesse contexto que a <strong>Sisqualis</strong> se posiciona como protagonista, entregando soluções que conectam informações e promovem a eficiência no setor.
            </p>
            <p className={styles.sectionText}>
              Com sua plataforma de interoperabilidade Fusion, a Sisqualis oferece uma solução completa que centraliza os dados de saúde em um ambiente seguro, padronizado e acessível. Isso facilita o compartilhamento de informações entre médicos, hospitais e pacientes, eliminando barreiras organizacionais e garantindo a continuidade no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, Icon, emojiIcon, description, link, linkText }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureColumn)}> {/* Adjust col size as needed */}
      <div className={styles.featureBox}>
        <div className={styles.featureHeader}>
          {Icon ? <Icon /> : emojiIcon && <span className={styles.featureIconString}>{emojiIcon}</span>}
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </div>
        <p className={styles.featureDescription}>{description}</p>
        <Link
          className={clsx('button button--primary botao-index', styles.featureButton)}
          to={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

function HomepagePrimaryFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.textCenter)}>
          Explore a Documentação
        </Heading>
        <div className="row">
          {primaryFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`SISqualis`} // More SEO friendly title
      description="Documentação do FUSION: Sistema de Interoperabilidade em Saúde da Sisqualis. Unifique e acesse dados de saúde de forma eficiente.">
      <HomepageHeader />
      <main>
        <IntroductionSection />
        <HomepagePrimaryFeatures />
        {/* You can add more sections here if needed */}
      </main>
    </Layout>
  );
}