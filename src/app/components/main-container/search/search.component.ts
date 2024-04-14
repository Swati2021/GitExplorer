import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchedData = new EventEmitter<any>();

  searchForm = new FormGroup({
    searchTerm: new FormControl('')
  });

  onSubmit() {
    this.searchedData.emit(this.searchForm?.value?.searchTerm)
  }
}
