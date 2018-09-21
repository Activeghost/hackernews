import React from 'react';
import App from '../App';
import {render} from "enzyme";

test('Renders expected snapshots', () => {
   const component = render(<App/>);
   const tree = component.html();
    expect(tree).toMatchSnapshot();
});
