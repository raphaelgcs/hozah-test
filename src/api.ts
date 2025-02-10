import { CalculationResult } from './types';

export const calculateParkingCost = async (
  siteOfferingId: string,
  sessionDuration: string,
  startsAt: string,
): Promise<CalculationResult> => {
  // Using CORS proxy to bypass cross-origin restrictions in development
  const response = await fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(
      `https://permits.hozah-staging.com/api/payment/fixed-length-session/cost?site_offering_id=${siteOfferingId}&session_duration=${sessionDuration}&starts_at=${startsAt}`,
    )}`,
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
