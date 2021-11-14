{
    'use strict';
    $(function(){
        $('.menu-trigger').on('click', function(){
            // やりたいことを書く
            $(this).toggleClass('active');
            $('#global-nav').toggleClass('active');
        })
    });
}
// use strict mode