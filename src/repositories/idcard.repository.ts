import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Idcard, IdcardRelations} from '../models';

export class IdcardRepository extends DefaultCrudRepository<
  Idcard,
  typeof Idcard.prototype.id,
  IdcardRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Idcard, dataSource);
  }
}
