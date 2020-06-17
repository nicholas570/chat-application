import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD-KWEAmeg0J91K1tyOIK-0RtAzAU96asc',
  authDomain: 'chatapp-7238c.firebaseapp.com',
  databaseURL: 'https://chatapp-7238c.firebaseio.com',
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
