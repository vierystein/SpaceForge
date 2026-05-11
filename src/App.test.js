// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SpaceForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SpaceForge/i);
    expect(titleElement).toBeInTheDocument();
});
