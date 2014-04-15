ensureNamespaceExists();

BRB.PrintHelper = function() {
	this.print = print;
	this.getHead = getHead;
	this.getBody = getBody;
	this.getDataState = getDataState;
	this.createIframe = createIframe;
	
	function print(elment) {
		$("iframe").remove();
		var ele = this.getDataState($(elment));
		var innerDoc;
		var windowToPrint;

		var f = new this.createIframe();
		innerDoc = f.doc;
		windowToPrint = f.contentWindow || f;

		innerDoc.open();
		innerDoc.write("<html>" + this.getHead() + this.getBody(ele) + "</html>");
		$(innerDoc.getElementById('img2')).on('load', function() {
			BRB.Log("on 'load'");
			windowToPrint.print();
		});
		innerDoc.close();
		windowToPrint.focus();
	}
	
	function getHead() {
		var head = "<head><style>"
				+ "      .personalTitle {\n"
				+ "                margin-top: 27px;\n"
				+ "            }\n"
				+ "            .pageSubTitle {\n"
				+ "                font-family: Arial, Helvetica, sans-serif;\n"
				+ "                font-size: 18px;\n"
				+ "                padding-left: 6px;\n"
				+ "            }\n"
				+ "            .floatLeftSpan {\n"
				+ "                float: left;\n"
				+ "            }\n"
				+ "            .print_button, .button, .buttonText {\n"
				+ "                display: none;\n"
				+ "            }\n"
				+ "            .stretchThisTable {\n"
				+ "                width: 100%;\n"
				+ "            }\n"
				+ "            .grayTable {\n"
				+ "                border: 0px;\n"
				+ "                border: 0px;\n"
				+ "                border-top: 1px solid #CCCCCC;\n"
				+ "                border-bottom: 1px solid #CCCCCC;\n"
				+ "                border-radius: 0px;\n"
				+ "            }\n"
				+ "            .grayTable tr td {\n"
				+ "                border: 0px;\n"
				+ "            }\n"
				+ "            .grayTableSpacerTop {\n"
				+ "                padding-top: 22px;\n"
				+ "            }\n"
				+ "            .fieldLabelsCell {\n"
				+ "                font-family: Arial, Helvetica, sans-serif;\n"
				+ "                font-size: 14px;\n"
				+ "                padding-left: 15px;\n"
				+ "                text-align: left;\n" + "            }\n"
				+ "            .fieldCellSize25 {\n"
				+ "                width: 145px;\n" + "            }\n"
				+ "            .fieldCellWidth170 {\n"
				+ "                width: 170px;\n" + "            }\n"
				+ "            .fieldLabelsSubCell {\n"
				+ "                height: 10px;\n"
				+ "                text-align: left;\n" + "            }\n"
				+ "            .print_header {\n" + "            }\n"
				+ "				   display: block;\n" + "            }\n"
				+ "                width: 100%;\n"
				+ "            .print_header img{\n" + "            }\n"
				+ "                width: 100%;\n"
				+ "            .confirmationSeparatorCell {\n"
				+ "                width: 7px;\n"
				+ "                text-align: center;\n"
				+ "                min-width: 7px;\n" + "            }\n"
				+ "            .grayTableForInputsGroup {\n"
				+ "                border: 0px;\n"
				+ "                display: block;\n" + "            }\n"
				+ "            .grayTableForInputsGroup tr td {\n"
				+ "                border: 0px;\n"
				+ "                padding: 0px;\n"
				+ "                height: 25px;\n" + "            }"
				+ "</style></head>";
		return head;
	}

	function getBody(elementToPrint) {
		return '<body><div class="' + $(elementToPrint).attr("class") + '">'
				+ $(elementToPrint).html() + '</div></body>';
	}

	function getDataState(element) {
		var copy = element.clone();
		var inputs = $("input,select,textarea", copy);
		$("input,select,textarea", element).each(
				function(i) {
					var type = $(this).attr("type");
					if (type == undefined)
						type = $(this).is("select") ? "select" : $(this).is(
								"textarea") ? "textarea" : "";
					var input = inputs.eq(i);
					if (type == "radio" || type == "checkbox")
						input.attr("checked", $(this).is(":checked"));
					else if (type == "text")
						input.attr("value", $(this).val());
					else if (type == "textarea")
						input.text($(this).val());
					else if (type == "select")
						$(this).find("option").each(
								function(i) {
									if ($(this).is(":selected"))
										$("option", input).eq(i).attr(
												"selected", true);
								});
				});
		return copy;
	}

	function createIframe() {
		var _style = 'border:0;position:absolute;width:0px;height:0px;left:0px;top:0px;';
		var iframe;
		try {
			iframe = document.createElement('iframe');
			document.body.appendChild(iframe);
			$(iframe).attr({
				style : _style,
				src : ""
			});
			iframe.doc = null;
			iframe.doc = iframe.contentDocument ? iframe.contentDocument
					: (iframe.contentWindow ? iframe.contentWindow.document
							: iframe.document);
		} catch (e) {
			throw e + ".iframes not supported";
		}
		if (iframe.doc == null)
			throw "document not found";
		return iframe;
	}
};