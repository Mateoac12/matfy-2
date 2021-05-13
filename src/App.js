import React, { Suspense } from 'react'
import { Route, Switch } from 'wouter';
import './App.css';

import GifsContextProvider from 'context/GifsContext';

import Header from 'components/Header'
import Footer from 'components/Footer';
import ErrorPage from 'pages/ErrorPage';

const ListOfResults = React.lazy(() => import('pages/ListOfResults/ListOfResults'))
const Home = React.lazy(() => import('pages/Home'))


function App() {

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
        <GifsContextProvider>
          <Switch>
            <Route
              component={Home}
              path="/"
              />
            <Route
              component={ListOfResults}
              path="/search/:keyword"
              />
            <Route
              component={ErrorPage}
            />
          </Switch>
        </GifsContextProvider>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
