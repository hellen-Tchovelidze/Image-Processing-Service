import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';

import { EmailSenderModule } from './email-sender/email-sender.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MY_MONGO_URL!),
    MailerModule.forRoot({
      transport: {
        host: process.env.MY_EMAIL_HOST,
        port: 465,
        auth: {
          user: process.env.MY_EMAIL_USER,
          pass: process.env.MY_EMAIL_PASS,
        },
      },
    }),
    UsersModule,

    AuthModule,

    EmailSenderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
