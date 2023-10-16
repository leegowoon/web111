console.log("방가방가")

$('.nav>ul>li').mouseover(function(){
    console.log($(this))
    $(this).find('.submenu').stop().slideDown();
});

    $('.nav>ul>li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp();
    }); 


//banner

/* 변수 : 변하는 값이라는 의미
let 변수이름 = 값
let 주머니 = 100;*/

// console.log(주머니+1)

let currentIndext = 0;

// setInterval(할일,시간); setInterval(function(){},시간);
// setInterval(function(){},시간(1초)); >> 1초마다 할일이 실행
// setInterval(function(){},3000); >> 3초마다 할일이 실행

/* if(조건문){
    조건이 만족하면 할일
}else{조건이 만족하지 않으면 할일} */

setInterval(function(){
    if(currentIndext<2){
        //1씩 더해라
        currentIndext++;
    }else{
        //다시 0을 입력해라
        currentIndext=0;
    }

    // console.log(currentIndext)
    let slidePosition=currentIndext*(-378)+"px"; //곱하기:* 연결연산자:+
    console.log(slidePosition)

    // $('.slideList').animate({실행문},시간)
    $('.slideList').animate({top:slidePosition},400)

},3000);


/* 탭(tap)메뉴
.find() : css에서 띄어쓰기(하위요소(자손))와 동일
.hide() : display: none;
.show() : display: block;
.next() : 형제 중 바로 밑 동생, 내가 셋째라면 넷째를 의미
.parent() : 바로 위 상위요소(부모요소를 호출)
.siblings() : 나를 제외한 형제들
 */

let tabMenu=$('.notice');

tabMenu.find('ul>li>ul').hide();
tabMenu.find('ul>li.active>ul').show();

tabMenu.find('ul>li>a').click(function(e){
    e.preventDefault(); // #때문에 튕기는 현상 막기
    
    /* $(this).parent('li').addClass('active');
    $(this).parent('li').siblings('li').removeClass('active');
    $(this).parent('li').siblings('li').find('ul').hide(); */

    $(this).parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();

    $(this).next().show();
});

// 팝업창
//$('.ad').click(어떤일);
//$('.ad').click(function(){실행문});

$('.ad').click(function(){
    //$('.layer-bg').show();
    //$('.layer-bg').slideDown(); slideDown기본값 : 0.3s
    $('.layer-bg').fadeIn();
});

$('.layer .close').click(function(){
    //$('.layer-bg').slideUp();
    //$('.layer-bg').hide();
    //$('.layer-bg').fadeOut(1000); = 1s
    $('.layer-bg').fadeOut();
});
