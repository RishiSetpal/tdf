import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('John', 'john@example.com', 1234567890, { street: '', city: '', zipCode: '' }, 'JavaScript', 'Morning', true)).toBeTruthy();
  });
});
