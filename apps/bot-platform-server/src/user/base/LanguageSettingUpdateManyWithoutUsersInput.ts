/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LanguageSettingWhereUniqueInput } from "../../languageSetting/base/LanguageSettingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LanguageSettingUpdateManyWithoutUsersInput {
  @Field(() => [LanguageSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LanguageSettingWhereUniqueInput],
  })
  connect?: Array<LanguageSettingWhereUniqueInput>;

  @Field(() => [LanguageSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LanguageSettingWhereUniqueInput],
  })
  disconnect?: Array<LanguageSettingWhereUniqueInput>;

  @Field(() => [LanguageSettingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LanguageSettingWhereUniqueInput],
  })
  set?: Array<LanguageSettingWhereUniqueInput>;
}

export { LanguageSettingUpdateManyWithoutUsersInput as LanguageSettingUpdateManyWithoutUsersInput };