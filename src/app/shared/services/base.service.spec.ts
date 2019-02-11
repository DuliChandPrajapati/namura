import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { BaseService } from './base.service';
import { HttpClientModule, HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IHttpService } from 'angular';
import { Http, BaseRequestOptions, Jsonp, JsonpModule, ResponseOptions, XHRBackend, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { serializePath } from '@angular/router/src/url_tree';
// import { HttpResponse } from 'selenium-webdriver/http';



describe('BaseService', () => {
  const mockResult = {
    token: '12324312sadasdasd'
  };

  const mockError = {
    error: {},
    message: 'Http failure response for (unknown url): 0 Unknown Error',
    name: 'HttpErrorResponse',
    ok: false,
    status: 0,
    statusText: 'Unknown Error',
    url: null
  };

  const value = 'baseurl';
  let service: BaseService;
  let backend: MockBackend;
  let httpc: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, JsonpModule],
      providers: [BaseService, MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backendw, options) => new Jsonp(backendw, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: XHRBackend,
          useClass: MockBackend
        }]
    });
    backend = TestBed.get(MockBackend);

    service = TestBed.get(BaseService);
    httpc = TestBed.get(HttpClient);
  });


  it('should call get method', inject([HttpTestingController,
    BaseService], (httpMock: HttpTestingController, httpService: BaseService) => {
      httpService.getData('/v1/baseurl').map((res) => {
        expect(res).toEqual(mockResult);
      });
      // const mockReq = httpMock.expectOne('/v1/baseurl');
      // expect(mockReq.cancelled).toBeFalsy();
      // expect(mockReq.request.responseType).toEqual('json');
      // mockReq.flush(mockResult);
      // httpMock.verify();
    })
  );


  it('should call post method', inject([HttpTestingController,
    BaseService], (httpMock: HttpTestingController, httpService: BaseService) => {
      httpService.sendData('/v1/baseurl', { email: 'himanshu', password: 'dasd' }).map((res) => {
        expect(res).toEqual(mockResult);
      });

      // const mockReq = httpMock.expectOne('/v1/baseurl');
      // expect(mockReq.cancelled).toBeFalsy();
      // expect(mockReq.request.responseType).toEqual('json');
      // mockReq.flush(mockResult);
      // httpMock.verify();
    })
  );
//  fit('should get search results', fakeAsync(
//     inject([
//       XHRBackend,
//       BaseService
//     ], (mockBackend: MockBackend, servicee: BaseService) => {

//       const expectedUrl = 'getData';

//       mockBackend.connections.subscribe(
//         (connection: MockConnection) => {
//           expect(connection.request.method).toBe(RequestMethod.Get);
//           expect(connection.request.url).toBe(expectedUrl);
//       connection.mockRespond(
//         new Response(new HttpResponse(200 ,));
//       );
//         });
//       servicee.getData(expectedUrl)
//         .subscribe(res => {
//           expect(res).toEqual({result: 'Bad Request'});
//         });
//     })
//   ));

  it('should call post method with custom headers', inject([HttpTestingController,
    BaseService], (httpMock: HttpTestingController, httpService: BaseService) => {

      httpService.sendData('/v1/baseurl', { promotionId: 2180, password: 'dasd' }).map(() => {
        spyOn(httpc, 'get').and.callFake(() => {
          return new Promise<any>((ress, rej) => {
              rej({
                  'code': 200
                });
          });
      });
        expect(httpc.get).toHaveBeenCalled();
      //  expect(ress).toEqual(mockResult);
      });
      // const mockReq = httpMock.expectOne('/v1/baseurl');
      // expect(mockReq.cancelled).toBeFalsy();
      // expect(mockReq.request.responseType).toEqual('json');
      // mockReq.flush(mockResult);
      // httpMock.verify();
    })
  );

  it('should return custom headers', inject([HttpTestingController,
    BaseService], (httpMock: HttpTestingController, httpService: BaseService) => {

      const x = service.setCustomHeaders({ promotionId: 2180, password: 'dasd' }, true);
      httpService.sendData('/v1/baseurl', { promotionId: '2180', password: 'dasd' }, x).map((res) => {
        expect(res).toEqual(mockResult);
      });

    })
  );
  it('should return custom error', inject([HttpTestingController,
    BaseService], (httpMock: HttpTestingController, httpService: BaseService) => {

      const x = httpService.setCustomHeaders({ promotionId: 2180, password: 'dasd' }, true);
      httpService.sendData('/v1/baseurl', { promotionId: '2180', password: 'dasd' }, x).toPromise().catch();
    })
  );
});
