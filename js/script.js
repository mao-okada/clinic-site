$(function () {
	$(".slider")
	  // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
	  .on("init", function () {
		$('.slick-slide[data-slick-index="0"]').addClass("add-animation");
	  })
	  // 通常のオプション
	  .slick({
		fade:true,                                   //切り替えをフェードで行う
		autoplay: true,                              //自動的に開始させる
		autoplaySpeed: 3000,                         //次のスライドに切り替わる待ち時間
		speed:1000,                                  //スライドの動きのスピード。
		infinite: true,                              //スライドをループさせる
		arrows: true,                                //左右の矢印あり
		prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
		pauseOnFocus: false,                         //フォーカスで一時停止を無効
		pauseOnHover: false,                         //マウスホバーで一時停止を無効
	  })
	  .on({
		// スライドが移動する前に発生するイベント
		beforeChange: function (event, slick, currentSlide, nextSlide) {
		  // 表示されているスライドに"add-animation"のclassをつける
		  $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
		  // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
		  $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
		},
		// スライドが移動した後に発生するイベント
		afterChange: function () {
		  // 表示していないスライドはアニメーションのclassを外す
		  $(".remove-animation", this).removeClass(
			"remove-animation add-animation"
		  );
		},
	  });
  });

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});

$(function(){
	var topBtn=$('#page_top');
	topBtn.hide();
	  
	//ボタンの表示設定
	$(window).scroll(function(){
	  if($(this).scrollTop()>80){
		// 画面を80pxスクロールしたら、ボタンを表示する
		topBtn.fadeIn();
	  }else{
		// 画面が80pxより上なら、ボタンを表示しない
		topBtn.fadeOut();
	  }
	});
	
	// ボタンをクリックしたら、スクロールして上に戻る
	topBtn.click(function(){
	  $('body,html').animate({
	  scrollTop: 0},500);
	  return false;
	});
	
	});

$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function(){
	  // 移動先を150px上にずらす
	  var adjust = 150;
	  // スクロールの速度
	  var speed = 500; // ミリ秒
	  // アンカーの値取得
	  var href= $(this).attr("href");
	  // 移動先を取得
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  // 移動先を調整
	  var position = target.offset().top - adjust;
	  // スムーススクロール
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
	});
  });