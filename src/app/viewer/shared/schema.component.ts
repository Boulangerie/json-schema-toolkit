import { Component, Input } from '@angular/core'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'
import { IParsedSchema } from "../../shared/schema/parsers/v3.parser"

@Component({
  moduleId: module.id,
  selector: 'app-schema',
  templateUrl: 'schema.component.html',
  directives: [MD_LIST_DIRECTIVES]
})
export class SchemaComponent {
  @Input() schema: IParsedSchema

  public constructor() {
  }

}
