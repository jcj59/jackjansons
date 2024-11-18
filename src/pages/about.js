import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../theme';
import headshot from '../assets/images/headshot.jpg';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const AboutWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center everything vertically */
    align-items: center; /* Center everything horizontally */
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 4rem;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack content vertically on small screens */
    }
`;

const HeadshotWrapper = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%; /* Makes the container circular */
    background-color: ${(props) => props.theme.colors.accent};
    overflow: hidden; /* Ensures the image fits within the circle */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures the image fills the circle proportionally */
    }
`;

const TextBlock = styled.div`
    flex: 1;
    max-width: 800px;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: .6rem;
    line-height: 1.8;
    text-align: left;

    h1 {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 0rem;
        font-family: ${(props) => props.theme.fonts.secondary};
    }

    p {
        margin-bottom: 1rem;
        font-size: .95rem;
    }
`;

const LinksWrapper = styled.div`
    margin-top: 0rem;
    display: flex;
    justify-content: center; /* Center the links horizontally */
    gap: 3rem; /* Space between the links */

    .link {
        font-family: ${(props) => props.theme.fonts.primary};
        color: ${(props) => props.theme.colors.text};
        font-size: .8rem;
        text-decoration: underline;
        text-underline-offset: 4px;
        transition: color 0.3s ease;

        &:hover {
            color: ${(props) => props.theme.colors.hover}; /* Change color on hover */
        }
    }
`;

function About() {
    return (
        <ThemeProvider theme={generalTheme}>
            <Element name="about">
                <AboutWrapper>
                    <ContentWrapper>
                        <HeadshotWrapper>
                            <img
                                src={headshot}
                            />
                        </HeadshotWrapper>
                        <TextBlock>
                            <h1>About Me</h1>
                            <p>
                                Hi, I’m Jack Jansons. I am currently a senior at Cornell University pursuing degrees in Computer Science and Operations Research. An incoming software engineer at Meta in Cambridge, MA, I combine my background in machine learning, optimization, and data science to contribute to artificial intelligence and software development initiatives.
                            </p>
                            <p>
                                I aim to advance meaningful projects and design innovative solutions, and I am driven by being at the forefront of technological developments and seeing the direct impact of my work. I am committed to continuous learning and seek collaborative opportunities that share my values.
                            </p>
                            <p>
                                In my free time, I am an avid runner training for my first marathon and hope to qualify for the Boston Marathon, which starts just outside my hometown. I love cheering for the Patriots and Bruins, and when I need a break from coding, I can be found playing chess and Settlers of Catan. While these interests round out my life, they have also provided me with the inspiration for many of my most exciting projects.
                            </p>
                        </TextBlock>
                    </ContentWrapper>
                    <LinksWrapper>
                        <Link to="/projects" className="link">
                            EXPLORE PROJECTS
                        </Link>
                        <Link to="/research" className="link">
                            EXPLORE RESEARCH
                        </Link>
                    </LinksWrapper>
                </AboutWrapper>
            </Element>
        </ThemeProvider >
    );
}

export default About;
