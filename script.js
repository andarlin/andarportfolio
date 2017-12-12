$('document').ready(function() {



    /*
        ===========================
        Caption Header
        ===========================
        */
        $('#caption').delay(1000).slideDown('slow');

    /*
        ===========================
        About Tab
        ===========================
        */
        $('#info').click(function () {
            $('#slide').slideToggle('slow');


        })
        $('#info2').click(function () {
            $('#slide2').slideToggle('slow');


        })


    /*
        ===========================
        Porfolio Tab
        ===========================
        */

        //web button clicked
        $('#1st-button').click(function(){
            $('#web-window').addClass('active');
            $('#2nd-button').removeClass('active');
            $('#3rd-button').removeClass('active');


            $('#web-window').show();
            $('#model-window').hide();
            $('#design-window').hide();

        });

        //portfolio button clicked
        $('#2nd-button').click(function(){
            $('#model-window').addClass('active');
            $('#1st-button').removeClass('active');
            $('#3rd-button').removeClass('active');


            $('#model-window').show();
            $('#web-window').hide();
            $('#design-window').hide();

        });

        //design button clicked
        $('#3rd-button').click(function(){
            $('#design-window').addClass('active');
            $('#1st-button').removeClass('active');
            $('#2nd-button').removeClass('active');


            $('#design-window').show();
            $('#web-window').hide();
            $('#model-window').hide();



        });
        /*
        ===========================
        Shadow Box
        ===========================
        */
        $('#filter-gallery img').click(function(){

        var largeFilePath = $(this).attr('src').replace("/thumb/", "/large/");
        $('#shadowbox img').attr('src', largeFilePath);
        $('#shadowbox').fadeIn('slow');
        });

        $('#sb-background').click(function() {
        $('#shadowbox').fadeOut('slow');
        });

        var galleryImage = [];

        $('#filter-gallery img').each(function(){
            galleryImage.push( $(this).attr('src').replace("/thumb/", "/large/") );
        });


        // Right Control

        $('#sb-right-arrow').click(function(){

            var currentFilePath = $('#shadowbox img').attr('src');
            var currentIndex = $.inArray(currentFilePath, galleryImage);

            if(currentIndex > galleryImage.length-2){
                currentIndex = -1;
            }

            currentIndex = currentIndex +1;
            $('#shadowbox img').attr('src', galleryImage[currentIndex]);

        });

        // Left Control
        $('#sb-left-arrow').click(function(){

            var currentFilePath = $('#shadowbox img').attr('src');
            var currentIndex = $.inArray(currentFilePath, galleryImage);

            if(currentIndex < 1){
                currentIndex = galleryImage.length;
            }

            currentIndex = currentIndex -1;
            $('#shadowbox img').attr('src', galleryImage[currentIndex]);



        });

        /*
        ===========================
        progress bar
        ===========================
        */

        $('#bar').hover(function () {
            $('#bar').css("width","185%");
            $('#bar p').fadeIn('slow');

        })

        $('#bar2').hover(function () {
            $('#bar2').css("width","165%");
            $('#bar2 p').fadeIn('slow');

        })

        $('#bar3').hover(function () {
            $('#bar3').css("width","120%");
            $('#bar3 p').fadeIn('slow');

        })

        $('#bar6').hover(function () {
            $('#bar6').css("width","110%");
            $('#bar6 p').fadeIn('slow');

        })

        $('#bar4').hover(function () {
            $('#bar4').css("width","185%");
            $('#bar4 p').fadeIn('slow');

        })

        $('#bar5').hover(function () {
            $('#bar5').css("width","185%");
            $('#bar5 p').fadeIn('slow');

        })






















})
/*end of document*/
