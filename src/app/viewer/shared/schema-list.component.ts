import { Component, Input } from '@angular/core'
import { SchemaComponent } from "./schema.component"
import { V3Parser, IParsedSchema } from "../../shared/schema/parsers/v3.parser"
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'

@Component({
  moduleId: module.id,
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html',
  directives: [SchemaComponent, MD_LIST_DIRECTIVES],
})
export class SchemaListComponent {
  @Input() schemas: Array<IParsedSchema>

  public constructor() {

  }
}
