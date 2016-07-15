import { Component } from '@angular/core'
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'
import { SchemaListComponent } from './shared/schema-list.component'
import { V3Parser, ISchema } from '../shared/schema/parsers/v3.parser'

@Component({
  moduleId: module.id,
  selector: 'app-viewer',
  templateUrl: 'viewer.component.html',
  directives: [SchemaListComponent, MD_CARD_DIRECTIVES],
})
export class ViewerComponent {

  public rawSchema: string
  public schemas: Array<ISchema>

  private V3Parser: V3Parser

  public constructor(V3Parser: V3Parser) {
    this.V3Parser = V3Parser
    this.schemas = []
  }

  public onRawSchemaChange(): void {
    this.schemas = this.V3Parser.parse(this.rawSchema)
  }

}
