import { Component, OnInit } from '@angular/core';
import {SchemaComponent} from "./schema.component";
import {V3Parser} from "../../shared/schema/parsers/v3.parser";
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html',
  directives: [SchemaComponent, MD_LIST_DIRECTIVES],
})
export class SchemaListComponent implements OnInit {
  public schemas : any

  public constructor(public v3Parser: V3Parser) {
  }

  ngOnInit() {
    this.v3Parser.parsedSchemas.subscribe(
      value => { this.schemas = value },
      error => { console.log("Error")},
      ()    => { console.log("Done")}
    )

  }
}
