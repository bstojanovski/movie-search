import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
  }

  .center {
    text-align: center;
  }

  .error {
    color: red;
  }

  .movies {
    margin-top: 0!important;
  }

@media only screen and (max-width: 800px) {
  .movies ul li {
    width: calc(33% - 32px);
  }
}

@media only screen and (max-width: 480px) {
  .movies ul li {
    width: calc(50% - 32px);
  }
}

  @media only screen and (max-width: 400px) {
    .movies ul li {
      width: calc(100% - 32px);
      min-height: auto;
    }
  }
`;
