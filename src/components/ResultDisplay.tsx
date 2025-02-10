import { CalculationResult } from '../types';

import { formatPrice, parseDuration } from '../utils';

interface ResultDisplayProps {
  result: CalculationResult | null;
}

// Only handling the maximum_duration_for_charge hint as that was the only one I found whily testing
// TODO: Add support for other hint types once API documentation is available, likely in a separate hints component
export const ResultDisplay = ({ result }: ResultDisplayProps) => {
  if (!result) return null;
  return (
    <div className='mt-6 p-4 bg-gray-50 rounded'>
      <h2 className='text-lg font-semibold text-gray-900 mb-2'>
        Calculation Result
      </h2>
      <p className='text-gray-700'>Cost: {formatPrice(result.price)}</p>

      {result.hints?.maximum_duration_for_charge && (
        <p className='mt-2 text-sm text-gray-600'>
          Maximum duration for the same charge:{' '}
          {parseDuration(result.hints.maximum_duration_for_charge || '')}
        </p>
      )}
    </div>
  );
};
