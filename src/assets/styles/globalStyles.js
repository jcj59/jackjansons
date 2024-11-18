import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Akzidenz-Grotesk Pro Ext";
        src: url("https://db.onlinewebfonts.com/t/e7c8661b3996ee1f620f98f623f9f2f2.eot");
        src: url("https://db.onlinewebfonts.com/t/e7c8661b3996ee1f620f98f623f9f2f2.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/e7c8661b3996ee1f620f98f623f9f2f2.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/e7c8661b3996ee1f620f98f623f9f2f2.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/e7c8661b3996ee1f620f98f623f9f2f2.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/e7c8661b3996ee1f620f98f623f9f2f2.svg#Akzidenz-Grotesk Pro Ext")format("svg");
    }

    @font-face {
    font-family: "Sainte Colombe";
        src: url("https://db.onlinewebfonts.com/t/45c9539496d485b0d39ee8348a41c3a2.eot");
        src: url("https://db.onlinewebfonts.com/t/45c9539496d485b0d39ee8348a41c3a2.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/45c9539496d485b0d39ee8348a41c3a2.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/45c9539496d485b0d39ee8348a41c3a2.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/45c9539496d485b0d39ee8348a41c3a2.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/45c9539496d485b0d39ee8348a41c3a2.svg#Sainte Colombe")format("svg");
    }

    @font-face {
    font-family: "Rosmerta";
        src: url("https://db.onlinewebfonts.com/t/648880e5095a0476109bbf0f2c9401a8.eot");
        src: url("https://db.onlinewebfonts.com/t/648880e5095a0476109bbf0f2c9401a8.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/648880e5095a0476109bbf0f2c9401a8.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/648880e5095a0476109bbf0f2c9401a8.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/648880e5095a0476109bbf0f2c9401a8.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/648880e5095a0476109bbf0f2c9401a8.svg#Rosmerta")format("svg");
    }

    body {
        font-family: ${(props) => props.theme.fonts.primary};
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }
`;

export default GlobalStyle;
