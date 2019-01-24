import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import GuestbookForm from "../components/GuestbookForm";
import Content, { HTMLContent } from "../components/Content";

const GuestbookWrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
`;

const GuestbookEntry = styled.div`
  padding: 15px 0;
`;

const EntryName = styled.div`
  line-height: 1.5;
  font-size: 12px;
`;

const EntryBody = styled.div``;

const renderEntry = (node, index) => (
  <GuestbookEntry key={index}>
    <EntryName>{node.name}</EntryName>
    <EntryBody>{node.body}</EntryBody>
  </GuestbookEntry>
);

export const GuestbookTemplate = ({
  title,
  entries,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
      <GuestbookWrapper>
        {entries.map((e, i) => renderEntry(e.node, i))}
        <hr />
        <GuestbookForm />
      </GuestbookWrapper>
    </>
  );
};

const GuestbookPage = ({ data }) => {
  const {
    markdownRemark: post,
    allSubmission: { edges }
  } = data;

  return (
    <Layout>
      <GuestbookTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        entries={edges}
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
    allSubmission {
      edges {
        node {
          name
          body
        }
      }
    }
  }
`;
