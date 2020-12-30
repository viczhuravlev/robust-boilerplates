import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root';

import { Loader } from '@core/components';

import AppRouter from '@core/AppRouter';
import AppProviders from '@core/AppProviders';

function App() {
  return (
    <AppProviders>
      <Suspense fallback={<Loader isContainer />}>
        <AppRouter />
      </Suspense>
    </AppProviders>
  );
}

export default hot(App);
