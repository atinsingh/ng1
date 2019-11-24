import { Component } from '@angular/core';
import { IQuote } from './models/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular1';

  quotes : IQuote [] = [{
    description : 'The thermometer of success is merely the jealousy of the malcontents.',
    author: 'John Doe',
    show : true,
    id: Math.floor(Math.random()*1000)
  },
  {
    description : 'Learn Java & Angular Together for fun.',
      author: 'John Doe',
      show : true,
      id: Math.floor(Math.random()*1000)
  },
  {
    description : 'Today is myth and tomorrow is brigth.',
    author: 'John Doe',
    show : true,
    id: Math.floor(Math.random()*1000)
  }
]

}
