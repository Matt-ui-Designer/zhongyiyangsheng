$(function () {
	var text = [];
	var warr = [];
	var loadstr = '<div class="loading">连线中  <span></span><span></span><span></span><span></span><span></span></div>';
	var str1 = '<div class="line ly-hide" style="display: block;" id="fp"><div class="left"> <img src="files/004.jpg" width="40px"><div id="lx"><i></i>你是否被耳聋耳鸣困扰?点击下方按钮即可↓？<span></span></div></div><div class="ly-clear"></div></div></div>';
	warr[1] = '<div class="line"><div class="left"> <img src="files/004.jpg" width="40px"><div> <i></i>您平時是用什麽方式養生?</div></div><div class="ly-clear"></div></div>';
	warr[2] = '<div class="line"><div class="left"> <img src="files/004.jpg" width="40px"><div> <i></i>您學習養生課的目的是？</div></div><div class="ly-clear"></div></div>';
	warr[3] = '<div class="line"><div class="left"> <img src="files/004.jpg" width="40px"><div> <i></i>您是否願意添加老師LINE好友領取中醫養生課程，並且跟老师一起學習？</div></div><div class="ly-clear"></div></div>';
	warr[4] = '<div class="line"><div class="left"> <img src="files/004.jpg" width="40px"><div> <i></i>恭喜您，您的回答已完成！我們已經初步了解了您的養生情沈，並為您事屬的養生計割，我們會更具針對性的與您分析您的養生問題，老師會幫您提供解決辯法，或者您當養生問題有任何疑問需要諮詢，我們的養生顧問也會從專業的角度為您解答。點擊下方按鈕，添加中醫養生老師LINE好友，0元領取中醫養生課！<b style="color:red;">名額僅剩12個！</b>抓緊點擊下方按鈕報名登記領取吧! </div></div><div class="ly-clear"></div></div>';
	warr[7] = '<div class="line"><div class="left"> <img src="files/004.jpg" width="40px"><div> <i></i>抱歉，您不符合领取资格！祝您身体健康~</div></div><div class="ly-clear"></div></div>';

	setTimeout(function () {
		$('.ly-section1 .line:first').fadeIn(100)
	}, 300);
	setTimeout(function () {
		$('.ly-section1 .line_zizhi').fadeIn(100)
	}, 600);
	setTimeout(function () {
		$("#messbox").append(loadstr)
	}, 500);
	setTimeout(function () {
		$(".loading").fadeOut(0);
		$(".line").css('display', 'block')
	}, 1000);
	setTimeout(function () {
		$("#option_1").fadeIn(400, function () {
			scrollToBottom();
		})
	}, 1000);

	$(".select_botton a").click(function () {
		var p_id = $(this).attr('data-w');
		var p_value = $(this).text();
		var wtindex = $(this).attr('wtindex');
		$("#msg").append(pj_html(p_value));
		scrollToBottom();

		if (p_id <= text.length) {
			addHtml(text[p_id - 1], 1000)
		}

		setTimeout(function () {
			if (wtindex == 7) {
				addHtml(warr[7], 100);
			} else if (wtindex < 7) {
				addHtml(warr[wtindex - 1], 100);
				setTimeout(function () {
					wtindex++;
					$("#option_" + wtindex).fadeIn(400, function () {
						scrollToBottom();
					})
				}, 500)
			}
		}, 250);

		$(".select_botton").fadeOut(400)
	});

	$(".msg-select-options").click(function () {
		$("#messbox").append(str1);
		$(".msg-select-options").css('display', 'block');
		scrollToBottom();
	});

	function pj_html(str) {
		var pzixun = '<div class="line"><div class="right"> <img src="files/header2.png" width="40px"><div><i></i> ' + str + '</div></div><div class="ly-clear"></div></div>';
		return pzixun
	};

	function addHtml(S4, KdIHmU5) {
		KdIHmU5 = KdIHmU5 || 5000;
		setTimeout(function () {
			var wechat1 = $("#word_wx").html();
			$("#msg").append(S4);
			$("#msg").find("#wx").html(wechat1);
			scrollToBottom();
		}, KdIHmU5)
	}

	// 封装滚动到底部函数（兼容性更好）
    function scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    }

})
