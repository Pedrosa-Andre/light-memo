// import { createElement } from "./utils";
// import { auth } from "./firebase";
// import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";

// function Login() {

//   const h1 = createElement('h1', {textContent: 'Log In'})

//   const emailLabel = createElement('label', {for: 'userEmail', textContent: 'Email'});
//   const emailInput = createElement('input', {type: 'email', name: 'userEmail', id: 'userEmail', required: 'true'});
//   const passLabel = createElement('label', {for: 'userPass', textContent: 'Password'});
//   const passInput = createElement('input', {type: 'password', name: 'userPass', id: 'userPass', required: 'true'});
//   const signInBtn = createElement('button', {type: 'button', textContent: 'Sign In', id: 'signInBtn'});
//   const messageSpan = createElement('span', {id: 'messageSpan'});
//   const registerLink = createElement('a', {href: '/#/register', textContent: 'Not a member? Register here.'});

//   const signInForm = createElement('form', {}, [emailLabel, emailInput, passLabel, passInput, messageSpan, signInBtn, registerLink]);
//   const innerDiv = createElement('div', {className: 'inner-container'}, [signInForm]);

//   const mainDiv = createElement('div', {className: 'main-div'}, [h1, innerDiv]);

//   const loginEmailPassword = async () => {
//     const emailInput = userEmail.value;
//     const passInput = userPass.value;

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, emailInput, passInput);
//       window.location.href = '/#/home';
//       console.log(userCredential.user);
//     }
//     catch (error) {
//       console.log(error);
//       if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//         messageSpan.innerHTML = 'Password invalid';
//         // TODO: add "user not registered" msg.
//       } else {
//         messageSpan.innerHTML = `Error: ${error.message}`;
//       }
//     }

//   }

//   signInBtn.addEventListener("click", loginEmailPassword);

//   return mainDiv;
// }

// export default Login;