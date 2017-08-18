import React from 'react';
import { shallow } from 'enzyme';

import TextArea from '../TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <TextArea />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text', () => {
    const wrapper = shallow(
      <TextArea />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onChange property when text changes', () => {
    const onChangeMock = jest.fn();
    const changedText = 'Test text';
    const wrapper = shallow(
      <TextArea
      text="Test tex"
        onChange={onChangeMock}
      />
    );

    wrapper.simulate('change', { target: { value: changedText}});
    expect(onChangeMock).toHaveBeenCalledWith(changedText);
  });

  it('works without onChange ', () => {
    const onChangeMock = jest.fn();
    const changedText = 'Test text';
    const wrapper = shallow(
      <TextArea
        text="Test text"
      />
    );

    wrapper.simulate('change', { target: { value: changedText}});
    expect(wrapper).toMatchSnapshot();
  });

  it('forwards extra props', () => {
    const wrapper = shallow(
      <TextArea
        placeholder="Placeholder text"
      />
    );
    expect(wrapper).toMatchSnapshot();
  })
});
