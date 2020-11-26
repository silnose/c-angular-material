import { Component, OnInit } from '@angular/core';
import { Photo } from 'app/models/photo';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      (photos) => {
        this.photos = photos;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
