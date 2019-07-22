import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBnEYDODzceVajVtXhIwsYYlxkYmDK0FAY",
      authDomain: "bookshelves-986c9.firebaseapp.com",
      databaseURL: "https://bookshelves-986c9.firebaseio.com",
      projectId: "bookshelves-986c9",
      storageBucket: "",
      messagingSenderId: "228635018649",
      appId: "1:228635018649:web:7c5e6eed1aefbeb2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
