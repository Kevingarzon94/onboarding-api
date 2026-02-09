import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthService {
    async checkHealth(): Promise<void> {
        // Implementar otros checks para demas servicios
        return;
    }
}