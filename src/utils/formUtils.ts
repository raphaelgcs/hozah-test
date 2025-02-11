export const formatDuration = (h: string, m: string): string => {
  const durationParts = [];
  if (parseInt(h) > 0) durationParts.push(`${h}H`);
  if (parseInt(m) > 0) durationParts.push(`${m}M`);
  return `PT${durationParts.join('')}`;
};

export const parseDuration = (duration: string): string => {
  const matches = duration.match(/PT(\d+H)?(\d+M)?/);
  if (!matches) return 'Invalid duration';

  const hours = matches[1] ? parseInt(matches[1].replace('H', '')) : 0;
  const minutes = matches[2] ? parseInt(matches[2].replace('M', '')) : 0;

  const parts = [];
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);

  return parts.join(' and ') || '0 minutes';
};

export const normalizeVrm = (value: string): string =>
  value.toUpperCase().replace(/\s/g, '');

export const formatPrice = (pence: number): string => {
  const pounds = pence / 100;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(pounds);
};
