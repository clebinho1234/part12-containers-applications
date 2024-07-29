import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';

test('renders Todo component', () => {
  const todo = {
    title: 'Test Todo',
    description: 'This is a test description',
  };

  render(<Todo todo={todo} />);

  expect(screen.getByText('Test Todo')).toBeInTheDocument();
  expect(screen.getByText('This is a test description')).toBeInTheDocument();
});
