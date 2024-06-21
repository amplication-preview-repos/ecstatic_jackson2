/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LanguageSettingWhereInput } from "./LanguageSettingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LanguageSettingOrderByInput } from "./LanguageSettingOrderByInput";

@ArgsType()
class LanguageSettingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LanguageSettingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LanguageSettingWhereInput, { nullable: true })
  @Type(() => LanguageSettingWhereInput)
  where?: LanguageSettingWhereInput;

  @ApiProperty({
    required: false,
    type: [LanguageSettingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LanguageSettingOrderByInput], { nullable: true })
  @Type(() => LanguageSettingOrderByInput)
  orderBy?: Array<LanguageSettingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LanguageSettingFindManyArgs as LanguageSettingFindManyArgs };