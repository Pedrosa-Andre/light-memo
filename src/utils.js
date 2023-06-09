import { database } from "./firebase";
import { get, child, ref } from "firebase/database";

export function createElement(type, props = {}, children = []) {
  const element = document.createElement(type);

  // props: {textContent: "Hello world!", id: "header1", "data-productId": 123, ...}
  Object.entries(props).forEach(([key, value]) => {
    if(~key.indexOf('-')) {
      element.setAttribute(key, value); // data attributes
    } else {
      element[key] = value;
    }
  });

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

// Remove all event listeners by replacing the element with its clone.
export function clearEventListeners(element) {
  var old_element = element;
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
}

// Creates an user key that is not on the database.
export async function generateUserKey() {

  let allUserKeys;
  await get(child(ref(database), 'users')).then((snapshot) => {
    if (snapshot.exists()) {
      allUserKeys = Object.entries(snapshot.val()).map(x => x[0]);
    } else {
      console.log("No user keys available");
      return;
    }
  }).catch((error) => {
    console.error(error);
    return;
  });
  console.log(allUserKeys);

  let crypto = require("crypto");
  let key = 'IDaaa';

  while (allUserKeys.includes(key)) {
    console.log('RUN AGAIN: ' + key);
    key = crypto.randomBytes(5).toString('hex');
  }
  console.log('BRAND NEW KEY: ' + key);

  return key;
}

export function setUserKey(userKey) {
  localStorage.setItem("userKey", userKey);
}

export function getUserKey() {
  return localStorage.getItem("userKey");
}

export function copyRemindersToSession(data) {
  let dataJSON = JSON.stringify(data);
  localStorage.setItem("userData", dataJSON);
}

export function getRemindersFromSession() {
  let dataJSON = localStorage.getItem("userData");
  return JSON.parse(dataJSON);
}