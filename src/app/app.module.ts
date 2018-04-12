import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';


import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { HttpClient, HttpClientModule, HttpInterceptor, HttpEvent, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




// @Injectable()
// export class ExampleInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const url = 'http://localhost:3000/';
//     req = req.clone({
//       url: url + req.url
//     });
//     return next.handle(req);
//   }
// }


@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
//    { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

