import { RecommendationInterface } from 'interfaces/recommendation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  type: string;
  title: string;
  description?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  recommendation?: RecommendationInterface[];
  user?: UserInterface;
  _count?: {
    recommendation?: number;
  };
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  title?: string;
  description?: string;
  user_id?: string;
}
