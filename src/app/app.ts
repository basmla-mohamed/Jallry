import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  images = [
    { src: '1.jfif', name: 'Golden Hour', category: 'Elegant' },
    { src: '2.jfif', name: 'HeadPhone', category: 'Elegant' },
    { src: '3.jpg', name: 'Urban Architecture', category: 'Random' },
    { src: '4.jfif', name: 'Modern AirPods', category: 'Random' },
    { src: '5.jfif', name: 'Wild Perfum', category: 'Art' },
    { src: '6.jfif', name: 'delici drinks', category: 'Elegant' },
    { src: '7.jfif', name: 'Creative Art', category: 'Art' },
    { src: '8.jfif', name: 'Vintage Style', category: 'Fashion' },
    { src: '9.jfif', name: 'crafate', category: 'Random' },
    { src: '10.jfif', name: 'Bike', category: 'Elegant' },
    { src: '11.jfif', name: 'chatarang', category: 'Art' },
    { src: '13.jfif', name: 'Crafate', category: 'Fashion' },
    { src: '14.jfif', name: 'Wild World', category: 'Fashion' },
    { src: '15.jfif', name: 'Golden Hour', category: 'Elegant' },
    { src: '16.jfif', name: 'Creative Space', category: 'Art' },
    { src: '17.jfif', name: 'global earth', category: 'Random' },
    { src: '18.jfif', name: 'Elegant Look', category: 'Random' },
    { src: '19.jfif', name: 'Beautiful Camera', category: 'Elegant' },
  ];

  categories = ['All', 'Elegant', 'Random', 'Art', 'Fashion'];
  selectedCategory = 'All';
  filteredImages = this.images;
  isPopupActive = false;
  selectedImage = this.images[0];
  currentIndex = 0;
  isGridView = true;
  isDarkMode = localStorage.getItem('Theme') === 'dark';

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    localStorage.setItem('Theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleView(view: boolean) {
    this.isGridView = view;
  }

  filterImages(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter((img) => img.category === category);
    }
  }

  // Open popup
  openPopup(img: any) {
    this.selectedImage = img;
    this.isPopupActive = true;
    this.currentIndex = this.filteredImages.indexOf(img);
  }

  // Close popup
  closePopup() {
    this.isPopupActive = false;
  }

  //next image
  nextImage() {
    this.currentIndex++;

    if (this.currentIndex >= this.filteredImages.length) {
      this.currentIndex = 0;
    }

    this.selectedImage = this.filteredImages[this.currentIndex];
  }

  //prev img
  prevImage() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.filteredImages.length - 1;
    }

    this.selectedImage = this.filteredImages[this.currentIndex];
  }

  //show img when i change Active from indicators
  showImage(index: number) {
    this.currentIndex = index;
    this.selectedImage = this.filteredImages[index];
  }
}
