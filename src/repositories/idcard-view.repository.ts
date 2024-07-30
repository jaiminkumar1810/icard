import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {IdcardView, IdcardViewRelations} from '../models';

export class IdcardViewRepository extends DefaultCrudRepository<
  IdcardView,
  typeof IdcardView.prototype.id,
  IdcardViewRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(IdcardView, dataSource);
  }
}
