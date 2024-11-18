import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import styled from 'styled-components';
import resume from "../assets/resume/jack_jansons_resume.pdf";

const HeaderWrapper = styled.header`
    position: fixed;
    top: ${(props) => (props.isVisible ? '0' : '-16rem')}; /* Moves out of view */
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    padding: 2rem;
    box-sizing: border-box;
    z-index: 1000;

    font-family: ${(props) => props.theme.fonts.primary};
    transition: top 0.5s ease, background-color 0.3s ease; /* Smooth hiding animation */

    &:hover {
        background-color: ${(props) => props.theme.colors.hoverBackground};
        color: ${(props) => props.theme.colors.hoverText};
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .left-links, .right-links {
        display: flex;
        gap: 0rem;
        &:hover {
            color: ${(props) => props.theme.colors.hover};
        }
    }

    .logo {
        font-family: ${(props) => props.theme.fonts.tertiary};
        font-size: 2.25rem;
        font-weight: bold;
        text-decoration: none;
        margin: 0 2rem;

        &:hover {
            color: ${(props) => props.theme.colors.hover};
        }
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        font-size: 0.8rem;
        font-weight: regular;
        padding: 0.5rem 1rem;

        &:hover {
            color: ${(props) => props.theme.colors.hover};
        }
    }

    &:hover a {
        color: ${(props) => props.theme.colors.hoverText};
    }

    &:hover a:hover {
        color: ${(props) => props.theme.colors.hover};
    }
`;

const StyledButton = styled.button`
    all: unset; /* Reset button styles */
    cursor: pointer; /* Make it clickable */
    color: ${(props) => props.theme.colors.text};
    font-size: 0.8rem;
    font-weight: regular;
    padding: 0.5rem 1rem;

    &:hover {
        color: ${(props) => props.theme.colors.hover};
    }
    ${HeaderWrapper}:hover & {
        color: ${(props) => props.theme.colors.hoverText};
    }
    ${HeaderWrapper}:hover &:hover {
        color: ${(props) => props.theme.colors.hover};
    }
`;

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    let scrollTimeout = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Detect scroll direction
            if (prevScrollPos < currentScrollPos) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            // Reset the scrolling timeout
            if (scrollTimeout) {
                console.log('Clearing scroll timeout');
                clearTimeout(scrollTimeout);
            }


            // Stop scrolling after a delay
            scrollTimeout.current = setTimeout(() => {
                console.log('Scroll timeout triggered: User has stopped scrolling');
                setIsVisible(true);
            }, 500);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [isVisible, prevScrollPos]);

    const handleAboutClick = () => {
        if (location.pathname === '/') {
            // If already on the home page, scroll to the "about" section
            animateScroll.scrollTo(document.getElementById('about-section').offsetTop, {
                smooth: true,
                duration: 500,
            });
        } else {
            // Navigate to the home page and scroll to the "about" section
            navigate('/');
            setTimeout(() => {
                animateScroll.scrollTo(document.getElementById('about-section').offsetTop, {
                    smooth: true,
                    duration: 500,
                });
            }, 300); // Allow some time for navigation to complete
        }
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            animateScroll.scrollToTop({ smooth: true, duration: 500 });
        } else {
            navigate('/');
        }
    };

    return (
        <HeaderWrapper isVisible={isVisible}>
            <nav>
                {/* Left group of links */}
                <div className="left-links">
                    <StyledButton onClick={handleAboutClick} className="link">
                        ABOUT
                    </StyledButton>
                    <RouterLink to="/projects">PROJECTS</RouterLink >
                    <RouterLink to="/research">RESEARCH</RouterLink >
                </div>

                {/* Logo in the center */}
                <StyledButton onClick={handleLogoClick} className="logo">
                    Jack Jansons
                </StyledButton>

                {/* Right group of links */}
                <div className="right-links">
                    <a
                        href={resume} // Replace with the actual path to your resume
                        download="jack_jansons_resume.pdf" // Specify the desired file name for download
                        className="resume-link"
                    >
                        RESUME
                    </a>
                    <RouterLink to="/blog">BLOG</RouterLink >
                    <RouterLink to="/gallery">GALLERY</RouterLink >
                </div>
            </nav>
        </HeaderWrapper>
    );
}

export default Header;

