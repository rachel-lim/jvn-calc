import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <ThemeProvider>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Calculator />
  </ThemeProvider>,
  document.getElementById('root')
);