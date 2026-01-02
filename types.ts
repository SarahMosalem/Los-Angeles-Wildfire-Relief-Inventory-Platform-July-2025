
export enum ClaimStatus {
  DRAFT = 'Draft',
  SUBMITTED = 'Submitted',
  UNDER_REVIEW = 'Under Review',
  APPROVED = 'Approved',
  PAID = 'Paid'
}

export enum ItemCategory {
  ELECTRONICS = 'Electronics',
  FURNITURE = 'Furniture',
  APPAREL = 'Apparel',
  KITCHENWARE = 'Kitchenware',
  APPLIANCES = 'Appliances',
  PERSONAL_EFFECTS = 'Personal Effects',
  OTHER = 'Other'
}

export interface InventoryItem {
  id: string;
  name: string;
  category: ItemCategory;
  estimatedValue: number;
  dateLogged: string;
  receiptStatus: 'Uploaded' | 'Missing';
  photoUrl?: string;
}

export interface ClaimState {
  currentStep: number;
  totalSteps: number;
  items: InventoryItem[];
  status: ClaimStatus;
}

export interface ResourceTip {
  title: string;
  description: string;
  icon: string;
}
