// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyBDQqev-dBS1iou73KEeGdFAiofeJkIsOM',
  authDomain: 'cubex-phone-book.firebaseapp.com',
  databaseURL: 'https://cubex-phone-book.firebaseio.com',
  projectId: 'cubex-phone-book',
  storageBucket: 'cubex-phone-book.appspot.com',
  messagingSenderId: '756332385382'
};

firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
