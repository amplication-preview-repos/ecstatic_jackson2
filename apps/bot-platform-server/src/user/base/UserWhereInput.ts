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
import { AppointmentListRelationFilter } from "../../appointment/base/AppointmentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BotListRelationFilter } from "../../bot/base/BotListRelationFilter";
import { CrmDataListRelationFilter } from "../../crmData/base/CrmDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageSettingListRelationFilter } from "../../languageSetting/base/LanguageSettingListRelationFilter";
import { SubscriptionListRelationFilter } from "../../subscription/base/SubscriptionListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AppointmentListRelationFilter)
  @IsOptional()
  @Field(() => AppointmentListRelationFilter, {
    nullable: true,
  })
  appointments?: AppointmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BotListRelationFilter)
  @IsOptional()
  @Field(() => BotListRelationFilter, {
    nullable: true,
  })
  bots?: BotListRelationFilter;

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
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

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
    type: () => LanguageSettingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LanguageSettingListRelationFilter)
  @IsOptional()
  @Field(() => LanguageSettingListRelationFilter, {
    nullable: true,
  })
  languageSettings?: LanguageSettingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };