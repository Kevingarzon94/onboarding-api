export interface OnboardingRequest {
    id: string;
    name: string;
    document: string;
    email: string;
    initialAmount: number;
    status: string;
    createdAt: Date;
}