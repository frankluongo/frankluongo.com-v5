import React from "react";
import { graphql } from "gatsby";

import { useImages } from "#lib/useImages";

import { BlogPost } from "../components/BlogPost";
import { Hero } from "../components/Hero";
import { Seo } from "../components/Seo";
import { sanitizeHTML } from "../helpers/sanitizeHTML";

const Project = ({ data }) => {
  const imageObj = useImages();
  const __html = sanitizeHTML(
    data.notion.childMarkdownRemark.html,
    imageObj,
    "projects"
  );

  return (
    <>
      <h1 data-a11y-hidden>
        Frank Luongo Design Co Project: {data.notion.title}
      </h1>
      <Hero
        path={data.notion.properties.imagePath.value}
        alt={data.notion.title}
        extraStyles={{ heroContent: "color-white" }}
      >
        <h2 className="h1">{data.notion.title}</h2>
      </Hero>
      <div className="container container--blog page-body flex flex-direction:column gap:2">
        <BlogPost dangerouslySetInnerHTML={{ __html }} />
      </div>
    </>
  );
};

export const query = graphql`
  query ($id: String!) {
    notion(id: { eq: $id }) {
      id
      title
      childMarkdownRemark {
        html
      }
      properties {
        previewImage {
          value
        }
        imagePath {
          value
        }
        thumbnailImage {
          value
        }
      }
    }
  }
`;

export default Project;

export const Head = ({ pageContext }) => <Seo title={pageContext.title} />;
