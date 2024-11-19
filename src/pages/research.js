import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../theme';
import { Link } from 'react-router-dom';

const ResearchWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondary};
    // min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin-top: 4rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: .5rem;
    font-family: ${(props) => props.theme.fonts.secondary};
`;

const ResearchGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    justify-items: center;
`;

const ResearchCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.background};
    overflow: hidden;
    text-align: center;
    padding: 1rem;
    width: 100%;
    max-width: 400px;
`;
const ResearchImageLink = styled(Link)`
    display: inline-block;
    width: 100%;
    margin-bottom: .5rem;
    overflow: hidden;
`;

const ResearchImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const ResearchTitle = styled.h2`
    font-size: 1.3rem;
    margin: 0rem 0 0.5rem;
    font-family: ${(props) => props.theme.fonts.secondary};
`;

const ResearchDescription = styled.p`
    font-size: .9rem;
    line-height: 1.6;
    margin: 0.5rem 0;
`;

const LearnMoreLink = styled(Link)`
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: .8rem;
    color: ${(props) => props.theme.colors.hover};
    margin-top: 0rem;
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