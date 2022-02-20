import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsString } from 'class-validator';
import { CreatePlaceDto } from './craete-place.dto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {
  @IsDefined()
  @IsString()
  id: string;
}
