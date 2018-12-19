import * as React from 'react';

// Components
import ContentLoading from './content-loading';

// Async Components
const Header = React.lazy(() => import('./header'));
const Footer = React.lazy(() => import('./footer'));

export { Header, Footer, ContentLoading };
