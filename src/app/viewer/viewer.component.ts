import { Component } from '@angular/core'
import { ISchema } from "../shared/schema/shared/interfaces";
import { V3Parser } from "../shared/schema/parsers/v3.parser";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html'
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
