import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.scss']
})
export class AllTopicsComponent implements OnInit {

  constructor() { }

  public menu = false;
  ngOnInit(): void {
  }
public openMenu() {
this.menu = !this.menu;
console.log(this.menu)
}
}
