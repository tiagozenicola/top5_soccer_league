import React from 'react';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortableTable from '../components/SortableTable';
import 'jest-styled-components';

enzyme.configure({ adapter: new Adapter() });

it('renders SortableTable correctly with 1 player', () => {
  const stats = [{ name: 'Eden Hazard', assists: 10, team: 'Chelsea' }];
  const sortableTable = renderer.create(<SortableTable stats={stats} numberField="assists" />).toJSON();
  expect(sortableTable).toMatchSnapshot();
});

it('renders SortableTable correctly with 2 players sort asc', () => {
  const stats = [{ name: 'Eden Hazard', assists: 10, team: 'Chelsea' }, { name: 'Cristiano Ronaldo', assists: 12, team: 'Juventus' }];
  const sortableTable = renderer.create(<SortableTable stats={stats} numberField="assists" />).toJSON();
  expect(sortableTable).toMatchSnapshot();
});

it('renders SortableTable correctly with 1 player sort desc', () => {
  const stats = [{ name: 'Eden Hazard', assists: 10, team: 'Chelsea' }, { name: 'Lionel Messi', assists: 2, team: 'Barcelona' }];
  const sortableTable = renderer.create(<SortableTable stats={stats} numberField="assists" />).toJSON();
  expect(sortableTable).toMatchSnapshot();
});
