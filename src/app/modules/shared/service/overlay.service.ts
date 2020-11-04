import { Injectable } from '@angular/core';
import { EOverlayType } from '@utilities/enums/overlay.enum';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(

  ) { }

  public overlay: EOverlayType;
  public isLoading = false;

  public toggle(type: EOverlayType) {
    this.overlay = type;
  }

  public close() {
    this.overlay = EOverlayType.Close;
  }

  public startLoading() {
    this.isLoading = true;
  }

  public finishLoading() {
    this.isLoading = false;
  }


}


