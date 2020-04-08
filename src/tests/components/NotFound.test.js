import React from 'react';
import NotFoundPage from '../../components/NotFound';
import { shallow } from 'enzyme';

test('should render NotFound', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
