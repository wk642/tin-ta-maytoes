import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileImageRight from '../components/ProfileImageRight';
import '@testing-library/jest-dom';

describe('ProfileImageRight Component', () => {

  it('Profile Image Right Component Renders', async () => {
    render(<ProfileImageRight />);
  });
  
  it('Renders the avatar image', () => {
    render(<ProfileImageRight />);

    const avatarRight = screen.getByTestId('avatar-right');
    expect(avatarRight).toBeInTheDocument();
  });
});