import * as React from 'react';
import { Header, Footer, ContentLoading } from '../../components';

export default function Welcome() {
  return (
    <div>
      <React.Suspense fallback={<ContentLoading />}>
        <Header />
        <Footer />
      </React.Suspense>
    </div>
  );
}
