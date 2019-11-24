import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from '../models/quote.model';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.sass']
})
export class NameDetailComponent implements OnInit {

  @Input() quote : IQuote

  

  constructor() { }

  ngOnInit() {
  }

}
