import React, { useState } from 'react';
import HookUseState from './Hooks/HookUseState';
import HookUseEffect from './Hooks/HookUseEffect';
import HookUseContext from './Hooks/HookUseContext';
import CurrencyContext from './Currency/CurrencyContext';
import CurrencyContainer from './Currency/CurrencyContainer';
import StateFulForm from './Hooks/HookUseReducer/StateFulForm';
import UserProfile from './UserProfile/UserProfile';
import Callback from './CallBack/Callback';
import "./App.css";
import HookUseMemo from './UseMemo/HookUseMemo';

const App = () => {
  const [price, setPrice] = useState(0);
  return (
    <div>
    <HookUseMemo/>
    <Callback/>
      <HookUseState />
      <HookUseEffect />
      <HookUseContext />
      <CurrencyContext.Provider value={price}>
        <h2> Конвертер валю</h2>
        <h3>Введіть ціну в доларах:</h3>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(parseFloat(e.target.value))}
        />
        <CurrencyContainer/>
      </CurrencyContext.Provider>
      <StateFulForm/>
      <UserProfile/>
    </div>
  );
};

export default App;
