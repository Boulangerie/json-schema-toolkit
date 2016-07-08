import { Component } from "@angular/core"
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'
import { ViewerComponent } from "./viewer/viewer.component"


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ViewerComponent, MD_TOOLBAR_DIRECTIVES]
})
export class AppComponent {
  title = 'Json Schema toolkit'
  color = '#05b2dc'
}
