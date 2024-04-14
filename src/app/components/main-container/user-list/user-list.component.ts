import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  @Input() userData!: any;

  copyLink(url: string) {
    navigator.clipboard.writeText(url).then(
      () => alert('URL copied to clipboard!'),
      err => console.error('Failed to copy URL: ', err)
    );
  }
}
