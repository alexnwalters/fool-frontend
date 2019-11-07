import React from 'react';
import ReactDOM from 'react-dom';
import Recs from './Recs';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Recs />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});