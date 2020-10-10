import { Injectable } from '@angular/core';
import { EOverlayType } from '@utilities/enums/overlay.enum';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(

  ) { }

  public overlay: EOverlayType;

  public toggle(type: EOverlayType) {
    this.overlay = type;
  }

  public close() {
    this.overlay = EOverlayType.Close;
  }
}


