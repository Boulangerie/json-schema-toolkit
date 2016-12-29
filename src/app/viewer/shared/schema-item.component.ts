import { Component, Input } from '@angular/core'
import { ISchema } from "../../shared/schema/shared/interfaces";

@Component({
  selector: 'app-schema-item',
  templateUrl: './schema-item.component.html'
})
export class SchemaItemComponent {
  @Input() schema:ISchema

  public isExpanded:boolean


  public constructor() {
    this.isExpanded = false
  }

  public toggleExpand():void {
    this.isExpanded = !this.isExpanded
  }
}
