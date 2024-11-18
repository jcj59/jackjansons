import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../theme';

const GalleryWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center content vertically and horizontally */
    text-align: center;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: ${(props) => props.theme.fonts.secondary};
`;

const Subtitle = styled.p`
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.textSecondary};
    margin-top: 1rem;
`;

const Gallery = () => {
    return (
        <ThemeProvider theme={generalTheme}>
            <GalleryWrapper>
                <Title>Gallery</Title>
                <Subtitle>This page is still under construction. Check back soon!</Subtitle>
            </GalleryWrapper>
        </ThemeProvider>
    );
};

export default Gallery;
