import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import logo from "../img/panel.png";
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
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundPosition: `center top`,
        backgroundAttachment: `fixed`,
        backgroundSize: "682px 304px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        height: "304px",
      }}
    >
      &nbsp;
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {" "}
                <div className="columns">
                  <div className="column is-12">
                    <h3
                      className="has-text-weight-semibold is-size-2"
                      style={{ textAlign: "center" }}
                    >
                      Cole um Cartaz pela Democracia!
                    </h3>
                    <p>
                      Chegou a hora de agir! Vamos mostrar ao Legislativo e o
                      Judiciário que, se nós não temos medo do Presidente, as
                      instituições republicanas também não deveriam temer.
                    </p>
                    <p>
                      Baixe um dos cartazes abaixo e cole em Postes, Viadutos,
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
                      <a href="#">
                        <small>Veja a íntegra do nosso Manifesto abaixo.</small>
                      </a>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    <img src={modelosDeCartazes} alt="Modelos de Cartazes" />
                  </h3>
                  <BlogRoll />
                  {/* <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div> */}
                </div>
                <hr />
                <div className="content" style={{ width: "100%" }}>
                  <p className="tile" style={{ textAlign: "center" }}>
                    <img
                      src={nossoManifesto}
                      alt="Nosso Manifesto"
                      style={{ alignSelf: "center" }}
                    />
                  </p>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <YouTube id="GlkJXa5Epy0" />
                    <br />
                    <YouTube id="G4CU6wk9D50" />
                    <br />
                    <YouTube id="Gc_uYb8_I5I" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
