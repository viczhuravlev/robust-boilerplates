import React, { Suspense, StrictMode } from 'react';
import { hot } from 'react-hot-loader/root';

const MainPage = React.lazy(() => import('./pages/MainPage'));

function Loader() {
  return <>Loading ...</>;
}

function Router() {
  return (
    <>
      <MainPage />
    </>
  );
}

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </StrictMode>
  );
}

export default hot(App);
