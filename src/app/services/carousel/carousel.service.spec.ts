import { CarouselService } from './carousel.service';

describe('LoginService', () => {
    let service: CarouselService;

    beforeEach(() => {
        service = new CarouselService();
    });

    it('should return a database array of images ', () => {
        expect((service.getImageDataBase()).length > 1).toBeTruthy();
    });

    it('should return an array with the single fist image', () => {
        expect((service.getImageDataBase()).length = 1).toBeTruthy();
    });
});
