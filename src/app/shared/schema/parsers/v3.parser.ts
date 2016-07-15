import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class V3Parser {

  public constructor() {

  }

  public parse(rawSchemas: string): Array<ISchema> {
    let schemas: Array<any>
    try {
      schemas = JSON.parse(rawSchemas)
    } catch (err) {
      schemas = []
    }

    return schemas.map((rawSchema: any) => {
      return new Schema(rawSchema)
    })
  }

}

export interface ISchema {
  title: string
  url: string
  properties: Array<IProperty>
  links: Array<ILink>
}

class Schema implements ISchema {

  public title: string
  public url: string
  public properties: Array<IProperty>
  public links: Array<ILink>

  public constructor(rawSchema: any) {
    this.title = rawSchema.title
    this.url = rawSchema.pathStart
    this.properties = this.getProperties(rawSchema.properties)
    this.links = this.getLinks(rawSchema.links)
  }

  private getProperties(rawProperties: any): Array<IProperty> {
    if (rawProperties === undefined || rawProperties === null || Object.keys(rawProperties).length === 0) {
      return []
    }
    return Object.keys(rawProperties).map((rawPropertyName: string) => {
      return new Property(rawPropertyName, rawProperties[rawPropertyName])
    })
  }

  private getLinks(rawLinks: Array<any>): Array<ILink> {
    if (rawLinks === undefined || rawLinks === null || rawLinks.length === 0) {
      return []
    }
    return rawLinks.map((rawLink: any) => {
      return new Link(rawLink)
    })
  }

}

export interface IProperty {
  name: string
  type: string
  required: boolean
  ref?: ISchema
}

class Property implements IProperty {

  public name: string
  public type: string
  public required: boolean
  public ref: ISchema

  public constructor(name: string, rawProperty: any) {
    this.name = name
    this.type = rawProperty.type
    this.required = rawProperty.required || false
    // this.ref = rawProperty.ref
  }
}

export interface ILink {
  name: string
  url: string
  method: string
  ref?: ISchema
  type?: string
}

class Link implements ILink {

  public name: string
  public url: string
  public method: string
  public ref: ISchema
  public type: string

  public constructor(rawLink: any) {
    this.name = rawLink.rel
    this.url = rawLink.href
    this.method = rawLink.method
    if (rawLink.targetSchema !== undefined) {
      this.ref = rawLink.targetSchema.$ref
      this.type = rawLink.targetSchema.type
    }
  }
}
