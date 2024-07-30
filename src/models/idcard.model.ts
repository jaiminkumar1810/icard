import {Entity, model, property} from '@loopback/repository';

//* Data
export interface IdCardData {
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
//* Config
export interface IdCardConfig {
  idCardWrapperFrontClass: string;
  idCardBackgroundFrontClass: string;
  idCardContentClass: string;
  orgLogoClass: string;
  userPhotoClass: string;
  userNameClass: string;
  idNumberClass: string;
  idTitleClass: string;
  orgNameClass: string;
  orgAddressClass: string;
  idCardWrapperBackClass: string;
  idCardBackgroundBackClass: string;
  idCardContentBackClass: string;
  qrCodeClass: string;
  idEmergencyContactClass: string;
  contactNumClass: string;
  idBloodGroupClass: string;
  dobClass: string;
  issueDateClass: string;
  expiryDateClass: string;
  policyClass: string;
}

@model()
export class Idcard extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
    required: false,
  })
  name?: string;

  @property({
    type: 'string',
    required: false,
  })
  thumbnail?: string;

  @property({
    type: 'object',
    required: true,
    jsonSchema: {
      type: 'object',
      properties: {
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
      required: [
        'user-name', 'id-number', 'id-title', 'org-name', 'org-address',
        'org-logo', 'user-photo', 'qr-code', 'id-emergency-contact',
        'contact-num', 'id-blood-group', 'id-dob', 'id-issue-date',
        'id-expiry-date', 'id-policy', 'url'
      ],
    },
  })
  data: IdCardData;

  @property({
    type: 'object',
    required: true,
    jsonSchema: {
      type: 'object',
      properties: {
        idCardWrapperFrontClass: {type: 'string'},
        idCardBackgroundFrontClass: {type: 'string'},
        idCardContentClass: {type: 'string'},
        orgLogoClass: {type: 'string'},
        userPhotoClass: {type: 'string'},
        userNameClass: {type: 'string'},
        idNumberClass: {type: 'string'},
        idTitleClass: {type: 'string'},
        orgNameClass: {type: 'string'},
        orgAddressClass: {type: 'string'},
        idCardWrapperBackClass: {type: 'string'},
        idCardBackgroundBackClass: {type: 'string'},
        idCardContentBackClass: {type: 'string'},
        qrCodeClass: {type: 'string'},
        idEmergencyContactClass: {type: 'string'},
        contactNumClass: {type: 'string'},
        idBloodGroupClass: {type: 'string'},
        dobClass: {type: 'string'},
        issueDateClass: {type: 'string'},
        expiryDateClass: {type: 'string'},
        policyClass: {type: 'string'},
      },
      required: [
        'idCardWrapperFrontClass', 'idCardBackgroundFrontClass', 'idCardContentClass',
        'orgLogoClass', 'userPhotoClass', 'userNameClass', 'idNumberClass',
        'idTitleClass', 'orgNameClass', 'orgAddressClass', 'idCardWrapperBackClass',
        'idCardBackgroundBackClass', 'idCardContentBackClass', 'qrCodeClass',
        'idEmergencyContactClass', 'contactNumClass', 'idBloodGroupClass',
        'dobClass', 'issueDateClass', 'expiryDateClass', 'policyClass'
      ],
    },
  })
  config: IdCardConfig;

  constructor(data?: Partial<Idcard>) {
    super(data);
  }
}

export interface IdcardRelations {
  // describe navigational properties here
}

export type IdcardWithRelations = Idcard & IdcardRelations;
