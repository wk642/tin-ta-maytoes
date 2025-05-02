import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

jest.mock('../components/SignupLogin', () => () => <div>Mocked</div>);

describe('Homepage ', () => {
  it('renders the "Tin Ta Maytoes" title', () => {
    // Arrange
    render(<Home />);

    // Assert
    expect(screen.getByText('Tin')).toBeInTheDocument();
    expect(screen.getByText('Ta')).toBeInTheDocument();
    expect(screen.getByText('Maytoes')).toBeInTheDocument();
  });
});