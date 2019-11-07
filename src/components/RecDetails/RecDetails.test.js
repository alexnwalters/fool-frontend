import React from 'react';
import ReactDOM from 'react-dom';
import RecDetails from './RecDetails';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <RecDetails />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});