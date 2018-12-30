import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Link from '../components/atoms/Link'
import 'jest-styled-components'

enzyme.configure({ adapter: new Adapter() })

it('renders Link correctly', () => {
  const link = renderer.create(<Link />).toJSON()
  expect(link).toMatchSnapshot()
})
