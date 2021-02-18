import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { CarouselService } from 'src/app/services/carousel/carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mycarousel') myCarousel: CarouselComponent;
  name = 'Angular';
  databaseImage: Array<string> = [];
  carouselImages: Array<string> = [];
  loopcomplete = false;
  itemsPerSlide = 1;
  singleSlideOffset = true;
  noWrap = true;
  activeRange = 0;
  currentIndex = 0;

  constructor(private carouselService: CarouselService) {
    this.databaseImage = carouselService.getImageDataBase();
    this.carouselImages = carouselService.getCarouselImages();
  }

  gotChange($event): void {
    const index: number = $event;

    if (!this.loopcomplete && (this.currentIndex <= index)) {
      this.currentIndex = index;
      if (this.carouselImages.length + 1 < this.databaseImage.length) {
        this.carouselImages.push(this.databaseImage[this.carouselImages.length + 1]);
      } else { this.loopcomplete = true; }
    }
  }

}
