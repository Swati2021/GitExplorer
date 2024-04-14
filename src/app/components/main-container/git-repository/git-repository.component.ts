import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-git-repository',
  templateUrl: './git-repository.component.html',
  styleUrls: ['./git-repository.component.scss']
})
export class GitRepositoryComponent implements OnChanges {
  @Input() repositoryUrl!: any;
  @Input() totalPublicRepo!: any;
  currentPage: number = 1;
  pageSize: number = 10;
  repositriesData!: any

  constructor(
    public apiService: ApiService
  ){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['repositoryUrl']) {
      this.getRepos();
    }
  }

  getRepos(){
    this.apiService.setLoading(true);
    this.apiService.getRepositries(this.repositoryUrl, this.currentPage, this.pageSize).subscribe({
      next: (res: any) => {
        this.apiService.setLoading(false)
        this.repositriesData = res;
      },
      error: (err: any) => {
        this.apiService.setLoading(false)
      }
    })
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.getRepos();
  }
}
