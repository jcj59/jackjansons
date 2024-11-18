import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import About from './about';
import { homeTheme, generalTheme } from '../theme';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MdKeyboardArrowDown } from 'react-icons/md';


const HomeWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondary};
    min-height: 100vh; /* Ensure it covers the full viewport height */
    display: flex;
    flex-direction: column;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1; /* Each section takes equal vertical space */
    padding: 2rem;
    padding-bottom: 8rem; /* Add extra padding at the top to move content up */

    h1 {
        font-family: ${(props) => props.theme.fonts.secondary};
        color: ${(props) => props.theme.colors.text};
        font-size: 4.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    p {
        font-family: ${(props) => props.theme.fonts.secondary};
        color: ${(props) => props.theme.colors.text};
        font-size: 1.2rem;
        line-height: 1.6;
        margin: 0 auto;
    }

    .links {
        margin-top: 3rem; /* Add space above the links */
        display: flex; /* Use flexbox for horizontal alignment */
        justify-content: center; /* Center the links horizontally */
        gap: 4rem; /* Space between the links */
    }

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

    .scroll-arrow {
        margin-top: 3rem;
        font-size: 2rem;
        color: ${(props) => props.theme.colors.text};
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
            color: ${(props) => props.theme.colors.hover};
        }
    }
`;

function Home() {
    const [currentTheme, setCurrentTheme] = useState(homeTheme);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about-section');

            if (aboutSection) {
                const aboutOffsetTop = aboutSection.offsetTop;
                const currentScroll = window.scrollY;

                if (currentScroll >= aboutOffsetTop - 126) {
                    setCurrentTheme(generalTheme);
                } else {
                    setCurrentTheme(homeTheme);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ThemeProvider theme={currentTheme}>
                <Header />
            </ThemeProvider>
            <ThemeProvider theme={homeTheme}>
                <HomeWrapper>
                    <Section>
                        <h1>Jack Jansons</h1>
                        <p>
                            Software Engineer at Meta
                        </p>
                        <p>
                            Computer Science and Operations Research at Cornell University
                        </p>
                        <div className="links">
                            <RouterLink to="/projects" className="link">
                                EXPLORE PROJECTS
                            </RouterLink>
                            <RouterLink to="/research" className="link">
                                EXPLORE RESEARCH
                            </RouterLink>
                        </div>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="scroll-arrow"
                        >
                            <MdKeyboardArrowDown />
                        </ScrollLink>
                    </Section>
                </HomeWrapper>
            </ThemeProvider>
            <ThemeProvider theme={generalTheme}>
                <div id="about-section">
                    <About />
                </div>
            </ThemeProvider>
        </>
    );
}

export default Home;
