import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {itemInfo,mobileInfo,grid1Info,grid2Info,topDeals} from '../assets/Data/content.json'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,MainComponent,CardsComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flipcart';

 data=itemInfo;
 mobileData=mobileInfo;
 grid1Data=grid1Info;
 grid2Data=grid2Info;
 topDealsData=topDeals;

}
