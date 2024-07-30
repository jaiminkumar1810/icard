import {Entity, model, property} from '@loopback/repository';
import {Idcard} from './idcard.model';

@model({settings: {strict: false}})
export class IdcardView extends Idcard {
  @property({
    type: 'string',
  })
  extra?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IdcardView>) {
    super(data);
  }
}

export interface IdcardViewRelations {
  // describe navigational properties here
}

export type IdcardViewWithRelations = IdcardView & IdcardViewRelations;
