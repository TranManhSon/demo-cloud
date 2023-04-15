import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';
import * as dotenv from 'dotenv';
import { AWSController } from './aws.controller';
dotenv.config();

@Module({
  providers: [AwsService],
  controllers: [AWSController],
  exports: [AwsService],
})
export class AwsModule {}
