import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import panel from "../img/panel.png";
import nossoManifesto from "../img/nosso-manifesto.png";
import modelosDeCartazes from "../img/modelos-de-cartazes.png";
import YouTube from "react-youtube-embed";

import Layout from "../components/Layout";
// import Features from '../components/Features'
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${panel})`,
        backgroundPosition: `center top`,
        backgroundAttachment: `fixed`,
        backgroundSize: "682px 304px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        height: "304px",
      }}
    >
      &nbsp;
    </div> */}
    <section
      className="section section--gradient"
      style={{ textAlign: "center", paddingBottom: 0 }}
    >
      <img
        src={panel}
        style={{ width: "100%", height: "auto", maxWidth: "682px" }}
      />
    </section>
    <section className="section section--gradient" style={{ paddingTop: 0 }}>
      <div className="container" style={{ paddingTop: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <a href="#cartazes">
            <img
              src={modelosDeCartazes}
              alt="Modelos de Cartazes"
              style={{ alignSelf: "center", height: "25px" }}
            />
          </a>
          {" "}
          <a href="#manifesto">
            <img
              src={nossoManifesto}
              alt="Nosso Manifesto"
              style={{ alignSelf: "center", height: "25px" }}
            />
          </a>
        </div>
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h5
                      className="has-text-weight-semibold is-size-2"
                      style={{ textAlign: "center" }}
                    >
                      Cole um Cartaz pela Democracia!
                    </h5>
                    <p
                      className="has-text-weight-semibold"
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    >
                      A gente não precisa se aglomerar pra fazer esse desgoverno
                      sair!
                    </p>
                    <p>
                      Chegou a hora de agir! Vamos mostrar ao Legislativo e o
                      Judiciário que, se nós não temos medo do Presidente, as
                      instituições republicanas também não deveriam temer.
                    </p>
                    <p>
                      Baixe os cartazes abaixo e cole em Postes, Viadutos,
                      Passarelas e outros logradouros públicos. Mesmo que não
                      possamos fazer protestos de rua, vamos colar nossos gritos
                      em milhões de cartazes pelas cidades. Já passou da hora de
                      fazer a indignação das redes sociais chegar no mundo real.
                    </p>
                    <p>
                      Esse é um manifesto de um povo responsável e consciente,
                      que sabe que fazer manifestações de rua, agora, seria só
                      acelerar o genocídio patrocinado por este governo. Propor
                      carreatas excluiria milhões de brasileiros que não tem
                      dinheiro nem pra pegar ônibus.
                    </p>
                    <p>
                      Se o presidente tem direito de desrespeitar as legislações
                      estaduais e municipais sobre o isolamento social, feitas
                      para salvar vidas, não pode nos reprimir por descumprir
                      leis municipais de poluição visual feitas para preservar a
                      estética das ruas. Não é hora de se preocupar com ruas
                      bonitas. Já tem cadáveres no meio da rua, gente morrendo
                      pq nosso país não tem saneamento básico. O grande poluidor
                      não será um cartaz de protesto contra um presidente que
                      não se importa com o meio-ambiente.
                    </p>
                    <p>
                      Esse é o primeiro passo da resistência democrática. Fiquem
                      avisados, seus bandidos:{" "}
                      <strong>Nós somos o seu pior pesadelo!</strong> Nós vamos
                      resistir a vocês na linguagem que for necessária, de forma
                      diretamente proporcional ao tamanho da ameaça de vocês. Se
                      vocês soltam nota de ameaça, nós cobrimos as ruas com
                      milhões de notas públicas de repúdio.{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          color: "#F00",
                        }}
                      >
                        Vamos ver quem cai primeiro.
                      </span>
                    </p>
                    <p>
                      <a href="#manifesto">
                        Veja a íntegra do nosso Manifesto abaixo.
                      </a>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="column is-12">
                  <a name="cartazes">
                    <h3 className="has-text-weight-semibold is-size-2">
                      <img src={modelosDeCartazes} alt="Modelos de Cartazes" />
                    </h3>
                  </a>
                  <BlogRoll />
                  <br />
                  <p>
                    Faça você também um cartaz. Made seus modelos para{" "}
                    <a href="mailto:democracianafaixa@gmail.com">
                      democracianafaixa@gmail.com
                    </a>{" "}
                    e nós os colocaremos diretamente aqui no site.
                    #JuntosSomosMaisFortes
                  </p>
                  {/* <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div> */}
                </div>
                <hr />
                <div className="content" style={{ width: "100%" }}>
                  <p className="tile" style={{ textAlign: "center" }}>
                    <a name="manifesto">
                      <img
                        src={nossoManifesto}
                        alt="Nosso Manifesto"
                        style={{ alignSelf: "center" }}
                      />
                    </a>
                  </p>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <YouTube id="uuJUHuWs87s" />
                    <br />
                    <YouTube id="Hb7B5FAVSno" />
                    <br />
                    <YouTube id="6j767RsEu-c" />
                    <br />
                    <YouTube id="HsRz_X5d-i0" />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h5
                      className="has-text-weight-semibold is-size-2"
                      style={{ textAlign: "center" }}
                    >
                      Aprenda a fazer cola com Arroz
                    </h5>
                    <YouTube id="LNFsJazdAFg" />
                    <p>
                      Créditos ao Canal da{" "}
                      <a href="https://www.youtube.com/channel/UC-FgUxlba2czcx1B66YiWmA">
                        Márcia Cris no Youtube
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h5
                      className="has-text-weight-semibold is-size-2"
                      style={{ textAlign: "center" }}
                    >
                      Aprenda a Colar seu Cartaz
                    </h5>
                    <YouTube id="lF7BwH7fndk" />
                    <p>
                      Créditos ao Canal da{" "}
                      <a href="https://www.youtube.com/channel/UCvnkEtGJjOEXlX1G4XTalzw">
                        Ana Tatit no Youtube
                      </a>
                    </p>
                  </div>
                </div>
                <h3>Importante</h3>
                <p>
                  <strong>
                    As criadoras dos conteúdos acima não são integrantes do
                    nosso movimento, nem foram informadas de que seus vídeos
                    seriam utilizados para o nosso propósito. Fica aqui,
                    entretanto, o convite para que elas se juntem às nossas
                    fileiras. Caso prefiram, podem solicitar a remoção do vídeo
                    pelo{" "}
                    <a href="mailto:democracianafaixa@gmail.com">
                      democracianafaixa@gmail.com
                    </a>
                    .
                  </strong>
                </p>
                <p style={{ color: "#F00" }}>
                  Traduzindo para os minions: Não adianta atacá-las, elas não
                  tem nenhuma ligação com nosso movimento ;)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="section section--gradient"
      style={{ textAlign: "center" }}
    >
      <img
        src={panel}
        style={{ width: "100%", height: "auto", maxWidth: "682px" }}
      />
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
