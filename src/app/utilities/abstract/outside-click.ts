import { Injectable } from '@angular/core';


@Injectable()
export abstract class AbstractModal {

    constructor() { }

    public isMenu = false;
    private menu: any;

    private e = this.detectWindowClick.bind(this);
    private detectWindowClick(parms) {
        if (!this.menu.nativeElement.contains(parms.target)) {
            this.isMenu = false;
            document.removeEventListener('click', this.e);
        }
    }

    public openMenu() {
        event.stopPropagation();
        this.isMenu = true;
        if (this.isMenu) {
            document.addEventListener('click', this.e);
        }
    }

    public closeMenu() {
        event.stopPropagation();
        this.isMenu = false;
        if (!this.isMenu) {
          document.removeEventListener('click', this.e);
        }
      }

}