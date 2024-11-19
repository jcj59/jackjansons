import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.footerBackground};
    color: ${(props) => props.theme.colors.footerText};
    padding: 0.5rem 0;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 0.8rem;
    font-weight: regular;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    .social-links {
        display: flex;
        gap: 0.5rem;
        font-size: .8rem;
    }

    a {
        color: ${(props) => props.theme.colors.footerText};
        text-decoration: none;
        font-size: .8rem;
        font-weight: regular;

        display: inline-flex;
        align-items: center;

        svg {
            vertical-align: middle;
            font-size: 1rem;
        }

        &:hover {
            color: ${(props) => props.theme.colors.hover};
        }
    }

    p {
        margin: 0;
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
