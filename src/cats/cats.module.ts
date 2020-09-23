import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Global()
@Module({
  controllers: [CatsController],
})
export class CatsModule {}
