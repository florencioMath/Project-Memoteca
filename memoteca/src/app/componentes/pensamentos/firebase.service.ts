import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: 'AIzaSyA-5yHYJCrPU9zV_zjmdGyh9N4doh8g7As',
    authDomain: 'project-memoteca.firebaseapp.com',
    projectId: 'project-memoteca',
    storageBucket: 'project-memoteca.appspot.com',
    messagingSenderId: '1009321567022',
    appId: '1:1009321567022:web:456cedb4ab85e54e3650bf',
    measurementId: 'G-5J18H8TV15',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  constructor() {}
}
