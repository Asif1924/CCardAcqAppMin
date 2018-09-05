ensureNamespaceExists();

BRB.IeUIHelper = function() {
	this.addStylesForIE8 = addStylesForIE8;
	this.isIe8Browser = isIe8Browser;
	this.roundLeftCornersForTag = roundLeftCornersForTag;
	this.roundRightCornersForTag = roundRightCornersForTag;
	this.roundAllCornersForTag  = roundAllCornersForTag;
	this.toggleNSImege = toggleNSImege;
	this.wrapSelectsOnDecoration = wrapSelectsOnDecoration;
	this.needToAddValueToInput = needToAddValueToInput;
	// ---------------------------------------------------------------------------------------
	function addStylesForIE8 (){
		if(!document.createStyleSheet)return;
		var sheet = document.createStyleSheet();
		//fixHeaderLayout(sheet);
		fixSelectsLayout(sheet);
		fixCardaLayout(sheet);
		addGifAnimation();
	}

	function needToAddValueToInput(){
		var      isSupportPseudoPlaceholder = (function( style ) {
	        var prefixes = [ "", ":input-", "-o-", ":-o-input-", "-moz-", ":-webkit-input-", "-ms-", ":-ms-input-" ];
	        document.documentElement.firstChild.appendChild( style );
	        for( var i = 0; i < prefixes.length; i++ ) {
	                try {
	                        style.sheet.insertRule( ":" + prefixes[ i ] + "placeholder{}", 0 );
	                } catch( _e_ ) {}
	        }
	        var result = style.sheet ? style.sheet.cssRules.length > 0 : 0;
	        style.parentNode.removeChild( style );
	        return result;
	})( document.createElement( 'style' ) );
/*	    var ua= navigator.userAgent, N= navigator.appName, tem, M= ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || [];
	    M= M[2]? [M[1], M[2]]:[N, navigator.appVersion, '-?'];
	    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	    var str = M.join(' ');
	    return str.indexOf('.5.') > 0;*/
		return (!isSupportPseudoPlaceholder || ( !window.external && !window.opera ));
	};
	// ---------------------------------------------------------------------------------------
	function isIe8Browser() {
		var name = navigator.appName == "Microsoft Internet Explorer";
		var version = parseFloat(navigator.appVersion) == 4;
		return name && version;
	}
	// ---------------------------------------------------------------------------------------
	function fixHeaderLayout(sheet){
		// shifts logo and language toggle button
		sheet.addRule('.languageRegion', 'padding-right: 20px;');
		sheet.addRule('.pageHeader_CantireBankOrTriangle', 'margin-left: 20px;');
		sheet.addRule('.pageHeader_CantireBankOrTriangle', 'margin-left: 20px;');
	}
	// ---------------------------------------------------------------------------------------
	function fixSelectsLayout(sheet){
		// creates border
		sheet.addRule('.fieldValuesSelectField', 'border: 1px solid #777;');
	}
	// --------------------------------------------------------------------------------------
	function fixContinueButtonLayout(){
		// continue Button Layout
		$('.continueButtonTriangle, .continueButtonGrayTriangle').css('margin-left', '-14px');
	}
	// --------------------------------------------------------------------------------------
	function fixBackButtonLayout(){
		// back Button Layout
		$('.backButtonTriangle, .continueButtonGrayTriangle').css('margin-right', '-14px');
	}
	// --------------------------------------------------------------------------------------
	function roundLeftCorners (htmlElemet, borderRadius) {	
		borderRadius = validateBorderRadius(borderRadius);
		
		htmlElemet.corner('left ' + borderRadius + 'px');
		fixContinueButtonLayout();
	}
	// --------------------------------------------------------------------------------------
	function roundLeftCornersForTag (htmlElemetsArray, borderRadius) {		
		if (!isIe8Browser() || _.isEmpty(htmlElemetsArray)) {
			return false;
		}	
		
		$.each(htmlElemetsArray, function(index, item) {
			roundLeftCorners(item, borderRadius);
		});
		fixContinueButtonLayout();
		return true;
	}
	// --------------------------------------------------------------------------------------
	function roundRightCorners (htmlElemet, borderRadius) {	
		borderRadius = validateBorderRadius(borderRadius);
		
		htmlElemet.corner('right ' + borderRadius + 'px');
		fixBackButtonLayout();
	}	
	// --------------------------------------------------------------------------------------
	function roundRightCornersForTag (htmlElemetsArray, borderRadius) {		
		if (!isIe8Browser() || _.isEmpty(htmlElemetsArray)) {
			return false;
		}	
		
		$.each(htmlElemetsArray, function(index, item) {
			roundRightCorners(item, borderRadius);
		});
		fixBackButtonLayout();
		return true;
	}
	// --------------------------------------------------------------------------------------
	function roundAllCorners (htmlElemet, borderRadius) {		
		borderRadius = validateBorderRadius(borderRadius);
		
		htmlElemet.corner(borderRadius + 'px');
	}
	// --------------------------------------------------------------------------------------
	function roundAllCornersForTag (htmlElemetsArray, borderRadius) {		
		if (!isIe8Browser() || _.isEmpty(htmlElemetsArray)) {
			return false;
		}
	
		$.each(htmlElemetsArray, function(index, item) {
			roundAllCorners(item, borderRadius);
		});
		
		return true;
	}
	// --------------------------------------------------------------------------------------
	function validateBorderRadius (borderRadius) {
		if (_.isEmpty(borderRadius)) {
			borderRadius = 10;
		}
		
		return borderRadius;
	}
	// --------------------------------------------------------------------------------------
 
	// --------------------------------------------------------------------------------------
	function toggleNSImege (translator) {
		$('#rightBannerNSImage').removeClass(
				'rightBannerNSBlock_fr, rightBannerNSBlock');
		translator.getCurrentLanguage() == 'en' ? $('#rightBannerNSImage')
				.addClass('rightBannerNSBlock_ie8').removeClass(
						'rightBannerNSBlock_fr_ie8') : $('#rightBannerNSImage')
				.addClass('rightBannerNSBlock_fr_ie8').removeClass(
						'rightBannerNSBlock_ie8');
						
		$('#rightBannerROCImage').removeClass(
						'rightBannerNSBlock_fr, rightBannerNSBlock');
				translator.getCurrentLanguage() == 'en' ? $('#rightBannerROCImage')
						.addClass('rightBannerNSBlock_ie8').removeClass(
								'rightBannerNSBlock_fr_ie8') : $('#rightBannerROCImage')
						.addClass('rightBannerNSBlock_fr_ie8').removeClass(
								'rightBannerNSBlock_ie8');	
								
								
								$('#PersonalInformationScreen a#topBanner10XImage').removeClass(
								'topBanner10XImageBlock_fr, topBanner10XImageBlock');
								translator.getCurrentLanguage() == 'en' ? $('#PersonalInformationScreen a#topBanner10XImage').addClass(
								'topBanner10XImageBlock_ie8').removeClass(
								'topBanner10XImageBlock_fr_ie8') : $('#PersonalInformationScreen a#topBanner10XImage')
								.addClass('topBanner10XImageBlock_fr_ie8').removeClass(
										'topBanner10XImageBlock_ie8'); 
								
								$('#AdditionalInformationScreen a#topBanner10XImage').removeClass(
								'topBanner10XImageBlock_fr, topBanner10XImageBlock');
								translator.getCurrentLanguage() == 'en' ? $('#AdditionalInformationScreen a#topBanner10XImage').addClass(
								'topBanner10XImageBlock_ie8').removeClass(
								'topBanner10XImageBlock_fr_ie8') : $('#AdditionalInformationScreen a#topBanner10XImage')
								.addClass('topBanner10XImageBlock_fr_ie8').removeClass(
										'topBanner10XImageBlock_ie8');
								
								$('#choseProduct a#topBanner10XImage').removeClass(
								'topBanner10XImageBlock_fr, topBanner10XImageBlock');
								translator.getCurrentLanguage() == 'en' ? $('#choseProduct a#topBanner10XImage').addClass(
								'topBanner10XImageBlock_ie8').removeClass(
								'topBanner10XImageBlock_fr_ie8') : $('#choseProduct a#topBanner10XImage')
								.addClass('topBanner10XImageBlock_fr_ie8').removeClass(
										'topBanner10XImageBlock_ie8'); 
								
	}
	// --------------------------------------------------------------------------------------
	
	function toggle10XImegePI (translator) {
	
		$('#PersonalInformationScreen a#topBanner10XImage').removeClass(
		'topBanner10XImageBlock_fr, topBanner10XImageBlock');
		translator.getCurrentLanguage() == 'en' ? $('#PersonalInformationScreen a#topBanner10XImage').addClass(
		'topBanner10XImageBlock_ie8').removeClass(
		'topBanner10XImageBlock_fr_ie8') : $('#PersonalInformationScreen a#topBanner10XImage')
		.addClass('topBanner10XImageBlock_fr_ie8').removeClass(
				'topBanner10XImageBlock_ie8');  
	}
	// ----------------------------------------------------------------------------------------------------
	function toggle10XImegeAI (translator) {
		$('#AdditionalInformationScreen a#topBanner10XImage').removeClass(
		'topBanner10XImageBlock_fr, topBanner10XImageBlock');
		translator.getCurrentLanguage() == 'en' ? $('#AdditionalInformationScreen a#topBanner10XImage').addClass(
		'topBanner10XImageBlock_ie8').removeClass(
		'topBanner10XImageBlock_fr_ie8') : $('#AdditionalInformationScreen a#topBanner10XImage')
		.addClass('topBanner10XImageBlock_fr_ie8').removeClass(
				'topBanner10XImageBlock_ie8');  
		
		
	}
	// ---------------------------------------------------------------------------------------------------
	function fixCardaLayout(sheet){
		sheet.addRule('.card', 'margin-top: 50px;');
	}
	// --------------------------------------------------------------------------------------
	function wrapSelectsOnDecoration (item){
		if($(item.uiid)[0] == undefined && $(item.uiid.replace("_div", ''))[0] && $(item.uiid.replace("_div", ''))[0].nodeName == "SELECT"){
    		item.uiid = item.uiid.replace("_div", '');
    	}
    	if ($(item.uiid)[0] && $(item.uiid)[0].nodeName == "SELECT"){
    		if($(item.uiid).parent()[0].id != item.uiid + '_div'){
    			$(item.uiid).wrap('<div id="'+item.uiid.replace("#", '')+ '_div"></div>');
    		}
    		item.uiid = item.uiid + '_div';
    	}
	}
	// --------------------------------------------------------------------------------------
	function addGifAnimation(){
		$('#loadingIcon').after('<img src="app/images/MoneyToCard_Loop.gif" id="loadingIcon_ie8"/>');
	}
};
