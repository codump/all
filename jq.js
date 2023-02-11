$(window).on('load', function () {
	// loader //
	$("#loadtxt1").removeClass("loadOK").delay(1500).queue(function(next) {
		$(this).addClass("loadOK").delay(500).queue(function(next2) {
			$("#loadtxt2 span").css('color','#00b646');
			$("#loadtxt1").animate({
				marginLeft: '5.05vw'
			}, 500);
			$("#loadtxt2").animate({
				marginLeft: '10vw'
			}, 500);
			next2();
		});
		next();
	});
	$("#Lmenu").ready(function() {
		$("#progress").animate({
			width: '75%'
		}, 500);
		$("#progress2").animate({
			width: '75%'
		}, 500);
	});
	$("#main").ready(function() {
		$("#progress").animate({
			width: '100%'
		}, 500);
		$("#progress2").animate({
			width: '100%'
		}, 500);
		$("#load").delay(3000).fadeOut(200);
	});
	// loader //
	// anchor //
	let anchor = window.location.hash.replace("#", "");
	$('html, body').animate({
		scrollTop: $("a[name='" + anchor + "']").offset().top
	}, 0, function () {
		window.location.hash = anchor;
	});
	// anchor //
	theDomHasLoaded();
});

// document ready //
$(document).ready(function(){
// document ready //

// auto-image //
$('img').each(function(){
	if ($(this).attr('src').indexOf('data:') != -1) {
		$(this).css('cursor','pointer');
	}     
 });
$(document).on('click', 'img', function(){
	if ($(this).attr('src').indexOf('data:') != -1) {
		var openImg = $(this).attr('src');
		let w = window.open('about:blank');
		let image = new Image();
		image.src = openImg;
		setTimeout(function(){
		  w.document.write(image.outerHTML);
		}, 0);
	}
});	
// auto-image //

// loader //
$("#progress").animate({
	width: '40%'
}, 500);
$("#progress2").animate({
	width: '40%'
}, 500);
// loader //

// header //

// header //

// add page //
$('#show').on('click', function () {
	var unix = Date.now();
	var title = $('#title').val();
	var URLid = $('#URLid').val();
	var postedOn = $('#postedOn').val();
	var author = $('#author').val();
	var content = $('#content').val();
	/* note: \n = new line the \ after = Multiple lines to preserve nice json output https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal#multiple_lines */
	var addJSON = '{\n \
		"itemId":"'+ unix +'",\n \
		"URLid":"'+URLid+'",\n \
		"title":"'+title+'",\n \
		"postedOn":"'+postedOn+'",\n \
		"author":"'+author+'",\n \
		"lastEdit":"-",\n\
		"content":"'+content+'"\n \
	},';
	$('#showArea').val(addJSON);
	$('#showArea').css('display','block')
});
$('#test').on('click', function () {
	var unix = Date.now();
	var title = $('#title').val();
	var URLid = $('#URLid').val();
	var postedOn = $('#postedOn').val();
	var author = $('#author').val();
	var content = $('#content').val();
	var mainContainer = document.getElementById("testDiv");
	mainContainer.innerHTML = '<a name="' + URLid + '" class="anchor"></a><h1 class="CSitem"><a href="#' + URLid + '">' + title + '</a></h1><small><div class="githubBtn"><a class="github-button" href="https://github.com/codump/' + URLid + '" data-icon="octicon-star" data-size="small" data-show-count="true" aria-label="Star codump/' + URLid + ' on GitHub">Star</a></div> &emsp; <span class="midgray">Posted</span> ' + postedOn + ' &emsp; <span class="midgray">Author</span> ' + author + ' &emsp; <span class="midgray">Last edit</span> -</small><hr style="margin-top:0.5vh;background:#00b646;height:4px;margin-top:1.5vh;" />'+content+'<br><a href="https://codump.github.io/demo/'+URLid+'/" target="_blank"><input type="submit" class="blueButton" value="SEE DEMO" /></a> <a href="https://github.com/codump/'+URLid+'/" target="_blank"><input type="submit" class="greenButton" value="SEE CODE" /></a><div class="clear"></div><hr style="margin-bottom:7vh;"/>';
});
// add page //
// tag filter //
$(document).on('click', '.tag', function () {
	var what = $(this).data("what");
	$('.tag').removeClass('active');
	$(this).addClass('active');
	document.getElementById("posts").innerHTML = "";
	fetch('json/posts.json?v='+pushVersion)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			if (what == 'all') {
				appendScripts(data["scripts"]);
				appendDiscord(data["discord"]);
				appendSnippets(data["snippets"]);
			} else if (what == 'script') {
				appendScripts(data["scripts"]);
			} else if (what == 'discord') {
				appendScripts(data["discord"]);
			} else if (what == 'snippet') {
				appendSnippets(data["snippets"]);
			} 
		})
		.catch(function (err) {
			console.log('error: ' + err);
		}).then(function () {
			var $wrapper = $('#posts');
			$wrapper.find('.aPost').sort(function (a, b) {
				return +b.dataset.order - +a.dataset.order;
			}).appendTo($wrapper);
			theDomHasLoaded();
		});
});
// tag filter //

// document ready //
});
// document ready //

// posts //
fetch('json/posts.json?v='+pushVersion)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendScripts(data["scripts"]);
	appendDiscord(data["discord"]);
	appendSnippets(data["snippets"]);
})
.catch(function (err) {
    console.log('error: ' + err);
}).then(function () {
	var $wrapper = $('#posts');
	$wrapper.find('.aPost').sort(function (a, b) {
		return +b.dataset.order - +a.dataset.order;
	}).appendTo($wrapper);
});
function appendScripts(data) {
    var mainContainer = document.getElementById("posts");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
		div.className = "aPost";
		div.dataset.order = data[i].itemId;
		div.innerHTML = '<a name="' + data[i].URLid + '" class="anchor"></a><h1 class="CSitem"><a href="#' + data[i].URLid + '">' + data[i].title + '</a></h1><small><div class="githubBtn"><a class="github-button" href="https://github.com/codump/' + data[i].URLid + '" data-icon="octicon-star" data-size="small" data-show-count="true" aria-label="Star codump/' + data[i].URLid + ' on GitHub">Star</a></div> &emsp;&emsp; <span class="midgray">Posted</span> ' + data[i].postedOn + ' &emsp;&emsp; <span class="midgray">Author</span> ' + data[i].author + ' &emsp;&emsp; <span class="midgray">Last edit</span> ' + data[i].lastEdit + ' &emsp;&emsp; <span class="midgray">Tag</span> ' + data[i].tags +'</small><hr style="margin-top:0.5vh;background:#00b646;height:4px;margin-top:1.5vh;" />'+data[i].content+'<br><a href="https://codump.github.io/demo/'+data[i].URLid+'/" target="_blank"><input type="submit" class="blueButton" value="SEE DEMO" /></a> <a href="https://github.com/codump/'+data[i].URLid+'/" target="_blank"><input type="submit" class="greenButton" value="SEE CODE" /></a><div class="clear"></div><hr style="margin-bottom:7vh;"/>';
        mainContainer.appendChild(div);
    }
}
function appendDiscord(data) {
	var mainContainer = document.getElementById("posts");
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		div.className = "aPost";
		div.dataset.order = data[i].itemId;
		div.innerHTML = '<a name="' + data[i].URLid + '" class="anchor"></a><h1 class="CSitem"><a href="#' + data[i].URLid + '">' + data[i].title + '</a></h1><small><div class="githubBtn"><a class="github-button" href="https://github.com/codump/' + data[i].URLid + '" data-icon="octicon-star" data-size="small" data-show-count="true" aria-label="Star codump/' + data[i].URLid + ' on GitHub">Star</a></div> &emsp;&emsp; <span class="midgray">Posted</span> ' + data[i].postedOn + ' &emsp;&emsp; <span class="midgray">Author</span> ' + data[i].author + ' &emsp;&emsp; <span class="midgray">Last edit</span> ' + data[i].lastEdit + ' &emsp;&emsp; <span class="midgray">Tag</span> ' + data[i].tags + '</small><hr style="margin-top:0.5vh;background:#00b646;height:4px;margin-top:1.5vh;" />' + data[i].content + '<br><a href="https://codump.github.io/demo/' + data[i].URLid + '/" target="_blank"><input type="submit" class="blueButton" value="SEE DEMO" /></a> <a href="https://github.com/codump/' + data[i].URLid + '/" target="_blank"><input type="submit" class="greenButton" value="SEE CODE" /></a><div class="clear"></div><hr style="margin-bottom:7vh;"/>';
		mainContainer.appendChild(div);
	}
}
function appendSnippets(data) {
    var mainContainer = document.getElementById("posts");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
		div.className = "aPost";
		div.dataset.order = data[i].itemId;
		div.innerHTML = '<a name="' + data[i].URLid + '" class="anchor"></a><h1 class="CSitem"><a href="#' + data[i].URLid + '">' + data[i].title + '</a></h1><small><div class="githubBtn"><a class="github-button" href="https://gist.github.com/codump/' + data[i].URLid + '" data-icon="octicon-star" data-size="small" data-show-count="true" aria-label="Star codump/' + data[i].URLid + ' on GitHub">Star</a></div> &emsp;&emsp; <span class="midgray">Posted</span> ' + data[i].postedOn + ' &emsp;&emsp; <span class="midgray">Author</span> ' + data[i].author + ' &emsp;&emsp; <span class="midgray">Last edit</span> ' + data[i].lastEdit + ' &emsp;&emsp; <span class="midgray">Tag</span> ' + data[i].tags +'</small><hr style="margin-top:0.5vh;background:#00b646;height:4px;margin-top:1.5vh;" />'+data[i].content+'<br><div id="Gist-'+data[i].URLid+'" class="gitItem"></div><hr style="margin-bottom:7vh;"/>';
        mainContainer.appendChild(div);
		
		var gistId = data[i].URLid;
		getGist(gistId);
		
		
    }
}
function getGist (URLid){
	var printGist = function (gist) {
		console.log(gist.repo, ' (' + gist.description + ') :');
		$('#Gist-' + URLid).html('<link rel="stylesheet" href="' + gist.stylesheet + '" />' + gist.div);
	};
	$.ajax({
		url: 'https://gist.github.com/' + URLid + '.json',
		dataType: 'jsonp',
		success: printGist
	});
}
// posts //

// github buttons //
theDomHasLoaded();
function theDomHasLoaded(e) {
  console.log('DOM has loaded, appending GH buttons script')
  let newScript = document.createElement('script');
  newScript.src = 'https://buttons.github.io/buttons.js'
  document.head.appendChild(newScript);
  console.log('Appended GH buttons script to DOM')
}
// github buttons //
