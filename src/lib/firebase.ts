import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAng2KWpai3PAuIsboEGofvDfjj_SXjOnk',
  authDomain: 'tec-net-c22ad.firebaseapp.com',
  projectId: 'tec-net-c22ad',
  storageBucket: 'tec-net-c22ad.appspot.com',
  messagingSenderId: '1098678533572',
  appId: '1:1098678533572:web:adc47d7d690c327ee5f891',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
