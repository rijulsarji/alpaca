import { IsEmail, IsString, IsUrl } from "class-validator";

export class CreateUserDto {
  @IsString()
  username: string

  @IsEmail()
  email: string

  @IsString()
  displayName: string

  @IsUrl()
  displayImage: string
}