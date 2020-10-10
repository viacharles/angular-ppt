import { OverlayService } from '../../shared/service/overlay.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EOverlayType } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(
    public router: Router,
    public $overlay: OverlayService,
  ) { }

  get type(): typeof EOverlayType {
    return EOverlayType;
  }

  ngOnInit(): void {
  }
}
