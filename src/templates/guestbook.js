import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const GuestbookTemplate = ({ title }) => <div>Guestbook!</div>;

const GuestbookPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GuestbookTemplate title={frontmatter.title} />
    </Layout>
  );
};

export default GuestbookPage;

export const guestbookQuery = graphql`
  query GuestbookPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
