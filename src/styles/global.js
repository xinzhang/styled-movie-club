import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from './theme';
import barlowLight from './fonts/barlow/barlow-light.woff2';
import barlowRegular from './fonts/barlow/barlow-regular.woff2';
import barlowMedium from './fonts/barlow/barlow-medium.woff2';
import barlowSemiBold from './fonts/barlow/barlow-semibold.woff2';

export default createGlobalStyle`
  ${styledNormalize};

  @font-face {
    font-family: 'Barlow';
    font-weight: 300;
    src: url(${barlowLight}) format('woff2');
  }

  @font-face {
    font-family: 'Barlow';
    font-weight: 400;
    src: url(${barlowRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Barlow';
    font-weight: 500;
    src: url(${barlowMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Barlow';
    font-weight: 600;
    src: url(${barlowSemiBold}) format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-size: ${theme.bodyFontSize};
    font-family: ${theme.bodyFontFamily};
    font-weight: 400;
    color: ${theme.secondary};
    overflow-x: hidden;
    background: rgba(2, 0, 36, 1);
  }

  figure {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* using translate3d because IE and EDGE don't support will-change property */
  .overlay-enter {
    transform: translate3d(0, 100%, 0);
  }

  .overlay-enter-active {
    transform: translate3d(0, 0, 0);
  }

  .overlay-exit-active {
    transform: translate3d(0, 100%, 0);
  }
  `;
