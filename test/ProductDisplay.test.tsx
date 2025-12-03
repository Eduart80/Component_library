/// <reference types="mocha" />

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import { ProductDisplay } from '../src/components/ProductDisplay/ProductDisplay';

describe('Product Display component', () => {
  it('Positive test', () => {
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
    expect(screen.getByText('Wireless Headphones')).to.exist;

    // Check if product description is rendered
    expect(screen.getByText('High-quality wireless headphones with noise cancellation.')).to.exist;
  });
});