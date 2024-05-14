import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  @Input()
  contentList!: any;

  @Input() t:any;

  // constructor(){
  //   console.log("CONTENT : ",this.contentList)
  // }
  
  // list = this.contentList[0].mobiles
  // getData(){
  //     console.log("CONTENT : ",this.contentList[0].heading)
  // }


}
