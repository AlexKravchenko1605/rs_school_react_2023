import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders hellow world', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    );
  });
});
