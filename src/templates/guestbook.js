import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GuestbookForm from "../components/GuestbookForm";
import Content, { HTMLContent } from "../components/Content";

export const GuestbookTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
      <GuestbookForm />
    </>
  );
};

const GuestbookPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GuestbookTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export default GuestbookPage;

export const guestbookQuery = graphql`
  query GuestbookPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
