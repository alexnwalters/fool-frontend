import React from 'react';
import ReactDOM from 'react-dom';
import Disclosure from './Disclosure';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Disclosure />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});