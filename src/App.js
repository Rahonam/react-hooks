import { createContext } from 'react';
import './App.css';
import { ContextHook } from './ContextHook';
import { EffectHook } from './EffectHook';
import { MemoHook } from './MemoHook';
import { ReducerHook } from './ReducerHook';
import { RefHook } from './RefHook';
import { StateHook } from './StateHook';

// ideally createContext should be in a separate module
const user = {
  name: "Manohar"
}
export const UserContext = createContext(user);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
      </header>
      <StateHook></StateHook>
      <hr/>
      <EffectHook></EffectHook>
      <hr/>
      <UserContext.Provider value={user}>
        <ContextHook></ContextHook>
      </UserContext.Provider>
      <hr/>
      <RefHook></RefHook>
      <hr/>
      <ReducerHook></ReducerHook>
      <hr/>
      <MemoHook></MemoHook>
    </div>
  );
}

export default App;
