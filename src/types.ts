export interface CalculationResult {
  calculated: boolean;
  price: number;
  reasons?: Array<{
    reason: string;
    longest_valid_duration?: string;
  }>;
  hints?: {
    maximum_duration_for_charge?: string;
  };
}

export interface SiteOffering {
  id: string;
  name: string;
}

export interface FormData {
  vrm: string;
  startTime: string;
  hours: string;
  minutes: string;
  siteOffering: string;
}
