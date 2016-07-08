import {Component} from "@angular/core";
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {ViewerComponent} from "./viewer/viewer.component";
import {InputSchemaComponent} from "./viewer/shared/input-schema.component";
import {SchemaListComponent} from "./viewer/shared/schema-list.component";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ViewerComponent, InputSchemaComponent, SchemaListComponent, MD_TOOLBAR_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class AppComponent {
  title = 'Json Schema toolkit'
  color = '#05b2dc'
}
