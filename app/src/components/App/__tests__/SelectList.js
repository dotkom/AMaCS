import React from 'react';
import { shallow } from 'enzyme';

import SelectedList from '../SelectedList';

import { createCommitteeObject } from 'common/testUtils';

describe('SelectedList', () => {
  it('renders correctly with no choices', () => {
    const wrapper = shallow(
      <SelectedList totalChoices={3} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with empty choices', () => {
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={[]} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with one out of three choices', () => {
    const committees = [
      createCommitteeObject('Testkom')
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with two out of three choices', () => {
    const committees = [
      createCommitteeObject('Testkom'),
      createCommitteeObject('Bestkom'),
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with three out of three choices', () => {
    const committees = [
      createCommitteeObject('Testkom'),
      createCommitteeObject('Bestkom'),
      createCommitteeObject('Sickkom'),
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with more than total choices', () => {
    const committees = [
      createCommitteeObject('Testkom'),
      createCommitteeObject('Bestkom'),
      createCommitteeObject('Sickkom'),
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={2} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onChange when clicking on a choice', () => {
    const committees = [
      createCommitteeObject('Testkom'),
      createCommitteeObject('Bestkom'),
      createCommitteeObject('Sickkom'),
    ]
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} onChange={onChangeMock} />
    );
    wrapper.find('Selectable').first().simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith('testkom');  });

  it('calls onChange when clicking on a choice', () => {
    const committees = [
      createCommitteeObject('Testkom'),
      createCommitteeObject('Bestkom'),
      createCommitteeObject('Sickkom'),
    ]
    const onChangeMock = jest.fn();
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} onChange={onChangeMock} />
    );
    wrapper.find('Selectable').last().simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith('sickkom');
  });

  it('renders correctly when ordered', () => {
    const committees = [
      createCommitteeObject('Testkom'),
    ];
    const wrapper = shallow(
      <SelectedList ordered totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
