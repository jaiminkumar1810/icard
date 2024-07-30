import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Issueidcard, IssueidcardRelations} from '../models';

export class IssueidcardRepository extends DefaultCrudRepository<
  Issueidcard,
  typeof Issueidcard.prototype.id,
  IssueidcardRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Issueidcard, dataSource);
  }
}
