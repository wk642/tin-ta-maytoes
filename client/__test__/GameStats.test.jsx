import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameStats from '../components/GameStats';
import HomeIcon from '../components/HomeIcon';
import SettingsIcon from '../components/SettingsIcon';
import LeaderboardIcon from '../components/LeaderboardIcon';

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first 
jest.mock('react-router', () => ({
  // Replace the link with a mock
  Link: ({ children, to, ...props }) => (
    // replace the link with <a> for now and renders what's inside and the route
    <a href={to} {...props} data-testid={`nav-link-${to.replace('/', '')}`}>
      {children}
    </a>
  ),
}));

describe('GameStats Component', () => {
  it('renders without crashing', () => {
    render(<GameStats />);
  });

  it('renders the Home link', () => {
    render(<HomeIcon />);
    const homeLink = screen.getByTestId('nav-link-'); 
    expect(homeLink).toBeInTheDocument();
  });

  it('renders the Settings link', () => {
    render(<SettingsIcon />);
    const settingsLink = screen.getByTestId('nav-link-settings');  
    expect(settingsLink).toBeInTheDocument();
  });

  it('renders the Leaderboard link', () => {
    render(<LeaderboardIcon />);
    const leaderboardLink = screen.getByTestId('nav-link-leaderboard'); 
    expect(leaderboardLink).toBeInTheDocument();
  });

  it('renders the "Coming soon ..." text', () => {
    render(<GameStats />);
    const comingSoonText = screen.getByText(/Coming soon/i);
    expect(comingSoonText).toBeInTheDocument();
  });
});
