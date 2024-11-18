import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Projects from './pages/projects';
import Research from './pages/research';
import Blog from './pages/blog';
import Gallery from './pages/gallery';
import { generalTheme } from './theme';
import GlobalStyle from './assets/styles/globalStyles';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.footerBackground};
`;

function App() {
  return (
    <ThemeProvider theme={generalTheme}>
      <GlobalStyle />
      <Router>
        <PageWrapper>
          <Header />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </ContentWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
