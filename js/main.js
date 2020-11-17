// URL delle immagini da far scorrere nello slider...
const myImages = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg"
]

const sliderApp = new Vue ({
  el: '#slider',
  data: {
    myImages,
    currentImageIndex: 0,
  },
  methods: {
    prevImage: function(){ //vai all'img precedente
      if (this.currentImageIndex === 0) {
        return this.currentImageIndex = this.myImages.length - 1;
      } else {
        return this.currentImageIndex--;
      }
    },
    nextImg: function(){ //vai all'img successiva
      if (this.currentImageIndex === this.myImages.length - 1){
        return this.currentImageIndex = 0;
      } else {
        return this.currentImageIndex++;
      }
    }
  }
})
