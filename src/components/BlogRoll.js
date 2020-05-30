import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header style={{ flexDirection: "column" }}>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                        }}
                      />
                    </div>
                  ) : null}
                  <br />
                  <p className="post-meta">
                    {/* <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    > */}
                    <strong>{post.frontmatter.title}</strong>
                    {/* </Link> */}
                    {/* <span> &bull; </span> */}
                  </p>
                </header>
                <p>
                  <a
                    className="button"
                    href={post.frontmatter.downloadlink}
                    target="_blank"
                    download
                    rel="noreferrer"
                  >
                    Baixar para Impressão &darr;
                  </a>

                  <br />
                  <br />
                  {post.excerpt}
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                downloadlink
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
