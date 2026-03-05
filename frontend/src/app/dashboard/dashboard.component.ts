import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <h1>AI Podcast Producer</h1>
      <div class="card">
        <h2>Create New Episode</h2>
        <form (ngSubmit)="onSubmit()" #episodeForm="ngForm">
          <input type="text" placeholder="Topic" [(ngModel)]="topic" required />
          <input type="number" placeholder="Duration (minutes)" [(ngModel)]="duration" required />
          <select [(ngModel)]="style">
            <option value="conversational">Conversational</option>
            <option value="informative">Informative</option>
            <option value="entertaining">Entertaining</option>
          </select>
          <button type="submit">Generate Script</button>
        </form>
      </div>
      
      <div class="card">
        <h2>Recent Jobs</h2>
        <ul>
          <li *ngFor="let job of jobs">
            {{ job.id }} - {{ job.status }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    ".dashboard { padding: 20px; }",
    ".card { border: 1px solid #ddd; margin-bottom: 20px; padding: 20px; }",
    ".card input, .card select { display: block; margin-bottom: 10px; width: 300px; }",
    ".card button { padding: 10px 20px; }"
  ]
})
export class DashboardComponent {
  topic = '';
  duration = 30;
  style = 'conversational';
  jobs = [
    { id: 'job-1', status: 'completed' },
    { id: 'job-2', status: 'running' }
  ];

  onSubmit() {
    console.log('Generating script for:', this.topic);
  }
}