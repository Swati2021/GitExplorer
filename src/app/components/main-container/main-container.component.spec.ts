import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './main-container.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

fdescribe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        ReactiveFormsModule
       ],
      declarations: [
        MainContainerComponent,
        SearchComponent
      ],
      providers: [ ApiService ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle searchedData successfully', () => {
    const mockResponse = { repos_url: 'url', public_repos: 1 };
    spyOn(apiService, 'getUser').and.returnValue(of(mockResponse));

    component.searchedData('username');
    expect(component.userDataLoader).toBeFalse();
    expect(component.noDataFound).toBeFalse();
    expect(component.userData).toEqual(mockResponse);
  });

  it('should handle errors in searchedData when user not found', () => {
    const errorResponse = { status: 404, error: { message: "Not Found" } };
    spyOn(apiService, 'getUser').and.returnValue(throwError(() => errorResponse));
  
    component.searchedData('invalidUsername');
    fixture.detectChanges();
  
    expect(component.noDataFound).toBeTrue(); 
    expect(component.userDataLoader).toBeFalse(); 
    expect(component.userData).toEqual({});
  });
  

  it('should have no data initially', () => {
    expect(component.userData).toBeUndefined();
    expect(component.userDataLoader).toBeFalse();
    expect(component.noDataFound).toBeFalse();
  });
});
