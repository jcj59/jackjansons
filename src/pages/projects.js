import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../theme';
import { Link } from 'react-router-dom';
import perfect_pace from '../assets/images/perfect-pace.PNG';
import fpn_reimplementation from '../assets/images/fpn-reimplementation.jpg';

const ProjectsWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondary};
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

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    justify-items: center;
`;


const ProjectCard = styled.div`
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

const ProjectImageLink = styled(Link)`
    display: inline-block;
    width: 100%;
    margin-bottom: .5rem;
    overflow: hidden;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
const ProjectTitle = styled.h2`
    font-size: 1.3rem;
    margin: 0rem 0 0.5rem;
    font-family: ${(props) => props.theme.fonts.secondary};
`;

const ProjectDescription = styled.p`
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

function Projects() {
    return (
        <ThemeProvider theme={generalTheme}>
            <ProjectsWrapper>
                <Title>Projects</Title>
                <ProjectsGrid>
                    {/* Project 1: Perfect Pace */}
                    <ProjectCard>
                        <ProjectImageLink to="/projects/perfect-pace">
                            <ProjectImage src={perfect_pace} alt="Perfect Pace" />
                        </ProjectImageLink>
                        <ProjectTitle>Perfect Pace</ProjectTitle>
                        <ProjectDescription>
                            A website that provides optimal pacing plans based on elevation for road races.
                        </ProjectDescription>
                        <LearnMoreLink to="/projects/perfect-pace">LEARN MORE</LearnMoreLink>
                    </ProjectCard>
                    {/* Project 2 */}
                    <ProjectCard>
                        <ProjectImageLink to="/projects/deep-portfolio-optimization">
                            <ProjectImage src="https://via.placeholder.com/400x300" alt="Project 2" />
                        </ProjectImageLink>
                        <ProjectTitle>Deep Portfolio Optimization</ProjectTitle>
                        <ProjectDescription>
                            A portfolio optimization model which combines the power of deep learning and linear programming to maximize returns while managing risk tolerances.
                        </ProjectDescription>
                        <LearnMoreLink to="/projects/deep-portfolio-optimization">LEARN MORE</LearnMoreLink>
                    </ProjectCard>
                    {/* Project 3 */}
                    <ProjectCard>
                        <ProjectImageLink to="/projects/fpn-reimplementation">
                            <ProjectImage src={fpn_reimplementation} alt="FPN Reimplementation" />
                        </ProjectImageLink>
                        <ProjectTitle>Feature Pyramid Network Reimplementation</ProjectTitle>
                        <ProjectDescription>
                            A reimplementation of a feature pyramid network for object detection.
                        </ProjectDescription>
                        <LearnMoreLink to="/projects/fpn-reimplementation">LEARN MORE</LearnMoreLink>
                    </ProjectCard>
                </ProjectsGrid>
            </ProjectsWrapper>
        </ThemeProvider>
    );
}

export default Projects;