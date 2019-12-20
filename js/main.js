// 배경 이미지 사이즈 컨트롤
$(document).ready(function () {

	// 콜렉션 루프 섬네일
	$('.tab_cont button').click(function() {
		if ($(this).hasClass('btn_next')) {
			var frontCut = $(this).parent('.tab_cont').children('ul').children('li').slice(0,5);
			$(this).parent('.tab_cont').children('ul').append(frontCut);
		} else {
			var backCut = $(this).parent('.tab_cont').children('ul').children('li').slice(-5);
			$(this).parent('.tab_cont').children('ul').prepend(backCut);
		}
		return false;
	});

	// 슬라이더
	leroroSlider('#visual_slider', 500, 5000, 1, 1);
});

// 가로 슬라이더 leroroSlider(객체, 속도, 정지시간, 시작인덱스, 자동재생)
function leroroSlider(container, speed, sceneTerm, startBn, auto) {
	
	var bnPage = $('>dl>dt', container);
	var bnCont = $('>dl>dd', container);
	var currentIndex = startBn-1;
	var totalCnt = $('dt', container).length-1;
	var nextIndex;
	var showRun;
	
	// 초기 세팅
	$(bnPage).eq(currentIndex).addClass('on');
	$(bnCont).css({'position':'absolute', 'left':'100%'}).eq(currentIndex).css({'left' : '0'});
	if (auto) rollingAuto(currentIndex);

	// 컨트롤러
	$('dt a, >.slide_ctrl>button', container).click(function() {
		activeScene = $('dt.on', container).index('dt', container)-1;

		if ($(this).hasClass('btn_stop')) {
			clearInterval(showRun);
		} else if ($(this).hasClass('btn_play')) {
			rollingAuto();
		} else {
			// 이전, 다음, 페이징
			if ($(this).hasClass('btn_next')) {
				nextIndex = currentIndex < totalCnt ? currentIndex + 1 : 0;
				// nextIndex = currentIndex + 1 < totalCnt + 1 ? currentIndex + 1 : 1;
			} else if ($(this).hasClass('btn_prev')) {
				nextIndex = currentIndex > 0 ? currentIndex - 1 : totalCnt;
				// nextIndex = currentIndex - 1 > 0 ? currentIndex - 1 : totalCnt -1;
			} else {
				nextIndex = $(this).parent('dt').index('dt');
			}

			// 이동 방향
			if (currentIndex < nextIndex) {
				$(bnCont).eq(currentIndex).css('left', 0).animate({'left' : '-100%'}, speed);
				$(bnCont).eq(nextIndex).css('left', '100%').animate({'left' : 0}, speed);
			} else if (currentIndex > nextIndex) {
				$(bnCont).eq(currentIndex).css('left', 0).animate({'left' : '100%'}, speed);
				$(bnCont).eq(nextIndex).css('left', '-100%').animate({'left' : 0}, speed);
			}

			currentIndex = nextIndex;
			$(bnPage).removeClass('on').eq(currentIndex).addClass('on');
		}
		return false;
	});
		
	function rollingAuto(index) {
		showRun = setInterval(function() {
			$('.btn_next', container).click();
		}, sceneTerm);
	}
}
