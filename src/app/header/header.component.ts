import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarExpanded') navbarContainer: ElementRef;
  constructor() { }

  
  public showClose: boolean = false;
  public showCloseButton():boolean {
    console.log('showCloseButton Called');
    if(this.navbarContainer && this.navbarContainer.nativeElement.classList.contains('show'))
    {
      alert('has class');
      return true;
    }
    else{
      return false;
    }
  }

  public btnCloseClick() {
    this.showClose = false;
  }

  public toggleBtnCliock() {
    this.showClose = true;
  }

  public routerLinkClicked() {
    this.showClose = false;
  }


  ngOnInit() {
  }

  public onResize(args) {
    this.showClose = false;
    console.log(this.navbarContainer.nativeElement);
    if(this.navbarContainer.nativeElement.classList.contains('show')){
     this.navbarContainer.nativeElement.classList.remove('show');
    }
   }

}
