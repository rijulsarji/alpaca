import { IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateAwardDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  imageURL: string;

  @IsUUID()
  userId: string;
}
