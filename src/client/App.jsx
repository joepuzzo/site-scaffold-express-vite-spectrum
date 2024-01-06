import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';

// Hooks
import useApp from './hooks/useApp';

// Components
import { Header } from './Header';
import { Footer } from './Footer';
import { Routes } from './Routes';
import { Nav } from './Nav';

const App = () => {
  const { colorScheme } = useApp();

  // const location = window.location;
  // const playground = location.pathname.includes('playground');

  return (
    <Router>
      <Provider theme={defaultTheme} colorScheme={colorScheme}>
        <div className="site--app">
          <Header />
          <Nav />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
