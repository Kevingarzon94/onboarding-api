import { Injectable } from '@nestjs/common';
import { CreateOnboardingDto } from './dto/create-onboarding.dto';
import { v4 as uuidv4 } from 'uuid';
import { OnboardingRequest } from './interfaces/onboarding-request.interface';

@Injectable()
export class OnboardingService {

    private onboardingRequests: OnboardingRequest[] = [];

    create(createOnboardingDto: CreateOnboardingDto) {

        const newRequest: OnboardingRequest = {
            id: uuidv4(),
            ...createOnboardingDto,
            status: 'REQUESTED',
            createdAt: new Date(),
        };

        this.onboardingRequests.push(newRequest);

        return {
            onboardingId: newRequest.id,
            status: newRequest.status,
        };
    }

    findAll() {
        return this.onboardingRequests;
    }
}