import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class V3Parser {

  public constructor() {

  }

  public parse(rawSchemas: string): Array<IParsedSchema> {
    try {
      return JSON.parse(rawSchemas)
    } catch (err) {
      return []
    }
  }

}

export interface IParsedSchema {
  // TODO
}
