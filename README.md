# Future Improvements

#### Form Validation

- Implement Zod schema validation for robust type-safe form handling
- Add validation for:
  - VRM format rules
  - Maximum/minimum duration constraints
  - Future date restrictions
  - Required fields with custom error messages
- Testing Strategy

#### Unit Tests

- Test form validation logic
- Test utility functions (formatDuration, normalizeVrm, etc.)
- Test error handling scenarios

#### Integration Tests

- Test full form submission flow
- Mock API responses for success/error cases
- Test loading states and UI feedback

#### Component Tests

- Test individual components in isolation
- Verify component rendering with different props
- Test user interactions (input changes, form submission)

#### Example test structure:

```tsx
describe('ParkingForm', () => {
  it('should validate VRM format');
  it('should handle API errors appropriately');
  it('should show loading state during submission');
  it('should display success message with valid data');
});
```
