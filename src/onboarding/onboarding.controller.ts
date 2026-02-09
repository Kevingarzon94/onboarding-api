import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { CreateOnboardingDto } from './dto/create-onboarding.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createOnboardingDto: CreateOnboardingDto) {
    return this.onboardingService.create(createOnboardingDto);
  }

  @Get()
  findAll() {
    return this.onboardingService.findAll();
  }
}