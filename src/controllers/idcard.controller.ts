import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Idcard} from '../models';
import {IdcardRepository} from '../repositories';

export class IdcardController {
  constructor(
    @repository(IdcardRepository)
    public idcardRepository : IdcardRepository,
  ) {}

  @post('/idcards')
  @response(200, {
    description: 'Idcard model instance',
    content: {'application/json': {schema: getModelSchemaRef(Idcard)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Idcard, {
            title: 'NewIdcard',
            exclude: ['id'],
          }),
        },
      },
    })
    idcard: Omit<Idcard, 'id'>,
  ): Promise<Idcard> {
    return this.idcardRepository.create(idcard);
  }

  @get('/idcards/count')
  @response(200, {
    description: 'Idcard model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Idcard) where?: Where<Idcard>,
  ): Promise<Count> {
    return this.idcardRepository.count(where);
  }

  @get('/idcards')
  @response(200, {
    description: 'Array of Idcard model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Idcard, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Idcard) filter?: Filter<Idcard>,
  ): Promise<Idcard[]> {
    return this.idcardRepository.find(filter);
  }

  @patch('/idcards')
  @response(200, {
    description: 'Idcard PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Idcard, {partial: true}),
        },
      },
    })
    idcard: Idcard,
    @param.where(Idcard) where?: Where<Idcard>,
  ): Promise<Count> {
    return this.idcardRepository.updateAll(idcard, where);
  }

  @get('/idcards/{id}')
  @response(200, {
    description: 'Idcard model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Idcard, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Idcard, {exclude: 'where'}) filter?: FilterExcludingWhere<Idcard>
  ): Promise<Idcard> {
    return this.idcardRepository.findById(id, filter);
  }

  @patch('/idcards/{id}')
  @response(204, {
    description: 'Idcard PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Idcard, {partial: true}),
        },
      },
    })
    idcard: Idcard,
  ): Promise<void> {
    await this.idcardRepository.updateById(id, idcard);
  }

  @put('/idcards/{id}')
  @response(204, {
    description: 'Idcard PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() idcard: Idcard,
  ): Promise<void> {
    await this.idcardRepository.replaceById(id, idcard);
  }

  @del('/idcards/{id}')
  @response(204, {
    description: 'Idcard DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.idcardRepository.deleteById(id);
  }
}
