import { Component, OnInit } from '@angular/core';
import {InputSchemaComponent} from "./shared/input-schema.component";

@Component({
  moduleId: module.id,
  selector: 'app-viewer',
  templateUrl: 'viewer.component.html',
  styleUrls: ['viewer.component.css'],
  directives: [InputSchemaComponent],
})
export class ViewerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
