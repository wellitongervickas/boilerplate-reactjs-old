import * as React from 'react';

const Header = React.lazy(() => import('./header'));
const Footer = React.lazy(() => import('./footer'));

export { Header, Footer };
