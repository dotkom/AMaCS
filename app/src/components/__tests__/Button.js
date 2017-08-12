import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';


describe('button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Button />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with text', () => {
    const tree = renderer.create(
      <Button text="Button with text" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with icon', () => {
    const tree = renderer.create(
      <Button text="Button with icon" iconLeft="/static/icon.png" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
