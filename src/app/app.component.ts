import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzaoLFqsUrIWSqMvLJxEsN95C5aB9degY",
      authDomain: "fudapp-2d8fc.firebaseapp.com"
    });
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
