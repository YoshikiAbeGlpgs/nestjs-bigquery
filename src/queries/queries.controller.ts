import { Controller, Get } from '@nestjs/common';
import { QueriesService } from './queries.service';

@Controller('queries')
export class QueriesController {
  constructor(private readonly queriesService: QueriesService) {}

  @Get()
  async findAll() {
    return await this.queriesService.findAll();
  }

  @Get('dry')
  async findAllDry() {
    return await this.queriesService.findAllDry();
  }
}
