import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CarouselService {

    constructor() { }

    getImageDataBase(): Array<string> {
        return ['https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg',
            'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg',
        ];
    }

    getCarouselImages(): Array<string> {
        return ['https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'];
    }


}
