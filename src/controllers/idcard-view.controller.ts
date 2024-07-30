import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  response,
} from '@loopback/rest';
import {IdcardView} from '../models';
import {IdcardViewRepository} from '../repositories';

export class IdcardViewController {
  constructor(
    @repository(IdcardViewRepository)
    public idcardViewRepository: IdcardViewRepository,
  ) {}

  @get('/idcards/search/count')
  @response(200, {
    description: 'IdcardView model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(IdcardView) where?: Where<IdcardView>,
  ): Promise<Count> {
    console.log('Count where clause:', where);
    return this.idcardViewRepository.count(where);
  }

  @get('/idcards/search')
  @response(200, {
    description: 'Array of IdcardView model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(IdcardView, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(IdcardView) filter?: Filter<IdcardView>,
  ): Promise<IdcardView[]> {
    console.log('Find filter:', filter);
    return this.idcardViewRepository.find(filter);
  }

  @get('/idcards/search/{id}')
  @response(200, {
    description: 'IdcardView model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(IdcardView, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(IdcardView, {exclude: 'where'}) filter?: FilterExcludingWhere<IdcardView>,
  ): Promise<IdcardView> {
    return this.idcardViewRepository.findById(id, filter);
  }
}
