import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { getUserKey } from "./utils";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ88WYZC7KIGFsveN6_20o-gt_3Wqiq_g",
  authDomain: "light-memo-388f4.firebaseapp.com",
  projectId: "light-memo-388f4",
  storageBucket: "light-memo-388f4.appspot.com",
  messagingSenderId: "923598056203",
  appId: "1:923598056203:web:da466dcd28af81693d500e",
  measurementId: "G-82PCPDVW8K",
  databaseURL: "https://light-memo-388f4-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

// DEBUG
function writeUserData(userId) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    reminders: {
      
    }
  });
}

// DEBUG keep
const starCountRef = ref(database, 'users/' + getUserKey());
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log('Changes on currentUser data:')
  console.log(data);
});

// DEBUG
const starCountRef2 = ref(database);
onValue(starCountRef2, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

export function createReminder(userKey, title, message, time) {
  set(ref(database, 'users/' + userKey + '/reminders/' + title), {
    remTitle: title,
    remMessage: message,
    remTime: time,
  }).then(
    console.log('SUCCESS at createReminder()')
  ).catch((error) => {
    console.log('FAILURE at createReminder(): ' + error.message);
  });
}