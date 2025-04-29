import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

// Mock
// jest.mock('../assets/TinTaMaytoesIcon.png', () => 'tin_ta_maytoes_icon.png');

describe('<Home />', () => {
  it('renders the "Tin Ta Maytoes" title', () => {
    render(<Home />);
    expect(screen.getByText('Tin')).toBeInTheDocument();
    expect(screen.getByText('Ta')).toBeInTheDocument();
    expect(screen.getByText('Maytoes')).toBeInTheDocument();
  });
});