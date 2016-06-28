import { Component, Input } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SchemaComponent} from "./schema.component";
import {V3Parser} from "../../shared/schema/parsers/v3.parser";
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html',
  directives: [SchemaComponent, MD_LIST_DIRECTIVES],
  viewProviders: [V3Parser]
})
export class SchemaListComponent {
  @Input() schemas$ : Observable<Object[]>
  private V3Parser : V3Parser

  public constructor(V3Parser: V3Parser) {
    this.V3Parser = V3Parser
    this.schemas$ = this.V3Parser.parsedSchemas$
    this.V3Parser.parsedSchemas$.subscribe(newShit => {
      console.log("Pass here Schema list")
    })


  }
}
