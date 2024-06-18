import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateSelfEvaluationDto } from './create-self-evaluation.dto';
import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateSelfEvaluationDto extends PartialType(CreateSelfEvaluationDto) {
  @ApiProperty({
    description: 'New grade for Delivering Quality (1-5)',
    minimum: 1,
    maximum: 5,
    example: 5
  })
  @IsNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Min(0)
  @Max(5)
  deliveringQualityGrade: number;

  @ApiProperty({
    description: 'New comment on Delivering Quality',
    example: 'As entregas foram feitas de forma bastante prestativa e com qualidade senior.'
  })
  @IsNotEmpty()
  @IsString()
  deliveringQualityComment: string;
}
