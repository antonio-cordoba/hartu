import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FinderBoardComponent } from './components/finder-board/finder-board.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    ],
  declarations: [ 
    AppComponent, 
    FinderBoardComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
