import React, { Suspense } from 'react'
import { Route } from 'wouter';
import './App.css';

import GifsContextProvider from 'context/GifsContext';

import Header from 'components/Header'
import Footer from 'components/Footer';

const ListOfResults = React.lazy(() => import('pages/ListOfResults/ListOfResults'))
const Home = React.lazy(() => import('pages/Home'))


function App() {

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
        <GifsContextProvider>
          <Route
            component={Home}
            path="/"
          />
          <Route
            component={ListOfResults}
            path="/search/:keyword"
          />
        </GifsContextProvider>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
