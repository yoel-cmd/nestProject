import { IsString, IsNotEmpty } from 'class-validator'

export class CreateTaskDto {

    @IsNotEmpty()
    @IsString()
    Description: string

}
