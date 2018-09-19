import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NewsItem from './../NewsItem';

const list = [
    {
        title: "React",
        url: "https://facebook.github.io/react",
        author: "Jordan Walke",
        num_comments: 5,
        points: 4,
        objectId: 0
    },
    {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectId: 1
    }
];
    test('Renders expected snapshots', () => {
        const newsItem = list[0];
        const result = renderer.create(
            <NewsItem key={newsItem.objectId} item={newsItem} onClick={() => {
            }}/>
        );

        let tree = result.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('calls click event when clicked', () => {
        const newsItem = list[0];
        const onClick = sinon.spy();
        const result = shallow(
            <NewsItem key={newsItem.objectId} item={list[0]} onClick={onClick}/>
        );

       result.find('button').simulate('click');
       expect(onClick.calledWith(0)).toBeTruthy();
    });
