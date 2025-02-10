import { useState } from 'react';
import { CalculationResult, FormData } from './types';
import { initialFormData } from './constants';
import { normalizeVrm, formatDuration, parseDuration } from './utils';
import { calculateParkingCost } from './api';
import Navbar from './components/Navbar';
import { ParkingForm } from './components/ParkingForm';
import { ResultDisplay } from './components/ResultDisplay';
import { ErrorDisplay } from './components/ErrorDisplay';

const App = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'vrm' ? normalizeVrm(value) : value,
    }));
  };

  const calculateCost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Format dates and durations for API consumption
      const startsAt = new Date(formData.startTime).toISOString();
      const sessionDuration = formatDuration(formData.hours, formData.minutes);

      const data = await calculateParkingCost(
        formData.siteOffering,
        sessionDuration,
        startsAt,
      );

      // Handle API response based on known error cases
      // TODO: Add more error cases as they are documented
      if (data.reasons && data.reasons?.length > 0) {
        const reason = data.reasons[0].reason;
        switch (reason) {
          case 'BEGINS_OUTSIDE_OF_TIMETABLE':
            setError('The car park is closed at this time');
            break;
          case 'DURATION_EXTENDS_OUTSIDE_TIMETABLE':
            setError(
              `The duration exceeds the allowed timeframe. The maximum valid duration is: ${parseDuration(
                data.reasons[0].longest_valid_duration || '',
              )}`,
            );
            break;
          default:
            setError(
              'Failed to calculate parking cost due to an unknown reason',
            );
        }
      } else if (data.calculated) {
        setResult(data);
      } else {
        setError('Failed to calculate parking cost');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while calculating the cost');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-r from-[#009ADF] to-[#0080C7] py-12 px-4'>
        <div className='max-w-md mx-auto bg-white rounded-lg shadow p-6'>
          <h1 className='text-3xl font-bold mb-6 text-gray-900'>
            Parking Tariff Calculator
          </h1>

          <ParkingForm
            formData={formData}
            loading={loading}
            onSubmit={calculateCost}
            onChange={handleInputChange}
          />

          <ErrorDisplay error={error} />
          <ResultDisplay result={result} />
        </div>
      </div>
    </>
  );
};

export default App;
