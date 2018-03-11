import {Component} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <p-growl [life]="3000"></p-growl>`
})
export class AppComponent {
  count = 0;

  severity = [
    'success',
    'info',
    'warn',
    'error'
  ];

  constructor(private messageService: MessageService) {}

  addSingle() {
    this.count++;
    this.messageService.add({
      severity: this.severity[this.count % this.severity.length],
      summary: 'Service Message',
      detail: 'Via MessageService'
    });
  }

}
