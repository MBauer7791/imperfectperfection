// show controls
this.carouselOptions = ['previous', 'add', 'play', 'next'];
// replace images here
this.carouselData = [
  {
    'id': '1',
    'src': '1.jpg',
  },
  {
    'id': '2',
    'src': '2.jpg',
  },
  {
    'id': '3',
    'src': '3.jpg',
  },
  {
    'id': '4',
    'src': '4.jpg',
  },
  {
    'id': '5',
    'src': '5.jpg',
  }
];
// items in view
this.carouselInView = [1, 2, 3, 4, 5];

() => {
    const target = control;
    const selectedItem = document.querySelectorAll('.gallery-item-selected');
    const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
    const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
    const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
    const lastCarouselItem = document.querySelectorAll('.gallery-item-last');
    this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
  }
