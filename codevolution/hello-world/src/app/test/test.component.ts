import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Anya";
  public url = window.location.href;
  public testProtocol = window.location.protocol;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }
}
