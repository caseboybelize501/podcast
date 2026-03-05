import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  template: `
    <div class="editor-container">
      <h2>Podcast Script Editor</h2>
      <div class="editor-toolbar">
        <button (click)="save()">Save</button>
        <button (click)="export()">Export</button>
      </div>
      <div class="editor-content" #editor></div>
    </div>
  `,
  styles: [
    ".editor-container { padding: 20px; }",
    ".editor-toolbar { margin-bottom: 20px; }",
    ".editor-toolbar button { margin-right: 10px; padding: 8px 16px; }",
    ".editor-content { border: 1px solid #ccc; min-height: 400px; padding: 10px; }"
  ]
})
export class EditorComponent {
  save() {
    console.log('Saving script...');
  }

  export() {
    console.log('Exporting script...');
  }
}