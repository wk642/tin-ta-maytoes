import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileImageLeft from '../components/ProfileImageLeft';
import '@testing-library/jest-dom';

describe('ProfileImageLeft Component', () => {

  it('Profile Image Left Renders', async () => {
    render(<ProfileImageLeft />);

    const avatarDiv = await screen.findByTestId('avatar');
    expect(avatarDiv).toHaveStyle({
      backgroundImage: 'url(\'https://api.dicebear.com/7.x/bottts/svg?seed=sara\')',
    });
  });
});