/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CrmDataListRelationFilter } from "../../crmData/base/CrmDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumBotLanguageModel } from "./EnumBotLanguageModel";
import { SubscriptionListRelationFilter } from "../../subscription/base/SubscriptionListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class BotWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  active?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CrmDataListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CrmDataListRelationFilter)
  @IsOptional()
  @Field(() => CrmDataListRelationFilter, {
    nullable: true,
  })
  crmDataItems?: CrmDataListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  customPrompts?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumBotLanguageModel,
  })
  @IsEnum(EnumBotLanguageModel)
  @IsOptional()
  @Field(() => EnumBotLanguageModel, {
    nullable: true,
  })
  languageModel?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SubscriptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubscriptionListRelationFilter)
  @IsOptional()
  @Field(() => SubscriptionListRelationFilter, {
    nullable: true,
  })
  subscriptions?: SubscriptionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { BotWhereInput as BotWhereInput };