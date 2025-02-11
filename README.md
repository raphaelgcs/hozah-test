## How to Run It

Simply install the dependencies with `npm install`

Then run the app with `npm run dev`

You should be able to see it running locally on `http://localhost:5173/`

## Implementation Details

- Built with React and TypeScript for type safety
- Used Tailwind CSS for styling
- Implemented form validation for:
  - VRM normalization (uppercase, no spaces)
  - Duration validation (hours and minutes)
  - ISO8601 duration formatting (PTxHyM)

#### API Integration

- Used allorigins.win as a CORS proxy
- Handled various API responses including:
  - Successful calculations
  - Time-based restrictions (BEGINS_OUTSIDE_OF_TIMETABLE)
  - Duration limits (DURATION_EXTENDS_OUTSIDE_TIMETABLE)

#### Error Handling

- Comprehensive error handling for:
  - Car park closure times
  - Maximum duration limits
  - Invalid duration inputs
  - API failures

## Future Improvements

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
