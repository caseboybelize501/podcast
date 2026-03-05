import { Worker, Job } from 'bullmq';
import { LlamaService } from '../llama/llama.service';

export class ShowNotesWorker {
  private readonly worker: Worker;

  constructor(private readonly llamaService: LlamaService) {
    this.worker = new Worker('show-notes-generation', async (job: Job) => {
      const { transcript } = job.data;
      
      // Extract title from transcript or generate one
      const title = 'Episode Title';
      const summary = transcript.substring(0, 200);
      
      const prompt = `Write show notes for episode: ${title}. Summary: ${summary}.
Return: episode description (150 words), timestamps, key takeaways,
guest bio if applicable, resource links.`;
      
      const result = await this.llamaService.generate(prompt);
      return result;
    });
  }

  async addJob(data: any) {
    return this.worker.add('show-notes-generation', data);
  }

  async getJob(jobId: string) {
    return this.worker.getJob(jobId);
  }
}