import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductDisplay } from '../src/components/ProductDisplay/ProductDisplay';

describe('Product Display component', () => {
  test('should render product name and description', () => {
    const product = {
      id: '1',
      name: 'Wireless Headphones',
      price: 199.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      imageUrl: 'https://example.com/headphones.jpg',
      inStock: true,
    };

    render(<ProductDisplay product={product} />);

    // Check if product name is rendered
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();

    // Check if product description is rendered
    expect(screen.getByText('High-quality wireless headphones with noise cancellation.')).toBeInTheDocument();
  });
});