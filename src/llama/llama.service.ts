import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LlamaService {
  private readonly baseUrl = 'http://llama:8000/generate';

  async generate(prompt: string) {
    const maxRetries = 3;
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await axios.post(this.baseUrl, {
          prompt,
          temperature: 0.8,
          max_tokens: 2048
        });
        
        return JSON.parse(response.data.content);
      } catch (error) {
        lastError = error;
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
    
    throw new Error(`Failed to generate after ${maxRetries} attempts: ${lastError.message}`);
  }
}