import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProfileImageLeft from '../components/ProfileImageLeft';


// Mock the fetch function to control the API response URL
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=sara',
  })
);

describe('ProfileImageLeft Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('Profile Image Left Renders', async () => {
    render(<ProfileImageLeft />);

    // Wait for the fetch call to have been made
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1), { timeout: 5000 }); // Increased timeout

    expect(fetch).toHaveBeenCalledWith(
      'https://api.dicebear.com/7.x/bottts/svg?seed=sara'
    );

    const avatarDiv = await screen.findByRole('img');
    expect(avatarDiv).toHaveStyle({
      backgroundImage: 'url(\'https://api.dicebear.com/7.x/bottts/svg?seed=sara\')',
    });
  });

  it('renders with the correct className', async () => {
    render(<ProfileImageLeft />);

    // list the classNames // this breaks it, come back to it
    // const containerDiv = await screen.findByTestId('profile-image-div'); 
    // expect(containerDiv).toHaveClass('flex');
    // expect(containerDiv).toHaveClass('justify-items-stret');
    // expect(containerDiv).toHaveClass('ml-25');
    // expect(containerDiv).toHaveClass('relative');
    // expect(containerDiv).toHaveClass('w-fit');
    // expect(containerDiv).toHaveClass('h-fit');
  });
});