$(document).ready(function(){
    $('.form-overlay').fadeIn(500)

    $('.close-btn2').click(function(){
        $('.form-overlay').fadeOut(500)
    })

    $('.menu-btn').click(function(){
        $('.overlay').slideDown(1000)
    })
    $('.close-btn').click(function(){
        $('.overlay').slideUp(1000)
    })
    $(window).scroll(function(){
        if(this.scrollY > 80){
            $('.navbar').css({
                'backgroundColor':'#303952'
            })
        }else{
            $('.navbar').css({
                'backgroundColor':'transparent'
            })
        }
    })
    $('.video-btn').click(function(){
        $('.video-overlay').show(1000)
    })
    $('.video-close-btn').click(function(){
        $('.video-overlay').hide(1000)
    })

    $('.detail-btn').click(function(){
        $('.detail2, .detail3, .detail4').hide(1000)
        $('.detail').show(1000)

        $('.detail-btn .text2').removeClass('disbale-detail')
        $('.detail-btn   .text2').addClass('active-detail')
        
        $('.detail-btn2 .text2, .detail-btn1 .text2, .detail-btn3 .text2').removeClass('active-detail')
        $('.detail-btn2 .text2, .detail-btn1 .text2, .detail-btn3 .text2').addClass('disable-detail')
    })
    $('.detail-btn1').click(function(){
        $('.detail, .detail3, .detail4').hide(1000)
        $('.detail2').show(1000)
        $('.detail2').css({
            'display': 'flex'
        })

        $('.detail-btn1 .text2').removeClass('disbale-detail')
        $('.detail-btn1 .text2').addClass('active-detail')
        
        $('.detail-btn2 .text2, .detail-btn3 .text2, .detail-btn .text2').removeClass('active-detail')
        $('.detail-btn2 .text2, .detail-btn3 .text2, .detail-btn .text2').addClass('disable-detail')
    })
    $('.detail-btn2').click(function(){
        $('.detail, .detail2, .detail4').hide(1000)
        $('.detail3').show(1000)
        $('.detail3').css({
            'display': 'flex'
        })
        
        $('.detail-btn2 .text2').removeClass('disbale-detail')
        $('.detail-btn2 .text2').addClass('active-detail')
        
        $('.detail-btn3 .text2, .detail-btn1 .text2, .detail-btn .text2').removeClass('active-detail')
        $('.detail-btn3 .text2, .detail-btn1 .text2, .detail-btn .text2').addClass('disable-detail')
    })

    $('.detail-btn3').click(function(){
        $('.detail, .detail2, .detail3').hide(1000)
        $('.detail4').show(1000)
        $('.detail4').css({
            'display': 'flex',
        })
        $('.detail-btn3 .text2').removeClass('disbale-detail')
        $('.detail-btn3 .text2').addClass('active-detail')
        
        $('.detail-btn2 .text2, .detail-btn1 .text2, .detail-btn .text2').removeClass('active-detail')
        $('.detail-btn2 .text2, .detail-btn1 .text2, .detail-btn .text2').addClass('disable-detail')
        
    })


    $('.que1').click(function(){
        $('.ans1').slideToggle(500)
        $('.ans2').slideUp(500)
        $('.ans3').slideUp(500)
        $('.ans4').slideUp(500)
    })
    $('.que2').click(function(){
        $('.ans2').slideToggle(500)
        $('.ans1').slideUp(500)
        $('.ans3').slideUp(500)
        $('.ans4').slideUp(500)
    })
    $('.que3').click(function(){
        $('.ans3').slideToggle(500)
        $('.ans2').slideUp(500)
        $('.ans1').slideUp(500)
        $('.ans4').slideUp(500)
    })
    $('.que4').click(function(){
        $('.ans4').slideToggle(500)
        $('.ans2').slideUp(500)
        $('.ans3').slideUp(500)
        $('.ans1').slideUp(500)
    })
})