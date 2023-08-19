const mapping: Record<string, string> = {
  companies: 'company',
  connections: 'connection',
  contents: 'content',
  profiles: 'profile',
  recommendations: 'recommendation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
