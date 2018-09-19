import React from 'react';
import renderer from "react-test-renderer";
import App from '../../App';

test('Renders expected snapshots', () => {
    const result = renderer.create(<App/>);

    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});
