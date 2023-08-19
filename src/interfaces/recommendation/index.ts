import { ContentInterface } from 'interfaces/content';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RecommendationInterface {
  id?: string;
  content_type: string;
  content_id: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  content?: ContentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RecommendationGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_type?: string;
  content_id?: string;
  user_id?: string;
}
