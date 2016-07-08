import * as _ from 'lodash'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class V3Parser {

  public constructor() {

  }

  public parse(rawSchemas: string): Array<IParsedSchema> {
    if (_.isEmpty(rawSchemas)) {
      return []
    }
    return JSON.parse(rawSchemas)
  }

}

export interface IParsedSchema {
  // TODO
}
