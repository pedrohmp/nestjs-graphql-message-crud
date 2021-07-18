import { Field, InputType } from '@nestjs/graphql';
import UserInput from './user.input';

// @InputType()
// class MessageUserConnectInput {
//   @Field()
//   readonly id: number;
// }

// //criar a mensagem e o usuario
// @InputType()
// class MessageUserInput {
//   @Field({ nullable: true })
//   readonly connect: MessageUserConnectInput;

//   @Field({ nullable: true })
//   readonly create: UserInput;
// }

//apenas a mensagem
@InputType()
export default class MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly userId: number;
}

@InputType()
export class DeleteMessageInput {
  @Field()
  readonly id: number;

  @Field()
  readonly userId: number;
}
