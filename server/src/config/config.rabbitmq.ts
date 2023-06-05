import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.interfaces';
import * as dotenv from 'dotenv';


dotenv.config();

export const configRabbitMQ: RabbitMQConfig = {
  exchanges: [
    {
        name: 'ex1',
        type: 'topic',
    }
  ],
  uri: process.env.URL_RABBITMQ,
  connectionInitOptions: {wait:false}
};
