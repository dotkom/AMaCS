import React from 'react';
import { shallow } from 'enzyme';

import SelectContainer, { updateSelection } from '../SelectContainer';

import { createCommitteeObject } from 'common/testUtils';

describe('SelectContainer', () => {
  const committees = new Map([
    ['Test0kom', createCommitteeObject('Test0kom')],
    ['Test1kom', createCommitteeObject('Test1kom')],
    ['Test2kom', createCommitteeObject('Test2kom')],
    ['Test3kom', createCommitteeObject('Test3kom')],
  ]);

  it('renders correctly with none selected', () => {
  const selected = [];
    const wrapper = shallow(
      <SelectContainer committees={committees} selected={selected} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with one selected', () => {
  const selected = ['Test1kom'];
    const wrapper = shallow(
      <SelectContainer committees={committees} selected={selected} />
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('renders correctly with two selected', () => {
  const selected = ['Test2kom', 'Test1kom'];
    const wrapper = shallow(
      <SelectContainer committees={committees} selected={selected} />
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('calls onChange when adding committee', () => {
  const selected = ['Test2kom', 'Test1kom'];
  const onChangeMock = jest.fn();
    const wrapper = shallow(
      <SelectContainer
        committees={committees}
        selected={selected}
        onChange={onChangeMock}
      />
    );
    wrapper.find('Selectable').first().simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith(['Test2kom', 'Test1kom', 'Test0kom']);
  });

  it('calls onChange when removing committee', () => {
    const selected = ['Test2kom', 'Test0kom', 'Test1kom'];
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <SelectContainer
        committees={committees}
        selected={selected}
        onChange={onChangeMock}
      />
    );
    wrapper.find('Selectable').first().simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith(['Test2kom', 'Test1kom']);
  });

  it('calls onChange when removing committee from SelectedList', () => {
    const selected = ['Test2kom', 'Test0kom', 'Test1kom'];
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <SelectContainer
        committees={committees}
        selected={selected}
        onChange={onChangeMock}
      />
    );
    wrapper.find('SelectedList').first().simulate('change', 'Test0kom');
    expect(onChangeMock).toHaveBeenCalledWith(['Test2kom', 'Test1kom']);
  });
});

describe('updateSelection', () => {
  it('adds selection to when none selected', () => {
    const selected = [];
    const newSelection = updateSelection(selected, 'New', 3);
    expect(newSelection).toEqual(['New']);
  });

  it('adds selection to when 1/3 selected', () => {
    const selected = ['1'];
    const newSelection = updateSelection(selected, '2', 3);
    expect(newSelection).toEqual(['1', '2']);
  });

  it('adds selection to when 2/3 selected', () => {
    const selected = ['1', '2'];
    const newSelection = updateSelection(selected, '3', 3);
    expect(newSelection).toEqual(['1', '2', '3']);
  });

  it('does nothing if 3/3 selected', () => {
    const selected = ['1', '2', '3'];
    const newSelection = updateSelection(selected, '4', 3);
    expect(newSelection).toEqual(selected);
  });

  it('removes item if already selected', () => {
    const selected = ['1', '2', '3'];
    const newSelection = updateSelection(selected, '2', 3);
    expect(newSelection).toEqual(['1', '3']);
  });


  it('returns empty array if removing last item ', () => {
    const selected = ['2'];
    const newSelection = updateSelection(selected, '2', 3);
    expect(newSelection).toEqual([]);
  });
});
