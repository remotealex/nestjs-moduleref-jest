import { Global, Module } from '@nestjs/common';
import { CatsService } from './cats.service';

@Global()
@Module({
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
