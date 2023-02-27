import { useAppSelector } from '../../store/hooks';

export function ParseJwt() {
  const token = useAppSelector((state) => state.users.token);
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return Number(JSON.parse(window.atob(base64)).id);
  }
  return 1;
}

export interface ApiErrorResponse {
  status: number;
  data: { message: string; errors: { [k: string]: string[] } };
}

export function isApiResponse(error: unknown): error is ApiErrorResponse {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    typeof (error as any).status === 'number'
  );
}
