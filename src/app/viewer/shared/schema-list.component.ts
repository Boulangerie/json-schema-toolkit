import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ISchema } from "../../shared/schema/shared/interfaces";

@Component({
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html'
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
