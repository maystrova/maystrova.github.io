$(document).ready(function() {
    $('.towatch-gallary').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 4,
                nav: false
            },
            992: {
                items: 6,
                nav: true,
                loop: false
            },
            1200: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });
    $('.clips-gallary').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        autoHeight: true,
        dots: true,
        addClassActive: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Добавление класса active заголовкам галереи
    $('.clips-gallary').on('changed.owl.carousel', function(event) {
        $('.seasons-gallary-nav').find('li').removeClass('active');
        $('.seasons-gallary-nav').find('li').eq(event.item.index).addClass('active');
    });

    $('.grid-gallary').photosetGrid({
        // Set the gutter between columns and rows
        gutter: '5px',
        // Manually set the grid layout
        layout: '132',
        // Wrap the images in links
        highresLinks: true,
    });
    $('.grid-gallary-video').photosetGrid({
        // Set the gutter between columns and rows
        gutter: '5px',
        // Manually set the grid layout
        layout: '222',
        // Wrap the images in links
        highresLinks: true,
    });
    $('.grid-gallary-article').photosetGrid({
        // Set the gutter between columns and rows
        gutter: '5px',
        // Manually set the grid layout
        layout: '333',
        // Wrap the images in links
        highresLinks: true,
    });
    $('.media-gallary').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        autoHeight: true,
        dots: true,
        addClassActive: true,
        URLhashListener: true,
        startPosition: 'photo',
        autoHeight: true,
        autoHeightClass: 'owl-height',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Добавление класса active заголовкам галереи
    $('.media-gallary').on('changed.owl.carousel', function(event) {
        $('.media-gallary-nav').find('li').removeClass('active');
        $('.media-gallary-nav').find('li').eq(event.item.index).addClass('active');
    });
});