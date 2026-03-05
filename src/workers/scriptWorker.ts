import { Worker, Job } from 'bullmq';
import { LlamaService } from '../llama/llama.service';

export class ScriptWorker {
  private readonly worker: Worker;

  constructor(private readonly llamaService: LlamaService) {
    this.worker = new Worker('script-generation', async (job: Job) => {
      const { topic, duration, style } = job.data;
      
      const prompt = `Write a ${duration}-minute podcast episode script on: ${topic}.
Host style: ${style}. Audience: general listeners.
Return JSON: { title, intro: string, segments: [{title,script,duration_min}], interview_questions: [string], ad_read: string, outro: string }`;
      
      const result = await this.llamaService.generate(prompt);
      return result;
    });
  }

  async addJob(data: any) {
    return this.worker.add('script-generation', data);
  }

  async getJob(jobId: string) {
    return this.worker.getJob(jobId);
  }
}