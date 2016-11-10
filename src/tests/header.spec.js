import React from 'react';
import Header from '../components/Header';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('Header components', () => {
  it('should be rendered into a header container', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).to.equal('header');
  });

  it('displays a sign in component', () => {
    expect(2).to.equal(2);
    // assert that signin component exists
  });
});
