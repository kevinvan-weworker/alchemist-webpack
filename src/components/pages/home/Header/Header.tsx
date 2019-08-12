import * as React from 'react';

interface Props {
  text: string;
}

const Header = (props: Props) => (
  <h1>{props.text}</h1>
);

export default Header;