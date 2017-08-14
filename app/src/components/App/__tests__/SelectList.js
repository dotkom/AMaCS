import React from 'react';
import { shallow } from 'enzyme';

import SelectedList from '../SelectedList';

const createCommittee = (name) => ({
  name
})

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
      createCommittee('Testkom')
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with two out of three choices', () => {
    const committees = [
      createCommittee('Testkom'),
      createCommittee('Bestkom'),
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with three out of three choices', () => {
    const committees = [
      createCommittee('Testkom'),
      createCommittee('Bestkom'),
      createCommittee('Sickkom'),
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={3} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with more than total choices', () => {
    const committees = [
      createCommittee('Testkom'),
      createCommittee('Bestkom'),
      createCommittee('Sickkom'),
    ]
    const wrapper = shallow(
      <SelectedList totalChoices={2} committees={committees} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
