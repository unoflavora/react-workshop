import App from '../App';
import { render, fireEvent } from '@testing-library/react';

import 'jest-canvas-mock';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../styles.css', () => ({ __esModule: true, default: '' }));
jest.mock('../assets/toped.png', () => ({ __esModule: true, default: 'toped.png' }));

describe('Integration test for React Advance 1', () => {
  it('should run the application', () => {
    const { getByText, getByAltText } = render(<App />);

    expect(getByText('Hello! Welcome to Tokopedia DevCamp 2022')).toBeVisible();
    expect(getByText('Click For a Surprise')).toBeVisible();
    expect(getByAltText('toped')).toBeVisible();
    expect(getByAltText('toped')).toHaveAttribute('src', 'toped.png');

    fireEvent.click(getByText('Click For a Surprise'));

    expect(getByText('Click For a Surprise')).toHaveAttribute('disabled');
  });
});
