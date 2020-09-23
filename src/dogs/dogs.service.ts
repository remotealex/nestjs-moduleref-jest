import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { CatsController } from '../cats/cats.controller';

@Injectable()
export class DogsService {
  private catsController!: CatsController;

  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.catsController = this.moduleRef.get(CatsController, { strict: false });
  }

  getCats() {
    this.catsController.getCats();
  }

  getDogs() {
    return ['Dog 1'];
  }
}
