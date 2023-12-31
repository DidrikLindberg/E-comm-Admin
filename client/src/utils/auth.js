import decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  getRole() {
    const profile = this.getProfile();
    return profile ? profile.role : null;
  }

  login(idToken) {
    console.log('Storing token in local storage:', idToken);
    localStorage.setItem('id_token', idToken);
    console.log('Token stored in local storage:', localStorage.getItem('id_token'));
    return <Navigate to="/dashboard" />;
  }

  logout() {
    localStorage.removeItem('id_token');
    return <Navigate to="/login" />;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
