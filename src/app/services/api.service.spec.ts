import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return a valid user data', () => {
      const mockUser = { username: 'Swati2021' };

      service.getUser('Swati2021').subscribe(user => {
        expect(user).toEqual(mockUser);
      });

      const req = httpTestingController.expectOne('https://api.github.com/users/Swati2021');
      expect(req.request.method).toEqual('GET');
      req.flush(mockUser);
    });
  });

  describe('getRepositries', () => {
    it('should fetch repositories data using correct parameters', () => {
      const mockRepos = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
      const repoUrl = 'https://api.github.com/users/Swati2021/repos';

      service.getRepositries(repoUrl, 1, 10).subscribe(repos => {
        expect(repos).toEqual(mockRepos);
      });

      const req = httpTestingController.expectOne(`${repoUrl}?page=1&per_page=10`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockRepos);
    });
  });

  describe('setLoading', () => {
    it('should set loading status', () => {
      let loadStatus = false;
      const statuses: any[] = []; 
      service.loading$.subscribe(status => {
        statuses.push(status);
        if (statuses.length === 2) { 
          expect(statuses[0]).toBeFalse(); 
          expect(statuses[1]).toBeTrue(); 
        }
      });
      service.setLoading(true); 
    });
  });  
});
