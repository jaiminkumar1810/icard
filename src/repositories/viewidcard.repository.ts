import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Viewidcard, ViewidcardRelations} from '../models';

export class ViewidcardRepository extends DefaultCrudRepository<
  Viewidcard,
  typeof Viewidcard.prototype.id,
  ViewidcardRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Viewidcard, dataSource);
  }
}
