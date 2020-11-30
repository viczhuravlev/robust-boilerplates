import React, { Suspense, StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';

const MainPage = React.lazy(() => import('./pages/MainPage'));

function Loader() {
  return <>Loading ...</>;
}

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <MainPage />
      </Suspense>
    </StrictMode>
  );
}

export default hot(App);
