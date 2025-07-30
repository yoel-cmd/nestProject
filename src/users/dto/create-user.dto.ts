import { IsString, IsNotEmpty, IsIn, MinLength, MaxLength } from 'class-validator'

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string

    @IsNotEmpty()
    @IsString()
    @IsIn(['soldier', 'commander'])
    role: string
}
