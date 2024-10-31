import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card-container/card/card.component';
import { CardTitleComponent } from './card-container/card/card-title/card-title.component';
import { CardImageComponent } from './card-container/card/card-image/card-image.component';
import { CardDescriptionComponent } from './card-container/card/card-description/card-description.component';
import { CardButtonsComponent } from './card-container/card/card-buttons/card-buttons.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MovieService } from '../domain/services/MovieService.service';
import { GetPopularMovieTitlesUseCase } from '../domain/useCases/GetPopularMovieTitlesUseCase';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { NowPlayingService } from '../domain/services/NowPlaying.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardComponent,
    CardTitleComponent,
    CardImageComponent,
    CardDescriptionComponent,
    CardButtonsComponent,
    MenuComponent,
    FooterComponent,
    EstrenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    MovieService,
    GetPopularMovieTitlesUseCase,
    NowPlayingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
