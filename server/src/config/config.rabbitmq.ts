import { RabbitMQConfig } from './../../node_modules/@golevelup/nestjs-rabbitmq/lib/rabbitmq.interfaces.d';
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
