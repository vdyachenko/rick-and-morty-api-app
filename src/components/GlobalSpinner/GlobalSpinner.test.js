import React from 'react';
import { mount } from 'enzyme';

import GlobalSpinner from './GlobalSpinner';

let wrap;
describe('<GlobalSpinner />', () => {
  beforeEach(() => {
    wrap = mount(<GlobalSpinner />);
  });
  afterEach(() => {
    wrap.unmount();
  });
  it('renders without crashing', () => {
    expect(wrap).toMatchSnapshot();
  });
  it(`renders properly`, () => {
    expect(wrap.find('.ant-spin').length).toEqual(1);
    expect(wrap.find('.ant-spin').hasClass('ant-spin-lg')).toEqual(true);
  });
});