import { OverlayService } from './../../service/overlay.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(
    public router: Router ,
    public $overlay: OverlayService,
  ) { }

  ngOnInit(): void {
  }
}
