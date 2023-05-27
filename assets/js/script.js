$(document).ready(function(){


    $('.dropdown-menu').hover(function (event) {
        $(this).toggleClass('show');
        $(this).children('.nav__list-link').toggleClass('show');
        $(this).children('.nav__list-link').attr('aria-expanded', true);
        $(this).children('.dropdown_menu-wrapper').toggleClass('show');
    });


    $('.main--travel-select').click(function(){
        $('.main__economy-dropdown').toggle();
    });
    $('.annocement--close').click(function(){
        $('.section-annoucement-bar').hide();
    });

    $('#oneway, #round-trip').click(function(){
        $('.first__group .not-in-multicity').show();
        $('.main__search-select_fields.second__group').hide();
        $('.add-city-div').hide();
    });
    $('#multicity').click(function(){
        $('.first__group .not-in-multicity').hide();
        $('.main__search-select_fields.second__group').show();
        $('.add-city-div').show();
    });

    $('.btn--add-city').click(function(){
        console.log('clicked')
        $('#appending-city').append(`
          <!---- Appended City --->
          <div class="main__search-select_fields second__group append--group show__appended">
            <div class="first__city-wrapper">
            <p class="search-fields_title">
                Flights 2 
            </p>
            <!---->
            <div class="search__input-group first__group">
                <div class="input__field-group">
                    <span class="input__filed-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon icon-location">
                        <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128s-128 57.3-128 128zm128 80c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"/>
                        </svg>
                    </span>
                    <input type="text" 
                            spellcheck="false" 
                            autocomplete="no-autofill" 
                            name="citypicker" 
                            class="city_picker-field search--form_input" 
                            placeholder="From city or airport" role="combobox" 
                            aria-autocomplete="list" aria-expanded="false" 
                            aria-haspopup="true"/>
                </div>
                <div class="input__field-group">
                    <span class="input__filed-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icon icon-pin">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
                        </svg>
                    </span>
                    <input type="text" 
                            spellcheck="false" 
                            autocomplete="no-autofill" 
                            name="citypicker" 
                            class="city_picker-field search--form_input" 
                            placeholder="From city or airport" role="combobox" 
                            aria-autocomplete="list" aria-expanded="false" 
                            aria-haspopup="true"/>
                </div>
            </div>
            <div class="search__input-group date_picker-group">
                <div class="input__field-group">
                    <span class="input__filed-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon icon-calendar">
                        <path d="M152 352C138.7 352 128 341.3 128 328C128 314.7 138.7 304 152 304H296C309.3 304 320 314.7 320 328C320 341.3 309.3 352 296 352H152zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"/>
                        </svg>
                    </span>
                    <input type="text" 
                            spellcheck="false" 
                            autocomplete="no-autofill" 
                            name="citypicker" 
                            class="city_picker-field search--form_input" 
                            placeholder="08 Dec 2023" 
                            role="combobox" 
                            value=""
                            aria-autocomplete="list" aria-expanded="false" 
                            aria-haspopup="true"/>
                </div>
            </div>
            <div class="remove--append-btn_wrapper">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" 
                 class="icon icon-delete-append">
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                </svg>
            </div>
            </div> 
        </div>
        <!---- Appended City --->
        `);
    });
    $('#appending-city').on('click', '.remove--append-btn_wrapper', function(){
        console.log('clicked');
        $(this).parents('.show__appended').remove();
    });
    $('#mobile-menu').click(function(){
        $(this).toggleClass('active-menu');
        $('.mobile_navigation-wrapper').toggleClass('active-menu');
        $('.mobile--dropdown-overlay').toggleClass('active-menu');
        $('#mobile--dropdown').toggleClass('active-menu');
        $('body').toggleClass('active-mobile-menu');     
    });









});