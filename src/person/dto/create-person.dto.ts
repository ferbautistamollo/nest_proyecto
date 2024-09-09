import { IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly last_name: string;
}
