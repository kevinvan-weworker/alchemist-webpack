import * as React from 'react';

import Home from 'pages/home';

import { SETTINGS } from 'configs/settings';

const { APP_NAME } = SETTINGS;

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const App = (props: HelloProps) => (
  <>
    <Home />
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
    <p>ENV = {APP_NAME}</p>
  </>
);