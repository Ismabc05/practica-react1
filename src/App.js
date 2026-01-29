import React from 'react';
import { TodoProvider } from './context/context';
import { AppUI } from './context/appui';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
