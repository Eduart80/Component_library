import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AlertBox } from '../src/components/AlertBox/AlertBox';

describe('AlertBox', () => {
  test('renders alert message correctly', () => {
    const props = {
      type: 'success' as const,
      message: 'Operation completed successfully!'
    };

    render(<AlertBox {...props} />);

    expect(screen.getByText('Operation completed successfully!')).toBeInTheDocument();
  });

  test('renders different alert types', () => {
    const props = {
      type: 'error' as const,
      message: 'Something went wrong!'
    };

    render(<AlertBox {...props} />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });
});