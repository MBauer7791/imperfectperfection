// show controls
this.carouselOptions = ['previous', 'add', 'play', 'next'];
// replace images here
this.carouselData = [
  {
    'id': '1',
    'src': '/pics/20220114_214003.jpg',
  },
  {
    'id': '2',
    'src': '/pics/20220419_161442.jpg',
  },
  {
    'id': '3',
    'src': '/pics/20220602_155518.jpg',
  },
  {
    'id': '4',
    'src': '/pics/20220507_233425.jpg',
  },
  {
    'id': '5',
    'src': '/pics/20220602_155247.jpg',
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
