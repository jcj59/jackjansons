import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
    bottom: 0;
    left: 0;
    width: 100%; /* Full width */
    background-color: ${(props) => props.theme.colors.footerBackground}; /* Footer background color */
    color: ${(props) => props.theme.colors.footerText}; /* Footer text color */
    padding: 0.5rem 0; /* Add some vertical padding for spacing */
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 0.8rem;
    font-weight: regular;
    z-index: 1000;

    display: flex; /* Use flexbox to align items horizontally */
    justify-content: center; /* Center all items horizontally */
    align-items: center; /* Align items vertically */

    gap: 1rem; /* Add space between the elements */

    .social-links {
        display: flex; /* Flexbox for the icons */
        gap: 0.5rem; /* Space between social icons */
        font-size: .8rem; /* Adjust icon size */
    }

    a {
        color: ${(props) => props.theme.colors.footerText};
        text-decoration: none;
        font-size: .8rem; /* Adjust icon size */
        font-weight: regular;

        display: inline-flex; /* Align icons with text */
        align-items: center; /* Center the icons vertically */

        svg { /* Target icons directly */
            vertical-align: middle; /* Ensure vertical alignment */
            font-size: 1rem; /* Adjust icon size for alignment */
        }

        &:hover {
            color: ${(props) => props.theme.colors.hover}; /* Change color on hover */
        }
    }

    p {
        margin: 0; /* Remove default margin from paragraph */
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <p>&copy; 2024 Jack Jansons. All Rights Reserved.</p>
            <div className="social-links">
                <p>Follow my work</p>
                <a
                    href="https://github.com/jcj59"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/jackjansons"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </div>
        </FooterWrapper>
    );
}

export default Footer;
