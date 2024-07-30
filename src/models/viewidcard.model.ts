import {Entity, model, property} from '@loopback/repository';
import {Issueidcard} from './issueidcard.model';

@model()
export class Viewidcard extends Issueidcard {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;


  constructor(data?: Partial<Viewidcard>) {
    super(data);
  }
}

export interface ViewidcardRelations {
  // describe navigational properties here
}

export type ViewidcardWithRelations = Viewidcard & ViewidcardRelations;
