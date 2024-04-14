import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SearchComponent } from './components/main-container/search/search.component';
import { UserListComponent } from './components/main-container/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GitRepositoryComponent } from './components/main-container/git-repository/git-repository.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SkeletonUserComponent } from './utilities/skeleton-user/skeleton-user.component';
import { SkeletonRepoComponent } from './utilities/skeleton-repo/skeleton-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SearchComponent,
    UserListComponent,
    GitRepositoryComponent,
    SkeletonUserComponent,
    SkeletonRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
