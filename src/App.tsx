import { Route, Routes } from '@solidjs/router';
import { Component, createEffect, createSignal } from 'solid-js';
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';

const [username, setUsername] = createSignal('RichardMillerWimmer')
const [repos, setRepos] = createSignal([])

const App: Component = () => {
  createEffect(async () => {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
    const data = await res.json()
    setRepos(data)
  })


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

export { username, setUsername, repos }
export default App;
