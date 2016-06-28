import { Component } from '@angular/core';
import {V3Parser} from "../../shared/schema/parsers/v3.parser";

@Component({
  moduleId: module.id,
  selector: 'app-input-schema',
  templateUrl: 'input-schema.component.html'
})
export class InputSchemaComponent {

  public rawSchema: string

  public constructor(public v3Parser: V3Parser) {
  }

  public parseSchemas(){
    this.v3Parser.parse(this.rawSchema)
  }

}
