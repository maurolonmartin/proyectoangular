import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  //@ViewChild('textos') textos;

  constructor() {
    this.captions = true;
    this.autor = "";
   }

  ngOnInit() {
    var opcion_clasica = document.querySelector('#texto').innerHTML;
    //alert(this.textos.nativeElement.textContent);
    }

  cargarSlider(){
    this.anchuraToSlider = null;
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event){
    this.autor = event;
  }

}
