// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC8meGXCWs1m1r2pGyTcvn_kGOlQTfeoes",
//     authDomain: "react-firebase--auth-cbaaa.firebaseapp.com",
//     projectId: "react-firebase--auth-cbaaa",
//     storageBucket: "react-firebase--auth-cbaaa.appspot.com",
//     messagingSenderId: "194102016886",
//     appId: "1:194102016886:web:50b270aeb0f872aaa41857",
//     measurementId: "G-7EWYRMKSFB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8meGXCWs1m1r2pGyTcvn_kGOlQTfeoes",
    authDomain: "react-firebase--auth-cbaaa.firebaseapp.com",
    projectId: "react-firebase--auth-cbaaa",
    storageBucket: "react-firebase--auth-cbaaa.appspot.com",
    messagingSenderId: "194102016886",
    appId: "1:194102016886:web:50b270aeb0f872aaa41857",
    measurementId: "G-7EWYRMKSFB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;