import Header from './components/Header/Header';
import Results from './components/Results/Results';
import UserInput from './components/UserInput/UserInput';

import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    initialInvestment: 10000,
    annualInvestment: 200,
    expectedReturn: 5.5,
    duration: 2,
  });

  function handleInput(inputIdentifier, newValue) {
    setState(prevUser => {
      return {
        ...prevUser,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <header id='header'>
        <Header />
      </header>
      <section id='user-input'>
        <UserInput handleInput={handleInput} state={state} />
      </section>
      <table id='result'>
        <Results state={state} />
      </table>
    </>
  );
}

export default App;
