import * as React from 'react';
import './App.css';
import DataGridViPro from './ui/card';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons() {
  return (
    <DataGridViPro/>
  );
}

function App() {
  return (
    <div className="App">
      <BasicButtons />
    </div>
  );
}

export default App;
