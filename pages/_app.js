import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll);

import '@fortawesome/fontawesome-svg-core/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss' ;

import 'highlight.js/styles/base16/darcula.css'
// import 'highlight.js/styles/base16/github.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

/*
https://fontawesome.com/v6.0/icons?d=gallery&p=1&q=border%20all&s=solid&c=text-formatting

*/