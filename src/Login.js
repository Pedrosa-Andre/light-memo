import { createElement, navTo } from "./utils";

function Login() {

  const h1 = createElement('h1', {textContent: 'Log In'})

  const emailLabel = createElement('label', {for: 'userEmail', textContent: 'Email'});
  const emailInput = createElement('input', {type: 'email', name: 'userEmail', id: 'userEmail', required: 'true'});
  const passLabel = createElement('label', {for: 'userPass', textContent: 'Password'});
  const passInput = createElement('input', {type: 'password', name: 'userPass', id: 'userPass', required: 'true'});
  const signInBtn = createElement('button', {type: 'submit', textContent: 'Sign In'});
  const registerLink = createElement('a', {href: '/register', textContent: 'Not a member? Register here.'});

  const signInForm = createElement('form', {id: 'signInForm'}, [emailLabel, emailInput, passLabel, passInput, signInBtn, registerLink]);
  const innerDiv = createElement('div', {className: 'inner-container'}, [signInForm]);

  const mainDiv = createElement('div', {className: 'main-div'}, [h1, innerDiv]);

  return mainDiv;
}

export default Login;