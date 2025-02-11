## Demo Link

https://hozah-test.vercel.app/

## How to Run It

Simply install the dependencies with `npm install`

Then run the app with `npm run dev`

You should be able to see it running locally on `http://localhost:5173/`

## Implementation Details

- Built with React and TypeScript
- Used Tailwind for styling
- Implemented form validation for:
  - VRM normalization
  - Duration validation
  - ISO8601 duration formatting

#### API Integration

- Used allorigins.win as a CORS proxy
- Handled API responses like:
  - Successful calculations
  - Time-based restrictions (BEGINS_OUTSIDE_OF_TIMETABLE)
  - Duration limits (DURATION_EXTENDS_OUTSIDE_TIMETABLE)

#### Error Handling

- Added error handling for:
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

#### Tests

- Test form validation logic
- Test utility functions (formatDuration, normalizeVrm, etc.)
- Test error handling scenarios
- Test full form submission flow
- Mock API responses for success/error cases
- Test loading states and UI feedback

#### UI Components

The form was created using native HTML elements which sometimes doesn't provide the best UI, so I'd improve this by using a component library like shadcn or Material UI.

#### Example test structure:

```tsx
describe('ParkingForm', () => {
  it('should validate VRM format');
  it('should handle API errors appropriately');
  it('should show loading state during submission');
  it('should display success message with valid data');
});
```
