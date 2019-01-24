import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const DankestGifs = styled.div`
  position: relative;

  > img {
    max-width: 300px;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props;
    // const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <h1>Welcome to my site!</h1>
        <DankestGifs>
          <img
            src="https://media.giphy.com/media/4PXPgPJqcMcJ6ian02/giphy.gif"
            alt=""
          />
          <img
            src="https://media.giphy.com/media/fCTqwThlbodeP5s607/giphy.gif"
            alt=""
          />
          <img
            src="https://media.giphy.com/media/7zSBoGW2VoCEzWVjyA/giphy.gif"
            alt=""
          />
          <marquee>Aloha!</marquee>
          <img
            src="https://media.giphy.com/media/xFpTbJGYBgHHQchgrm/giphy.gif"
            alt=""
          />
          <img
            src="https://media.giphy.com/media/5X7GDf7zc1Ebu/giphy.gif"
            alt=""
          />
          <img
            src="https://media.giphy.com/media/7ELa4AJSFpWqrR4wit/giphy.gif"
            alt=""
          />
        </DankestGifs>
      </Layout>
    );
  }
}
