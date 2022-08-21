import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';
import routes from './routes';

const App: Component = () => {
  return (
    <div>
      <Nav />
      <h1>App Component</h1>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/saved' component={Saved} />
      </Routes>
      {/* {routes} */}
    </div>
  );
};

export default App;
