import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from "./pages/App";

import './styles/base.scss';

ReactDOM.render(
  <App compiler='TypeScript' framework='React' />,
  document.getElementById('app')
);