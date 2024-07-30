import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
  response,
} from '@loopback/rest';
import {IssueIdMasterView} from '../models';
import {IssueIdMasterViewRepository} from '../repositories';

export class MasterIdViewController {
  constructor(
    @repository(IssueIdMasterViewRepository)
    public issueIdMasterViewRepository : IssueIdMasterViewRepository,
  ) {}

  @get('/idcards/search/count')
  @response(200, {
    description: 'IssueIdMasterView model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(IssueIdMasterView) where?: Where<IssueIdMasterView>,
  ): Promise<Count> {
    return this.issueIdMasterViewRepository.count(where);
  }

  @get('/idcards/search')
  @response(200, {
    description: 'Array of IssueIdMasterView model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(IssueIdMasterView, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(IssueIdMasterView) filter?: Filter<IssueIdMasterView>,
  ): Promise<IssueIdMasterView[]> {
    return this.issueIdMasterViewRepository.find(filter);
  }

  @get('/idcards/search/{id}')
  @response(200, {
    description: 'IssueIdMasterView model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(IssueIdMasterView, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(IssueIdMasterView, {exclude: 'where'}) filter?: FilterExcludingWhere<IssueIdMasterView>
  ): Promise<IssueIdMasterView> {
    return this.issueIdMasterViewRepository.findById(id, filter);
  }
}
