import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { DogsService } from '../dogs/dogs.service';

@Injectable()
export class CatsService {
  private dogsService!: DogsService;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.dogsService = this.moduleRef.get(DogsService, { strict: false });
  }

  getDogs() {
    this.dogsService.getDogs();
  }

  getCats() {
    return ['Cat 1'];
  }
}
