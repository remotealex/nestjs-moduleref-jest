import { Global, Module } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Global()
@Module({
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule {}
