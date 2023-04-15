import { AwsService } from './aws.service';

import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AWSController {
  constructor(private readonly awsService: AwsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.awsService.fileUpload(file);
  }
}
