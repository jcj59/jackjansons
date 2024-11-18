import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../theme';
import { Link } from 'react-router-dom';
import perfect_pace from '../assets/images/perfect-pace.PNG';
import fpn_reimplementation from '../assets/images/fpn-reimplementation.jpg';

const ResearchWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin-top: 6rem;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: ${(props) => props.theme.fonts.secondary};
`;

const ResearchGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns for a single row */
    gap: 2rem; /* Spacing between research */
    justify-content: center; /* Center grid items horizontally */
    width: 100%;
    max-width: 1200px;
    justify-items: center; /* Center items inside each grid cell */
`;


const ResearchCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background};
    overflow: hidden;
    text-align: center;
    padding: 1rem;
    width: 500px;
`;

const ResearchImageLink = styled(Link)`
    display: inline-block; /* Ensures the link takes up the correct dimensions */
    width: 100%; /* Match the width of the image */
    height: 330px; /* Match the height of the image */
    margin-bottom: 1rem; /* Add spacing below the image */
    overflow: hidden; /* Ensure the zoom effect doesn't overflow the container */
`;

const ResearchImage = styled.img`
    width: 100%; /* Ensure the image fits within the link container */
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio while filling the container */
    transition: transform 0.3s ease; /* Smooth zoom effect */

    &:hover {
        transform: scale(1.1); /* Zoom in slightly */
    }
`;
const ResearchTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0rem 0 0.5rem;
    font-family: ${(props) => props.theme.fonts.secondary};
`;

const ResearchDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    margin: 0.5rem 0;
`;

const LearnMoreLink = styled(Link)`
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: .8rem;
    color: ${(props) => props.theme.colors.hover};
    margin-top: 1rem;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover {
        text-decoration-color: ${(props) => props.theme.colors.hoverEmphasis};
    }
`;

function Research() {
    return (
        <ThemeProvider theme={generalTheme}>
            <ResearchWrapper>
                <Title>Research</Title>
                <ResearchGrid>
                    {/* Research 1: LoRA for Complexity Analysis */}
                    <ResearchCard>
                        <ResearchImageLink to="/research/lora">
                            <ResearchImage src="https://via.placeholder.com/400x300" alt="LoRA" />
                        </ResearchImageLink>
                        <ResearchTitle>LoRA for Complexity Analysis</ResearchTitle>
                        <ResearchDescription>
                            Identifying if there exists a correlation between the optimal rank for fine tuned weight matrices and task complexity.
                        </ResearchDescription>
                        <LearnMoreLink to="/research/lora">LEARN MORE</LearnMoreLink>
                    </ResearchCard>
                    {/* Research 2 : 2-Approximation Algorithm for the k-MST Problem*/}
                    <ResearchCard>
                        <ResearchImageLink to="/research/kMST">
                            <ResearchImage src="https://via.placeholder.com/400x300" alt="kMST" />
                        </ResearchImageLink>
                        <ResearchTitle>2-Approximation Algorithm for the k-MST Problem</ResearchTitle>
                        <ResearchDescription>
                            Implement Garg's 2-Approximation algorithm for the k-MST problem in graphs.
                        </ResearchDescription>
                        <LearnMoreLink to="/research/kMST">LEARN MORE</LearnMoreLink>
                    </ResearchCard>
                    {/* Research 3 */}
                    <ResearchCard>
                        <ResearchImageLink to="/research/dsm">
                            <ResearchImage src="https://via.placeholder.com/400x300" alt="Deep Survival Machines for Expiditing Clinical Trials" />
                        </ResearchImageLink>
                        <ResearchTitle>Deep Survival Machines for Expiditing Clinical Trials</ResearchTitle>
                        <ResearchDescription>
                            Using deep survival machines on sequential clinical trial data to forecast primary indicators and identify significant effects of treatments in clincal trials.
                        </ResearchDescription>
                        <LearnMoreLink to="/research/dsm">LEARN MORE</LearnMoreLink>
                    </ResearchCard>
                </ResearchGrid>
            </ResearchWrapper>
        </ThemeProvider>
    );
}

export default Research;