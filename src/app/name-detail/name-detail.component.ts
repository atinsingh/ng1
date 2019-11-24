import { Component, OnInit } from '@angular/core';
import { IQuote } from '../models/quote.model';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.sass']
})
export class NameDetailComponent implements OnInit {

  quotes : IQuote [] = [{
    description : 'The thermometer of success is merely the jealousy of the malcontents.',
    author: 'John Doe',
    show : false,
    id: Math.floor(Math.random()*1000)
  },
  {
    description : 'Learn Java & Angular Together for fun.',
      author: 'John Doe',
      show : false,
      id: Math.floor(Math.random()*1000)
  },
  {
    description : 'Today is myth and tomorrow is brigth.',
    author: 'John Doe',
    show : true,
    id: Math.floor(Math.random()*1000)
  }
]

  trackbyId(index,quote): number {
    console.log(quote.id)
    return quote.id;
  }

  constructor() { }

  ngOnInit() {
  }

}
