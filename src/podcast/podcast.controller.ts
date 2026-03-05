import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PodcastService } from './podcast.service';

@Controller('api/podcast')
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Post('script')
  async generateScript(@Body() body: any) {
    return this.podcastService.generateScript(body);
  }

  @Post('show-notes')
  async generateShowNotes(@Body() body: any) {
    return this.podcastService.generateShowNotes(body);
  }

  @Post('clips')
  async generateClips(@Body() body: any) {
    return this.podcastService.generateClips(body);
  }

  @Get('job/:id')
  async getJobStatus(@Param('id') id: string) {
    return this.podcastService.getJobStatus(id);
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}