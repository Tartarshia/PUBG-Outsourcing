import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '欢迎来到Titan 世界';
  language : any;
  checked: boolean = true;
  Panel: string = 'func';

  
  constructor( ) {
    
      }

  localization() {
    // English Text not Avaliable
  }

  showFunc(input) {
    this.Panel = input;
  }

  
  ngOnInit() {

    this.language = window.navigator.language.substr(0,2);
    if(this.language == "zh") {
      this.localization();
    }
    
  }
}
