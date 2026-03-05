# AI Podcast Producer

An AI-powered podcast production platform that generates full episode scripts, show notes, and social media clips from topics or transcripts.

## Features

- Generate podcast episode scripts with intro, segments, interview questions, ad-read copy, and outro
- Create show notes with timestamps and key takeaways
- Extract social media clip moments from transcripts
- Asynchronous job processing using BullMQ
- Integration with LLaMA.cpp for AI generation

## Stack

- **Frontend**: Angular + Quill rich text editor
- **Backend**: Node.js/NestJS
- **Database**: DynamoDB
- **AI**: LLaMA.cpp via HTTP endpoint
- **Queue**: BullMQ + Redis
- **Storage**: S3 for episode exports

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Start services with Docker Compose
4. Access the API at `http://localhost:3000/api`

## API Endpoints

- `POST /api/podcast/script` - Generate podcast script
- `POST /api/podcast/show-notes` - Generate show notes
- `POST /api/podcast/clips` - Extract social media clips
- `GET /api/podcast/job/:id` - Poll job status
- `GET /health` - Health check

## Development

Run in development mode:

bash
npm run start:dev


Build for production:

bash
npm run build
