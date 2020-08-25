import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice8';
  display=true
  error=true
  msg="you have made a mistake"
  books=[
    {id:1,name:'app.net',price:'25'},
    {id:2,name:'app.net',price:'25'},
    {id:3,name:'app.et',price:'25'},
    {id:4,name:'app.t',price:'25'},
  ];
  obj={
    data:"hiiiii"
  }
}
