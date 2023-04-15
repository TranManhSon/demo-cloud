import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsModule } from './aws/aws.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/config.mysql'
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { configRabbitMQ } from './config/config.rabbitmq';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    RabbitMQModule.forRoot( RabbitMQModule, configRabbitMQ),
    AwsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
