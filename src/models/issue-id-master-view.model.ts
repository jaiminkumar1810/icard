import {model, property} from '@loopback/repository';
import {Issueidcard} from './issueidcard.model';
import {Idcard} from './idcard.model';

@model({settings: {strict: false}})
export class IssueIdMasterView extends Idcard {
  @property({
    type: 'string',
  })
  extra?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IssueIdMasterView>) {
    super(data);
  }
}

export interface IssueIdMasterViewRelations {
  // describe navigational properties here
}

export type IssueIdMasterViewWithRelations = IssueIdMasterView & IssueIdMasterViewRelations;
