import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { SchemaItemComponent } from "./schema-item.component"
import { ISchema } from "../../shared/schema/parsers/v3.parser"
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'

@Component({
  moduleId: module.id,
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html',
  directives: [SchemaItemComponent, MD_LIST_DIRECTIVES],
})
export class SchemaListComponent implements OnChanges {
  @Input() schemas: Array<ISchema>

  searchText: string
  schemasList: Object[]

  public constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.schemasList = changes['schemas'].currentValue.slice(0);
  }

  public filterSchemas(){
    this.schemasList = this.schemas.filter((item) =>{
      return item.title.includes(this.searchText);
    });
  }
}
