import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdepter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdepter()});

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
}

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBeTruthy();
});
test('renders app with length 1', () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
test('renders app with title <Hello React>', () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, 'title');
  expect(appComponent.text()).toBe('Hello React');
});
test('renders counter display as Count: 0', () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, 'counter-display');
  expect(appComponent.text()).toBe('Count: 0');
});
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
  expect(button.text()).toEqual('Increment Counter');
});
test('renders initial state', () => {
  const wrapper = setup();
  const initialState = wrapper.state('counter');
  expect(initialState).toBe(0);
});
test('renders increment state by 7', () => {
  const counter = 7;
  const wrapper = setup(null, {counter});

  //find button and click
  const button = findByAttr(wrapper, 'increment-button');
  button.simulate('click');
  console.log(wrapper.debug());
  // find display and test value
  const counterDisplay = findByAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});
