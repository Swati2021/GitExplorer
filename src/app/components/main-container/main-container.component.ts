import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  userData!: any
  repositoryUrl!: any;
  totalPublicRepo!: any;
  userDataLoader: boolean = false;
  noDataFound: boolean = false;

  constructor(
    private apiService: ApiService
  ){}

  searchedData(event: string){
    this.userDataLoader = true;
    if(event){
      this.apiService.getUser(event).subscribe({
        next: (res: any) => {
          this.userDataLoader = false;
          this.noDataFound = false
          this.userData = res;
          this.repositoryUrl = res?.repos_url;
          this.totalPublicRepo = res?.public_repos;  
        },
        error: (err: any) => {
          if(err?.error?.message?.toLowerCase() === "not found"){
            this.noDataFound = true;
          }
          this.userDataLoader = false;   
          this.userData = {};
        }
      })
   }else{
      this.userData = {};
      this.userDataLoader = false;
      this.noDataFound = false;
   }
  }

  isEmpty(obj: any): boolean {
    if (obj === null || typeof obj !== 'object') {
      return true;
    }
    return Object.keys(obj).length === 0;
  }
}
