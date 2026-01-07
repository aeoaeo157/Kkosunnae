//index.js

// 메인배너

$(document).ready(function () {
    $('main .pager li').first().css('color', '#FAAD6D');

    var page = 0;
    var slideCount = $('.gallery li').length; // 이미지 개수 (현재 5개)

    function leftmove() {
        page++;

        // 현재 부모 박스의 너비를 가져옴 (반응형 대응)
        var sliderWidth = $('.slide-box').width();

        if (page === slideCount) {
            $('.gallery').css('left', 0);
            page = 1;
        }

        $('.gallery').stop().animate({
            left: -(sliderWidth * page)
        }, 500);

        // 페이저 색상 변경
        $('main .pager li').css('color', 'white');
        
        // 마지막 이미지(1번 복사본)일 때는 첫 번째 점에 불 들어오게 처리
        if (page === slideCount - 1) {
            $('main .pager li').eq(0).css('color', '#FAAD6D');
        } else {
            $('main .pager li').eq(page).css('color', '#FAAD6D');
        }
    }

    var timer = setInterval(leftmove, 3000);
});



//rooms 이미지

/* 
.rooms-con .room-gal 
.rooms-con .room-gal div

.rooms-con .room-gal .rooms-cons


*/

/*     <!-- 
    슬라이드 기본 구조 

    .slider : 실제 슬라이드가 보여질 영역!
    .slider ul : 슬라이드 전체를 담는 부모! (움직이는 대상!!!)
    .slider ul li : 각각의 슬라이드!
    --> */


$(document).ready(function () {

    //초기설정 - 슬라이드 배치 설정
    //이전 버튼 클릭을 대비해서 마지막 li를 첫 번째로 이동
    $('.rooms-con .room-gal div:last').prependTo('.rooms-con .room-gal');

    //li 한 칸의 크기 구하기 = 슬라이드 하나의 크기 구하기 
    var liW = $('.rooms-con .room-gal div').width();
    console.log('li하나의 너비: ' + liW); //900

    $('.rooms-con .room-gal').css('margin-left', -liW);

    //다음 버튼을 클릭했을 때!
    $('.arr-btn .right-a').click(function (e) {

        //a의 기본기능 막기!
        e.preventDefault();

        console.log('다음버튼 클릭!!');

        $('.rooms-con .room-gal').animate({
            marginLeft: '-=' + liW
        }, 800, function () {
            //다음(두번째 클릭)을 위한 준비!!!
            //1) 첫 번째 li(슬라이드)를 맨 뒤로 보내기! >> append()
            //2) 슬라이드 순서 변경에 따른 ul의 위치 조절하기 >> margin

            $('.rooms-con .room-gal div').first().appendTo('.rooms-con .room-gal');
            $('.rooms-con .room-gal').css('margin-left', -liW);
        });
    });

    //이전 버튼을 클릭했을 때
    $('.arr-btn .left-a').click(function (evt) {

        evt.preventDefault();

        $('.rooms-con .room-gal').animate({
            marginLeft: '+=' + liW
        }, 800, function () {
            //다음을 위한 준비!!!
            $('.rooms-con .room-gal div:last').prependTo('.rooms-con .room-gal');
            $('.rooms-con .room-gal').css('margin-left', -liW);
        });
    });

});





// 시설 이미지


/* 
.facilities .fac-con
.facilities .fac-con .gallery
.facilities .fac-con .gallery ul li

*/

/*     <!-- 
    슬라이드 기본 구조 

    .slider : 실제 슬라이드가 보여질 영역!
    .slider ul : 슬라이드 전체를 담는 부모! (움직이는 대상!!!)
    .slider ul li : 각각의 슬라이드!
    --> */


// $(document).ready(function (){

//     //초기설정 - 슬라이드 배치 설정
//     //이전 버튼 클릭을 대비해서 마지막 li를 첫 번째로 이동
//     $('.facilities .fac-con .gallery li:last').prependTo('.facilities .fac-con .gallery');

//     //li 한 칸의 크기 구하기 = 슬라이드 하나의 크기 구하기 
//     var liW = $('.facilities .fac-con .gallery li').width();
//     console.log('li하나의 너비: ' + liW); //900

//     $('.facilities .fac-con .gallery').css('margin-left',-liW);

//     //다음 버튼을 클릭했을 때!
//     $('.fac-arr .right').click(function(e){

//         //a의 기본기능 막기!
//         e.preventDefault();

//         console.log('다음버튼 클릭!!');

//         $('.facilities .fac-con .gallery').animate({
//             marginLeft: '-=' + liW
//         }, 800, function (){
//             //다음(두번째 클릭)을 위한 준비!!!
//             //1) 첫 번째 li(슬라이드)를 맨 뒤로 보내기! >> append()
//             //2) 슬라이드 순서 변경에 따른 ul의 위치 조절하기 >> margin

//             $('.facilities .fac-con .gallery li').first().appendTo('.slider ul');
//             $('.facilities .fac-con .gallery').css('margin-left', -liW);
//         });
//     });

//     //이전 버튼을 클릭했을 때
//     $('.fac-arr .left').click(function(evt){

//         evt.preventDefault();

//         $('.facilities .fac-con .gallery').animate({
//             marginLeft: '+=' +liW
//         }, 800, function(){
//             //다음을 위한 준비!!!
//             $('.facilities .fac-con .gallery li:last').prependTo('.facilities .fac-con .gallery');
//             $('.facilities .fac-con .gallery').css('margin-left',-liW);
//         });
//     });


// });
















