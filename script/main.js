$(document).ready(function () {


  //스크롤 다운 서식
  $(window).scroll(function () { //사용자가 휠동작을 하면 아래 내용이 실행된다.

    let sPos = $(this).scrollTop(); //현재 세로 스크롤 위치값을 변수에 저장한다.   => 입력
    // $('.status').text(sPos);// => 출력

    if (sPos > 400) { //만약에 스크롤값이 400이상이면 아래 내용을 실행
      $('header').fadeIn();

    } else { //다시 스크롤을 위로 올리면 아래 내용을 실행한다.
      $('header').fadeOut();

    }
  });

//인트로 메인 글자 서식
  function motion() {
    $('#intro h2').animate({
      "opacity": "0"
    }, 1500).animate({
      "opacity": "1"
    }, 1500);
  };

  motion();

  let Timer = setInterval(motion, 3000);



  //프로젝트A 소개와 목업 서식
  //이미지를 클릭하면 해당 이미지의 src값을 가져와서 body의 맨뒤쪽에 태그를 추가하여 모달창을 띄운다.
  //append

  const img = $('.pg3 > ul> li> img');

  img.click(function () {
    let imgUrl = $(this).attr('src');
    console.log(imgUrl); //출력해본다.

    let modal01 = "<div class='modal01'><img src='" + imgUrl + "'><a href='#' title=''>Close</a></div>";

    $('body').append(modal01); //모달을 띄우고

    //닫기를 클릭시 모달을 숨기기
    $('.modal01 a').click(function () {
      $('.modal01').fadeOut();
      return false;
    });
    return false;
  });

  //프로젝트A UI디자인 서식
  //이미지를 클릭하면 해당 이미지의 src값을 가져와서 body의 맨뒤쪽에 태그를 추가하여 모달창을 띄운다.
  //append
  const imgA = $('.pg3 > img');

  imgA.click(function () {
    let imgUrl02 = $(this).attr('src');
    console.log(imgUrl02); //출력해본다.

    let modalS = "<div class='modal02'><img src='" + imgUrl02 + "'><a href='#' title=''>Close</a></div>";

    $('body').append(modalS); //모달을 띄우고

    //닫기를 클릭시 모달을 숨기기
    $('.modal02 a').click(function () {
      $('.modal02').fadeOut();
      return false;
    });
    return false;
  });

//프로젝트A 상세보기 서식
//이미지를 클릭하면 해당 이미지의 src값을 가져와서 body의 맨뒤쪽에 태그를 추가하여 모달창을 띄운다.
  //append
  const imgB = $('.pg3 > a');

  imgB.click(function () {
    let imgUrl03 = $(this).next().attr('src');
    console.log(imgUrl03); //출력해본다.

    let modalA = "<div class='modal04'><img src='" + imgUrl03 + "'><a href='#' title=''>Close</a></div>";

    $('body').append(modalA); //모달을 띄우고

    //닫기를 클릭시 모달을 숨기기
    $('.modal04 a').click(function () {
      $('.modal04').fadeOut();
      return false;
    });
    return false;
  });


// 첫페이지 시작 경고 모달창 띄우기
let modal = '<div class="modal"><div class="inner"><span>이 사이트는 스터디 사이트입니다.<br> 일부 내용 및 이미지는 출처가 따로 있음을 밝힙니다.</span><p><input type="checkbox" id="ch"><label for="ch">오늘 하루 창 열지않기</label><input type="button" value="닫기" id="c_btn"></p></div></div>';

//body태그의 안쪽으로 맨 뒤에 내용 출력하기
$('body').append(modal);

//제이쿼리쿠키사용법 $.cookie('쿠키이름'.'쿠키값,{expires:만료일, path:'저장경로'});

//1.사용자의 브라우저에 쿠키값이 none일때
if($.cookie('popup')=='none'){
$('.modal').hide();
}

let $ex = $('.modal #ch'); //체크박스 변수선언하기


//체크하지 않고 그냥 닫기를 누르는 경우
$('#c_btn').click(function(){
closeModal();
});
//사용자가 체크박스 체크했는지 않했는지 확인하는 함수
function closeModal(){
if($ex.is(':checked')){
$.cookie('popup','none',{expires:1, path:'/'}); //쿠키파일생성하고
}
$('.modal').hide();
}

//메인 내비게이션 마우스 오버시 가로 길이 늘리기
let h_nav= $('header .gnb li');

h_nav.hover(function(){
$(this).addClass('act');
},function(){
$(this).removeClass('act');

});

//푸터 song 애니메이션
function ani02() {
  $('#footer .ft01 .song').animate({
    "top": "140px"
  }, 1000).animate({
    "top": "170px"
  }, 1000);
}

ani02();

let Time = setInterval(ani02, 2000);
 

  //헤더 arctic_scroll 서식

  $(".arctic_scroll").arctic_scroll({
    speed: 800
  });


 //첫페이지 글자 애니메이션
  function ani() {
  
    $('#intro h2').animate({
      "top": "270px"
    }, 1500).animate({
      "top": "330px"
    }, 1500);
  }

  ani();

  let times = setInterval(ani, 3000);








});


