import { useAppSelector } from '../../store/hooks';

export function ParseJwt() {
  const token = useAppSelector((state) => state.users.token);
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    /* dispatch(setUserId(Number(JSON.parse(window.atob(base64)).id))); */
    return Number(JSON.parse(window.atob(base64)).id);
  }
  return 1;
}
