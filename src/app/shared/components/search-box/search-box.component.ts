import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
@Input()
public placeholder:string='';
@ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

@Output()
public onValue = new EventEmitter<string>();

public searchBox(value:string){
  this.onValue.emit(value)
}
}
