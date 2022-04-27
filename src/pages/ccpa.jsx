import React from "react";
import { graphql } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import bgWave from "../images/logos/background-wave.png";

const ccpa = ({ data }) => {
  return (
    <Layout>
      <SEO title={"CCPA | Virufy"} />
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          data[currentLocale] ? (
            <div>
              <img
                className="absolute -z-10 w-screen left-0"
                src={bgWave}
                alt="waves"
              />
              <div
                className="p-8"
                dangerouslySetInnerHTML={{
                  __html: data[currentLocale].html,
                }}
              />
            </div>
          ) : (
            <></>
          )
        }
      </IntlContextConsumer>
    </Layout>
  );
};

export default ccpa;

// prettier-ignore
export const query = graphql`
  {
    en: markdownRemark(frontmatter: { page: { eq: "ccpa" }, lang: { eq: "en" } }) {
      html
    }
    es: markdownRemark(frontmatter: { page: { eq: "ccpa" }, lang: { eq: "es" } }) {
      html
    }
    pt: markdownRemark(frontmatter: { page: { eq: "ccpa" }, lang: { eq: "pt" } }) {
      html
    }
    ja: markdownRemark(frontmatter: { page: { eq: "ccpa" }, lang: { eq: "ja" } }) {
      html
    }
  }
`;
// export const query = graphql`
//   {
//     en: allMarkdownRemark(filter: {frontmatter: {page: {eq: "ccpa"} lang: {eq:"en"}}}) {
//       edges {
//         node {
//           html
//           frontmatter {
//             name
//             title
//           }
//         }
//       }
//     },
//     es: allMarkdownRemark(filter: {frontmatter: {page: {eq: "ccpa"} lang: {eq:"es"}}}) {
//       edges {
//         node {
//           html
//           frontmatter {
//             name
//             title
//           }
//         }
//       }
//     },
//     pt: allMarkdownRemark(filter: {frontmatter: {page: {eq: "ccpa"} lang: {eq:"pt"}}}) {
//       edges {
//         node {
//           html
//           frontmatter {
//             name
//             title
//           }
//         }
//       }
//     }
//   }
// `;
