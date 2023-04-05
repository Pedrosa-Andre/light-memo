// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "./firebase";
// import { createElement } from "./utils";

// function HomePage() {

//   const h1 = createElement('h1', {textContent: 'Register'})

//   const nameLabel = createElement('label', {for: 'userName', textContent: 'Name'});
//   const nameInput = createElement('input', {type: 'text', name: 'userName', id: 'userName', required: 'true'});
//   const emailLabel = createElement('label', {for: 'userEmail', textContent: 'Email'});
//   const emailInput = createElement('input', {type: 'email', name: 'userEmail', id: 'userEmail', required: 'true'});
//   const passLabel = createElement('label', {for: 'userPass', textContent: 'Password'});
//   const passInput = createElement('input', {type: 'password', name: 'userPass', id: 'userPass', required: 'true'});
//   const registerBtn = createElement('button', {type: 'button', textContent: 'Register', id: 'registerBtn'});
//   const messageSpan = createElement('span', {id: 'messageSpan'});
//   const loginLink = createElement('a', {href: '/#/login', textContent: 'Already a member? Login instead.'});

//   const registerForm = createElement('form', {}, [nameLabel, nameInput, emailLabel, emailInput, passLabel, passInput, messageSpan, registerBtn, loginLink]);
//   const innerDiv = createElement('div', {className: 'inner-container'}, [registerForm]);

//   const mainDiv = createElement('div', {className: 'main-div'}, [h1, innerDiv]);

//   const registerUser = async () => {
//     const nameInput = userName.value;
//     const emailInput = userEmail.value;
//     const passInput = userPass.value;

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, emailInput, passInput);
//       updateProfile(userCredential.user, {
//         displayName: nameInput
//       });
//       window.location.href = '/#/home';
//       console.log(userCredential.user);
//       console.log("InputName: " + nameInput);
//     } catch (error) {
//       console.log(error);
//       // TODO: Update error code and msgs.
//       if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//         messageSpan.innerHTML = 'Password invalid';
//       } else {
//         messageSpan.innerHTML = `Error: ${error.message}`;
//       }
//     }

//   }

//   registerBtn.addEventListener("click", registerUser);

//   return mainDiv;
//   }

// export default HomePage;