import * as firebase from 'firebase';

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"></script>
*/
// Your web app's Firebase configuration
const prodConfig = {
  apiKey: 'AIzaSyAMK8drawSHbQlq8g91o1KXyUXAGMkErFY',
  authDomain: 'expense-management-7ad2a.firebaseapp.com',
  databaseURL: 'https://expense-management-7ad2a.firebaseio.com',
  projectId: 'expense-management-7ad2a',
  storageBucket: 'expense-management-7ad2a.appspot.com',
  messagingSenderId: '69914769675',
  appId: '1:69914769675:web:c21a33b3a5336295eb0a0e',
  measurementId: 'G-NNH1GZPXXV',
};

const testConfig = {
  apiKey: 'AIzaSyC1VYVmL2vRJcIhHcpqE_p96rdySahv_ws',
  authDomain: 'expense-manag-test.firebaseapp.com',
  databaseURL: 'https://expense-manag-test.firebaseio.com',
  projectId: 'expense-manag-test',
  storageBucket: 'expense-manag-test.appspot.com',
  messagingSenderId: '424840517098',
  appId: '1:424840517098:web:132af748c34da076ea8e93',
};

const config = process.env.NODE_ENV === 'test' ? testConfig : prodConfig;

// Initialize Firebase
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
