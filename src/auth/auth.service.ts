import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) { }

    private readonly mockUser = {
        username: 'admin',
        password: 'password123',
        userId: 'user-001',
    };

    private async validateUser(username: string, password: string) {
        if (
            username !== this.mockUser.username ||
            password !== this.mockUser.password
        ) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return {
            id: this.mockUser.userId,
            username: this.mockUser.username,
        };
    }

    async signIn(dto: LoginDto): Promise<AuthResponseDto> {
        const user = await this.validateUser(dto.username, dto.password);

        const payload = {
            sub: user.id,
            username: user.username,
        };

        const accessToken = await this.jwtService.signAsync(payload);

        return {
            access_token: accessToken,
            expires_in: 300,
        };
    }
}
