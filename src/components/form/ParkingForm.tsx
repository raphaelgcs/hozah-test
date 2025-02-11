import { FormData } from '../../types';
import { SITE_OFFERINGS } from '../../constants';
import { useState } from 'react';

interface ParkingFormProps {
  formData: FormData;
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

export const ParkingForm = ({
  formData,
  loading,
  onSubmit,
  onChange,
}: ParkingFormProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsButtonDisabled(true);
    await onSubmit(e);
    // waits one second to allow calculation again
    setTimeout(() => setIsButtonDisabled(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='block text-sm font-bold text-gray-700'>
          Vehicle Registration (VRM)
        </label>
        <input
          type='text'
          name='vrm'
          value={formData.vrm}
          onChange={onChange}
          className='mt-1 block w-full rounded border border-gray-400 p-2'
          required
        />
      </div>

      <div>
        <label className='block text-sm font-bold text-gray-700'>
          Parking Start Time
        </label>
        <input
          type='datetime-local'
          name='startTime'
          value={formData.startTime}
          onChange={onChange}
          className='mt-1 block w-full rounded border border-gray-400 p-2'
          required
        />
      </div>

      <div>
        <label className='block text-sm font-bold text-gray-700'>
          Duration
        </label>
        <div className='flex gap-4'>
          <div className='flex-1'>
            <input
              type='number'
              name='hours'
              min='0'
              max='24'
              value={formData.hours}
              onChange={onChange}
              className='mt-1 block w-full rounded border border-gray-400 p-2'
              placeholder='Hours'
              required
            />
            <span className='text-sm text-gray-500'>Hours</span>
          </div>
          <div className='flex-1'>
            <input
              type='number'
              name='minutes'
              min='0'
              max='59'
              value={formData.minutes}
              onChange={onChange}
              className='mt-1 block w-full rounded border border-gray-400 p-2'
              placeholder='Minutes'
              required
            />
            <span className='text-sm text-gray-500'>Minutes</span>
          </div>
        </div>
      </div>

      <div>
        <label className='block font-bold font-lg text-gray-700'>
          Car Parks
        </label>
        <select
          name='siteOffering'
          value={formData.siteOffering}
          onChange={onChange}
          className='mt-1 block w-full rounded border border-gray-400 p-2'
        >
          {SITE_OFFERINGS.map(site => (
            <option key={site.id} value={site.id}>
              {site.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type='submit'
        disabled={loading || isButtonDisabled}
        className='w-full py-2 px-4 rounded text-base font-bold text-gray-800 disabled:opacity-50 cursor-pointer'
        style={{ backgroundColor: '#00e399' }}
      >
        {isButtonDisabled ? 'Calculating...' : 'Calculate Cost'}
      </button>
    </form>
  );
};
