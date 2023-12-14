
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyBd4P5kBjcrxIQ58FtFfYhET43zxr9z8Gg',
  authDomain: "Admin-Panel-6cff4.firebaseapp.com",
  projectId: "Admin-Panel-6cff4",
  storageBucket: "Admin-Panel-6cff4.appspot.com",
  messagingSenderId: "951266637178",
  appId: "1:951266637178:web:67f8a5109248001dafd2c3",
  measurementId: "G-B5GHDJS13C"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);