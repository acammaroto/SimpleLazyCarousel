import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should the app have a carousel image array with a single element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.carouselImages.length = 1).toBeTruthy();
  });

  it('should the app have a database image array with multiple elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.databaseImage.length > 1).toBeTruthy();
  });

  it('when the user go to the next image, the carousel image should contain the new image and the image should be loaded', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const previousLenght = app.carouselImages.slice().length;
    app.gotChange(1);
    const currentLength = app.carouselImages.length;
    expect(previousLenght < currentLength).toBeTruthy();
  });

  it('When the user consumed all the images and continue to navigate, the carousel images shouldnt be modiied and the images shouldnt be reloaded ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.loopcomplete = true;
    const previousLenght = app.carouselImages.slice().length;
    app.gotChange(1);
    const currentLength = app.carouselImages.length;
    expect(previousLenght === currentLength).toBeTruthy();
  });

});
