import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScenarioGamePlay from '../components/ScenarioGamePlay';

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first
jest.mock('react-router', () => ({
  // mock useParams 
  useParams: () => ({ id: '1111' })
}));

describe('ScenarioGamePlay Component', () => {
  it('renders without crashing', () => {
    render(<ScenarioGamePlay />);
  });
});
