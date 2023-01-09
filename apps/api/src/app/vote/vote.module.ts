import { Module } from '@nestjs/common';
import { VoteGateway } from './gateways/vote/vote.gateway';

@Module({
  providers: [VoteGateway],
})
export class VoteModule {}
