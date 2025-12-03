import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import { ProductDisplay } from '../src/components/UserProfileCard/UserProfileCard';

describe('User card test', () => {
    it('positive test',()=>{
        const user = {
        id: '101',
        name: 'Tom Doe',
        email: 'john.doe@example.com',
        role: 'Software Engineer',
        avatarUrl: 'https://example.com/avatar.jpg'
        };
    })
        render(<ProductDisplay user={user}/>)

        expect('Tom Doe').to.eq('Tom Doe');
        // Check if product description is rendered
        expect(screen.getByText('High-quality wireless headphones with noise cancellation.')).toBeInTheDocument();
});