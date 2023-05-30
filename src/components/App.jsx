import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {
        id: nanoid(),
        name: '',
      },
    ],
    name: '',
  };
}
