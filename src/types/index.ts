export type Category = 'All' | 'Walk' | 'Food' | 'Art';

export interface Activity {
  id: string;
  title: string;
  category: 'Walk' | 'Food' | 'Art';
  description: string;
  longDescription: string;
  duration: string;
  vibe: string;
  image: string;
  fallbackGradient: string;
  locationHint: string;
}

export type ModalType = 
  | null
  | 'activity_detail'
  | 'save_explanation'
  | 'registration'
  | 'save_success'
  | 'saved_list'
  | 'sign_in'
  | 'share'
  | 'info';

export interface InfoModalContent {
  title: string;
  subtitle: string;
  body: string;
}
