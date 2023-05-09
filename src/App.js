import { useState } from 'react';
import './App.css';
import { GithubUser } from './GithubUser';
import { SearchForm } from './SearchForm';

function App() {
  const [login, setLogin] = useState();

  function handleLoginChange(input) {
    setLogin(input);
  }

  return (
    <>
    <SearchForm value={login} setValue={handleLoginChange} />
    <GithubUser login={login} />
    </>
  );
}

export default App;
