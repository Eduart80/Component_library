import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserProfileCard } from '../src/components/UserProfileCard/UserProfileCard';

describe('UserProfileCard', () => {
    test('renders user information correctly', () => {
        const user = {
            id: '101',
            name: 'Tom Doe',
            email: 'john.doe@example.com',
            role: 'Software Engineer',
            avatarUrl: 'https://example.com/avatar.jpg'
        };
    
        render(<UserProfileCard {...user} />);

        // Check if user name is rendered
        expect(screen.getByText('Tom Doe')).toBeInTheDocument();
        
        // Check if user email is rendered
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        
        // Check if user role is rendered
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    });

    test('renders with minimal user data', () => {
        const user = {
            id: '102',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'Designer'
        };
    
        render(<UserProfileCard {...user} />);

        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
        expect(screen.getByText('Designer')).toBeInTheDocument();
    });

    test('renders children when provided', () => {
        const user = {
            id: '103',
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Developer'
        };
    
        render(
            <UserProfileCard {...user}>
                <div data-testid="child-element">Additional Content</div>
            </UserProfileCard>
        );

        expect(screen.getByTestId('child-element')).toBeInTheDocument();
        expect(screen.getByText('Additional Content')).toBeInTheDocument();
    });
});