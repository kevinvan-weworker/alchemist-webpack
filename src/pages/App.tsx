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
    <p>ENV = {process.env.NODE_ENV}</p>
    <p>APP = {process.env.APP_ENV}</p>
    <p>APP_NAME = {APP_NAME}</p>
  </>
);