function ad(position, pad, top) {
	var ad_width = "100px";
	var ad_height = "250px";
	var ad_img = "img/ad1.jpg";
	var close_img = "img/close.png";

	var ad_left = document.createElement("div");
	ad_left.style.width = ad_width;
	ad_left.style.height = ad_height;
	ad_left.style.padding = "0px";
	ad_left.style.position = "absolute"
	if (position == "right") {
		ad_left.style.right = `${pad}px`;
		ad_left.style.top = `${top}px`;
	}else{
		ad_left.style.left = `${pad}px`;
		ad_left.style.top = `${top}px`;
	}

	var adimg = document.createElement("img");
	adimg.src = ad_img;
	ad_left.appendChild(adimg);

	var closeimg = document.createElement("img");
	closeimg.src = close_img;
	closeimg.style.width = "50px";
	closeimg.style.position = "ralative";
	closeimg.style.left = "50px";
	closeimg.style.top = "-20px";
	closeimg.style.cursor = "pointer";
	ad_left.appendChild(closeimg);

	document.documentElement.appendChild(ad_left);

	ad_left.addEventListener("click", function() {
		this.style.display = "none";
	})

	window.addEventListener("scroll", function() {
		var st1 = document.documentElement.scrollTop || document.body.scrollTop;
		ad_left.style.top = (st1 + top) + "px";
	})
}

ad("right",30,20)
ad("left",30,20)