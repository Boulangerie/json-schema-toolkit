import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class V3Parser {

  public parsedSchemas: any = new BehaviorSubject([])

  public parse(rawSchemas: string): void {
    let schemas = JSON.parse(rawSchemas)
    this.parsedSchemas.next(schemas)
  }

}
