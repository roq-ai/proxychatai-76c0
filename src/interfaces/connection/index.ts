import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ConnectionInterface {
  id?: string;
  user_id1: string;
  user_id2: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_connection_user_id1Touser?: UserInterface;
  user_connection_user_id2Touser?: UserInterface;
  _count?: {};
}

export interface ConnectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id1?: string;
  user_id2?: string;
  status?: string;
}
