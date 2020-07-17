import axios from "axios";

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
export const ME_URL = "api/me";

export function login(email, password) {
console.log(email);
console.log(password);

fetch('http://192.168.1.86:9999/api/login', {
            crossDomain: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password,
                }
            ),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email,name,last_name,password) {
  console.log(email);
  console.log(name);
  console.log(last_name);
  console.log(password);
  
  return axios.post("http://192.168.1.86:9999/api/register", { email,name,last_name,password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
