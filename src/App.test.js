import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdepter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdepter()});

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  console.log(wrapper.debug());
  expect(wrapper.exists()).toBeTruthy();
  
});

test('renders app with length 1', () => {
  // const 
});
