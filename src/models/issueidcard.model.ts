import {Entity, model, property} from '@loopback/repository';

//* Data
export interface IssueIdCardData {
  'master-id': string;
  'user-name': string;
  'id-number': string;
  'id-title': string;
  'org-name': string;
  'org-address': string;
  'org-logo': string;
  'user-photo': string;
  'qr-code': string;
  'id-emergency-contact': string;
  'contact-num': string;
  'id-blood-group': string;
  'id-dob': string;
  'id-issue-date': string;
  'id-expiry-date': string;
  'id-policy': string;
  'url': string;
}


@model()
export class Issueidcard extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'object',
    required: true,
    jsonSchema: {
      type: 'object',
      properties: {
        'master-id': {type: 'string'},
        'user-name': {type: 'string'},
        'id-number': {type: 'string'},
        'id-title': {type: 'string'},
        'org-name': {type: 'string'},
        'org-address': {type: 'string'},
        'org-logo': {type: 'string'},
        'user-photo': {type: 'string'},
        'qr-code': {type: 'string'},
        'id-emergency-contact': {type: 'string'},
        'contact-num': {type: 'string'},
        'id-blood-group': {type: 'string'},
        'id-dob': {type: 'string'},
        'id-issue-date': {type: 'string'},
        'id-expiry-date': {type: 'string'},
        'id-policy': {type: 'string'},
        'url': {type: 'string'},
      },

    },
  })
  data: IssueIdCardData;

  

  constructor(data?: Partial<Issueidcard>) {
    super(data);
  }
}

export interface IssueidcardRelations {
  // describe navigational properties here
}

export type IssueidcardWithRelations = Issueidcard & IssueidcardRelations;
