import axios from 'axios';
import queryString from 'query-string';
import { RecommendationInterface, RecommendationGetQueryInterface } from 'interfaces/recommendation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRecommendations = async (
  query?: RecommendationGetQueryInterface,
): Promise<PaginatedInterface<RecommendationInterface>> => {
  const response = await axios.get('/api/recommendations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRecommendation = async (recommendation: RecommendationInterface) => {
  const response = await axios.post('/api/recommendations', recommendation);
  return response.data;
};

export const updateRecommendationById = async (id: string, recommendation: RecommendationInterface) => {
  const response = await axios.put(`/api/recommendations/${id}`, recommendation);
  return response.data;
};

export const getRecommendationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/recommendations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRecommendationById = async (id: string) => {
  const response = await axios.delete(`/api/recommendations/${id}`);
  return response.data;
};
