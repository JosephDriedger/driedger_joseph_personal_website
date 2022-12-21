const firebaseConfig = {
  apiKey: "AIzaSyAxHk-TrBJ8E30LegxxAHf3JIKzE8qSavw",
  authDomain: "joseph-driedger-s-website.firebaseapp.com",
  projectId: "joseph-driedger-s-website",
  storageBucket: "joseph-driedger-s-website.appspot.com",
  messagingSenderId: "404865666214",
  appId: "1:404865666214:web:d0a74863051c9a72e63867",
  measurementId: "G-KM7GFFJXC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();