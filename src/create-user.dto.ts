import { UserType } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateUserDto {
    @IsEnum(UserType, {
        message: `Invalid value for 'type` + 
        `Acceptable values are: ${Object.values(UserType)}`
    })
    type: UserType;
}