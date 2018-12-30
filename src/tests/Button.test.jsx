import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../components/Button'
import 'jest-styled-components'
import { wrap } from 'module';

enzyme.configure({ adapter: new Adapter() })

it('renders Button with no sort', () => {
  const sort = () => {}
  const button = renderer.create(<Button value="P" name="position" sortProperty="percent" orientation={-1} onClick={sort}/>).toJSON()
  expect(button).toMatchSnapshot()
})

it('renders Button sorting asc', () => {
  const sort = () => {}
  const button = renderer.create(<Button value="P" name="position" sortProperty="position" orientation={-1} onClick={sort}/>).toJSON()
  expect(button).toMatchSnapshot()
})

it('renders Button sorting desc', () => {
  const sort = () => {}
  const button = renderer.create(<Button value="P" name="position" sortProperty="position" orientation={1} onClick={sort}/>).toJSON()
  expect(button).toMatchSnapshot()
})

it('test that click calls my function', () => {
  const sort = jest.fn();
  const button = shallow(<Button value="P" name="position" sortProperty="position" orientation={1} onClick={sort}/>)
  button.simulate("click");
  expect(sort).toHaveBeenCalledTimes(1);
})