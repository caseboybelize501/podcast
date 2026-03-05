import { Module } from '@nestjs/common';
import { PodcastController } from './podcast.controller';
import { PodcastService } from './podcast.service';
import { ScriptWorker } from '../workers/scriptWorker';
import { ShowNotesWorker } from '../workers/showNotesWorker';
import { LlamaService } from '../llama/llama.service';

@Module({
  controllers: [PodcastController],
  providers: [
    PodcastService,
    ScriptWorker,
    ShowNotesWorker,
    LlamaService
  ],
  exports: [PodcastService]
})
export class PodcastModule {}