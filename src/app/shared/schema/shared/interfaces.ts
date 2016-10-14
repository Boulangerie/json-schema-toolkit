export interface ISchema {
  index: number
  title: string
  url: string
  properties: Array<IProperty>
  links: Array<ILink>
}
export interface IProperty {
  name: string
  type: string
  required: boolean
  ref?: ISchema
}
export interface ILink {
  name: string
  url: string
  method: string
  ref?: ISchema
  type?: string
}
