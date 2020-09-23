import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { DogsService } from '../dogs/dogs.service';

@Injectable()
export class CatsService {
  private dogsService!: DogsService;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('moduleRef inside onModuleInit', this.moduleRef);
    this.dogsService = this.moduleRef.get(DogsService, { strict: false });
  }

  getDogs() {
    console.log('dog service inside cats:', this.dogsService);
    return this.dogsService.getDogs();
  }

  getCats() {
    return ['Cat 1'];
  }
}
