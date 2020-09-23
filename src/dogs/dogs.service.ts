import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { CatsService } from '../cats/cats.service';

@Injectable()
export class DogsService {
  private catsService!: CatsService;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.catsService = this.moduleRef.get(CatsService, { strict: false });
  }

  getCats() {
    this.catsService.getCats();
  }

  getDogs() {
    return ['Dog 1'];
  }
}
