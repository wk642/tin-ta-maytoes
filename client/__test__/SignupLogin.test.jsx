import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupLogin from '../components/SignupLogin';
import CloseIcon from "../components/CloseIcon";

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first
jest.mock('react-router', () => ({
  // Replace the link with a mock
  Link: ({ children, to, ...props }) => (
    // replace the link with <a> for now and renders what's inside
    // also replacing the route
    <a href={to} {...props} data-testid={`nav-link-${to.replace('/', '')}`}>
      {children}
    </a>
  ),
}));

describe("SignupLogin Component", () => {
  it("renders without crashing when isSignupLoginOpen is true", () => {
    render(<SignupLogin isSignupLoginOpen={true} closeSignupLogin={() => {}} />);
  });

  it('does not render when isSignupLoginOpen is false', () => {
    render(<SignupLogin isSignupLoginOpen={false} closeSignupLogin={() => {}} />);
    const dialogElement = screen.queryByRole('dialog');
    expect(dialogElement).not.toBeInTheDocument();
  });

  it('renders the title "Sign Up | Log In"', () => {
    render(<SignupLogin isSignupLoginOpen={true} closeSignupLogin={() => {}} />);
    const titleElement = screen.getByText(/Sign Up \| Log In/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the Register message', () => {
    render(<SignupLogin isSignupLoginOpen={true} closeSignupLogin={() => {}} />);
    const registerText = screen.getByText(/Register to store your progress/i);
    expect(registerText).toBeInTheDocument();
  });

  it('renders the Login message', () => {
    render(<SignupLogin isSignupLoginOpen={true} closeSignupLogin={() => {}} />);
    const loginButton = screen.getByText(/Login/i);
    fireEvent.click(loginButton);
    const loginText = screen.getByText(/Welcome back, login to keep playing/i);
    expect(loginText).toBeInTheDocument();
  });

  it('renders the Play as Guest message', () => {
    render(<SignupLogin isSignupLoginOpen={true} closeSignupLogin={() => {}} />);
    const guestButton = screen.getByText(/Play as Guest/i);
    fireEvent.click(guestButton);
    const guestText = screen.getByText(/Welcome back, login to keep playing/i);
    expect(guestText).toBeInTheDocument();
  });
});
