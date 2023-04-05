import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

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

function writeUserData(userId, name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email
  });
}

writeUserData('IDaaa','andreA','a@a.com');
writeUserData('IDbbb','andreB','a@b.com');
writeUserData('IDbbb','andreC','a@c.com');
writeUserData('IDccc','andreD','a@d.com');

const starCountRef = ref(database, 'users/IDabc');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  // updateStarCount(postElement, data);
});

const starCountRef2 = ref(database);
onValue(starCountRef2, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

writeUserData('IDabc','andre2','a@a.c');