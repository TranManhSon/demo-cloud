import { Injectable } from '@nestjs/common';
import { Upload } from '@aws-sdk/lib-storage';
import { S3 } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AwsService {
  constructor() {}

  async fileUpload(file) {
    const config = {
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    };

    const param = {
      Body: file.buffer,
      Key: file.originalname,
      ACL: 'public-read',
      Bucket: process.env.S3_BUCKET,
      ContentType: 'image/jpeg',
    };

    try {
      return await new Upload({
        client: new S3(config),
        params: param,
      })
        .done()
        .then((data) => {
          console.log(data);
          const url = `https://${param.Bucket}.s3.amazonaws.com/${param.Key}`;
          return url;
        });
    } catch (error) {
      console.log(error);
    }
  }
}
