import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OnboardingModule } from './onboarding/onboarding.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }), HealthModule, ProductsModule, AuthModule, OnboardingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
