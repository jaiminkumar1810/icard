import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Viewidcard} from '../models';
import {ViewidcardRepository} from '../repositories';

export class ViewidcardController {
  constructor(
    @repository(ViewidcardRepository)
    public viewidcardRepository : ViewidcardRepository,
  ) {}


  @get('/idcards/search/count')
  @response(200, {
    description: 'Viewidcard model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Viewidcard) where?: Where<Viewidcard>,
  ): Promise<Count> {
    return this.viewidcardRepository.count(where);
  }

  @get('/idcards/search')
  @response(200, {
    description: 'Array of Viewidcard model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Viewidcard, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Viewidcard) filter?: Filter<Viewidcard>,
  ): Promise<Viewidcard[]> {
    return this.viewidcardRepository.find(filter);
  }


  @get('/idcards/search/{id}')
  @response(200, {
    description: 'Viewidcard model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Viewidcard, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Viewidcard, {exclude: 'where'}) filter?: FilterExcludingWhere<Viewidcard>
  ): Promise<Viewidcard> {
    return this.viewidcardRepository.findById(id, filter);
  }
}
