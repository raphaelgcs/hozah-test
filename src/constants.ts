import { SiteOffering, FormData } from './types';

export const SITE_OFFERINGS: SiteOffering[] = [
  {
    id: '045a4d7cd5cb424c978f61ce2b94f316',
    name: 'Car Park 1',
  },
  {
    id: 'bb91de2038984eee81a085f9e62e5b34',
    name: 'Car Park 2',
  },
];

export const initialFormData: FormData = {
  vrm: '',
  startTime: '',
  hours: '1',
  minutes: '0',
  siteOffering: SITE_OFFERINGS[0].id,
};
