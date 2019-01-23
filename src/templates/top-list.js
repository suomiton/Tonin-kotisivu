import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const TopListTemplate = ({ title, description }) => <div>TOPPEN!</div>;

const TopListPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TopListTemplate title={frontmatter.title} description={frontmatter.description} />
    </Layout>
  );
};

export default TopListPage;

export const topListQuery = graphql`
  query TopListPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
