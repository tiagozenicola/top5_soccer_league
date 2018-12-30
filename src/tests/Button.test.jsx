import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../components/Button'
import 'jest-styled-components'

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
