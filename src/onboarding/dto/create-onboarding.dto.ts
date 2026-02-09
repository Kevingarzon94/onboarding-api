import { IsEmail, IsNotEmpty, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateOnboardingDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsNotEmpty()
    document: string;

    @IsEmail({}, { message: 'El email no es válido' })
    email: string;

    @IsNumber()
    @Min(0, { message: 'El monto inicial no puede ser negativo' })
    initialAmount: number;
}