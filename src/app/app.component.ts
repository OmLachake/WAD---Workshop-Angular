import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  todos=[
      {title:'1',desc:'one'},
      {title:'2',desc:'one'},
      {title:'3',desc:'one'},
      {title:'4',desc:'one'},
      {title:'5',desc:'one'},
  ]
}
