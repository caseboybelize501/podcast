import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bullmq';
import { ScriptWorker } from '../workers/scriptWorker';
import { ShowNotesWorker } from '../workers/showNotesWorker';

@Injectable()
export class PodcastService {
  constructor(
    private readonly scriptWorker: ScriptWorker,
    private readonly showNotesWorker: ShowNotesWorker,
  ) {}

  async generateScript({ topic, duration, style }) {
    const job = await this.scriptWorker.addJob({
      topic,
      duration,
      style
    });
    return { jobId: job.id };
  }

  async generateShowNotes({ transcript }) {
    const job = await this.showNotesWorker.addJob({
      transcript
    });
    return { jobId: job.id };
  }

  async generateClips({ transcript }) {
    // Implementation for clips generation
    throw new Error('Not implemented');
  }

  async getJobStatus(jobId: string) {
    const job = await this.scriptWorker.getJob(jobId);
    if (!job) return { status: 'not_found' };
    
    const progress = await job.progress();
    const data = await job.finished();
    
    return {
      status: job.finishedAt ? 'completed' : job.failedAt ? 'failed' : 'running',
      progress,
      data
    };
  }
}