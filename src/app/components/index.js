import * as React from 'react';

/**
 * Default Import
 * import Header from './components/header';
 *
 * Improvement to get more performance
 * import { Header } from './components';
 */

// Components
import ContentLoading from './content-loading';

// Async Components
const Header = React.lazy(() => import('./header'));
const Footer = React.lazy(() => import('./footer'));

export { Header, Footer, ContentLoading };
