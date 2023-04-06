import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, onValue, child, remove } from "firebase/database";
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
// function writeUserData(userId) {
//   set(ref(database, 'users/' + userId), {
//   });
// }

// DEBUG
const starCountRef = ref(database, 'users/' + getUserKey());
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log('Changes on currentUser data:')
  console.log(data);
});

// DEBUG
onValue(ref(database), (snapshot) => {
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

export function removeReminder(userKey, reminderKey) {
  debugger
  remove(ref(database, 'users/' + userKey + '/reminders/' + reminderKey), {
  });
}

export async function getUserReminders(userKey) {
  let allUserReminders;
  await get(child(ref(database), 'users/' + userKey + '/reminders')).then((snapshot) => {
    if (snapshot.exists()) {
      allUserReminders = Object.entries(snapshot.val()).sort((a, b) => {
        // Sort reminders by time.
        let timeA = a[1]['remTime'],
            timeB = b[1]['remTime'];
        if (timeA < timeB) return -1;
        if (timeA > timeB) return 1;
        return 0;
      });
    } else {
      console.log("No data available");
      return;
    }
  }).catch((error) => {
    console.error(error);
    return;
  });
  return allUserReminders;
}