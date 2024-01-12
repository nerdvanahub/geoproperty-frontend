import { jwtDecode } from 'jwt-decode';

function decodeJwt<T>(token: string): T {
  return jwtDecode<T>(token);
}

export default decodeJwt;
