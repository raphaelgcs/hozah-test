interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;
  return (
    <div className='mt-4 p-4 bg-red-50 border border-red-200 rounded text-red-700'>
      {error}
    </div>
  );
};
