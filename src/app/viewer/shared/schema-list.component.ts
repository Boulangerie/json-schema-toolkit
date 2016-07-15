import { Component, Input } from '@angular/core'
import { SchemaItemComponent } from "./schema-item.component"
import { V3Parser, ISchema } from "../../shared/schema/parsers/v3.parser"
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'

@Component({
  moduleId: module.id,
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html',
  directives: [SchemaItemComponent, MD_LIST_DIRECTIVES],
})
export class SchemaListComponent {
  @Input() schemas: Array<ISchema>

  public constructor() {

  }
}
