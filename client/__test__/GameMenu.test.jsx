import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameMenu from '../components/GameMenu';

// Mock react-router
jest.mock('react-router', () => ({
  Link: ({ children, to, ...props }) => (
    // change it to show the actual mock route 
    // "/scenarioList" will be "nav-link-scenarioList"
    <a href={to} {...props} data-testid={`nav-link-${to.replace('/', '')}`}>
      {children}
    </a>
  ),
}));

describe('GameMenu Component', () => {
  it('renders without crashing', () => {
    render(<GameMenu />);
  });

  it('renders the title "Menu"', () => {
    render(<GameMenu />);
    const headerText = screen.getByText(/Menu/i);
    expect(headerText).toBeInTheDocument();
  });

  it('renders the Scenario List link', () => {
    render(<GameMenu />);
    const scenarioListLink = screen.getByTestId('nav-link-scenarioList');
    expect(scenarioListLink).toBeInTheDocument();
    expect(scenarioListLink).toHaveTextContent(/SCENARIO/i);
  });

  it('renders the Story Mode Menu link', () => {
    render(<GameMenu />);
    const storyModeMenuLink = screen.getByTestId('nav-link-storyModeMenu');
    expect(storyModeMenuLink).toBeInTheDocument();
    expect(storyModeMenuLink).toHaveTextContent(/STORY/i);
  });

  it('renders the Suggestions button', () => {
    render(<GameMenu />);
    const suggestionsButton = screen.getByText(/SUGGESTIONS/i);
    expect(suggestionsButton).toBeInTheDocument();
  });
});
