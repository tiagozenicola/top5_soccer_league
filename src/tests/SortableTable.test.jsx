import React from 'react';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortableTable from '../components/SortableTable';
import 'jest-styled-components';

enzyme.configure({ adapter: new Adapter() });

it('renders SortableTable correctly', () => {
  const stats = [{name: "Eden Hazard", assists: 10, team: "Chelsea"}]
  const sortableTable = renderer.create(<SortableTable stats={stats} numberField='assists' />).toJSON();
  expect(sortableTable).toMatchSnapshot();
});
