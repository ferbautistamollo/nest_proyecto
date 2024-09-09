import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePersonDto {
  @IsString()
  @IsOptional()
  @IsUUID()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;
  @IsString()
  @IsOptional()
  readonly last_name?: string;
}
