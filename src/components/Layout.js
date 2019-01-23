import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Navbar from "../components/Navbar";
import GlobalStyles from "../utils/styles";
import Theme from "../utils/theme";

const BaseStyles = createGlobalStyle`
  ${GlobalStyles}
`;

const MainWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: flex-start;
`;

const LeftBar = styled.div`
  flex: 0 0 300px;
`;

const ContentWrapper = styled.div`
  flex: 1 1 100%;
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>
          <BaseStyles />
          <MainWrapper>
            <LeftBar>
              <Navbar />
            </LeftBar>
            <ContentWrapper>{children}</ContentWrapper>
          </MainWrapper>
        </div>
      )}
    />
  </ThemeProvider>
);

export default TemplateWrapper;
