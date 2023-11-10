import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardList from './CardList';

describe('CardList component', () => {
  it('CardList renders without cards and show message "No cards to display"', () => {
    render(<CardList />);

    expect(screen.getByText('No cards to display')).toBeInTheDocument();
  });
});
