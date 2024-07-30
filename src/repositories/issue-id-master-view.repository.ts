import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {IssueIdMasterView, IssueIdMasterViewRelations} from '../models';

export class IssueIdMasterViewRepository extends DefaultCrudRepository<
  IssueIdMasterView,
  typeof IssueIdMasterView.prototype.id,
  IssueIdMasterViewRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(IssueIdMasterView, dataSource);
  }
}
