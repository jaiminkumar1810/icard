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
import {Issueidcard} from '../models';
import {IssueidcardRepository} from '../repositories';

export class IssueidcardController {
  constructor(
    @repository(IssueidcardRepository)
    public issueidcardRepository : IssueidcardRepository,
  ) {}

  @post('/issueidcards')
  @response(200, {
    description: 'Issueidcard model instance',
    content: {'application/json': {schema: getModelSchemaRef(Issueidcard)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Issueidcard, {
            title: 'NewIssueidcard',
            exclude: ['id'],
          }),
        },
      },
    })
    issueidcard: Omit<Issueidcard, 'id'>,
  ): Promise<Issueidcard> {
    return this.issueidcardRepository.create(issueidcard);
  }

  @get('/issueidcards/count')
  @response(200, {
    description: 'Issueidcard model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Issueidcard) where?: Where<Issueidcard>,
  ): Promise<Count> {
    return this.issueidcardRepository.count(where);
  }

  @get('/issueidcards')
  @response(200, {
    description: 'Array of Issueidcard model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Issueidcard, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Issueidcard) filter?: Filter<Issueidcard>,
  ): Promise<Issueidcard[]> {
    return this.issueidcardRepository.find(filter);
  }

  @patch('/issueidcards')
  @response(200, {
    description: 'Issueidcard PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Issueidcard, {partial: true}),
        },
      },
    })
    issueidcard: Issueidcard,
    @param.where(Issueidcard) where?: Where<Issueidcard>,
  ): Promise<Count> {
    return this.issueidcardRepository.updateAll(issueidcard, where);
  }

  @get('/issueidcards/{id}')
  @response(200, {
    description: 'Issueidcard model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Issueidcard, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Issueidcard, {exclude: 'where'}) filter?: FilterExcludingWhere<Issueidcard>
  ): Promise<Issueidcard> {
    return this.issueidcardRepository.findById(id, filter);
  }

  @patch('/issueidcards/{id}')
  @response(204, {
    description: 'Issueidcard PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Issueidcard, {partial: true}),
        },
      },
    })
    issueidcard: Issueidcard,
  ): Promise<void> {
    await this.issueidcardRepository.updateById(id, issueidcard);
  }

  @put('/issueidcards/{id}')
  @response(204, {
    description: 'Issueidcard PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() issueidcard: Issueidcard,
  ): Promise<void> {
    await this.issueidcardRepository.replaceById(id, issueidcard);
  }

  @del('/issueidcards/{id}')
  @response(204, {
    description: 'Issueidcard DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.issueidcardRepository.deleteById(id);
  }
}
