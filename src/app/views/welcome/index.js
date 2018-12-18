import * as React from 'react';
import { Header } from '../../components';

export default function Welcome() {
  return (
    <div>
      <React.Suspense fallback={<div /* loading */ />}>
        <Header />
      </React.Suspense>
    </div>
  );
}
