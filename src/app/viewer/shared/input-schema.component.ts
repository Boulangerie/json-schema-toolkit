import { Component } from '@angular/core';
import {V3Parser} from "../../shared/schema/parsers/v3.parser";

@Component({
  moduleId: module.id,
  selector: 'app-input-schema',
  templateUrl: 'input-schema.component.html',
  viewProviders: [V3Parser]
})
export class InputSchemaComponent {

  public rawSchema: string

  private V3Parser: V3Parser

  public constructor(V3Parser: V3Parser) {
    this.V3Parser = V3Parser
  }

  public parseSchemas(){
    this.V3Parser.parse(this.rawSchema)
  }

}
