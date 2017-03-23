// US4281
BRB.DictionaryInfoHelper =  function (argDictionaryInfo ) { 
	
	var urls = {
		en: 'DictionaryURLEnglish',
		fr: 'DictionaryURLFrench'
	};

	this.dictionaryInfoExists = dictionaryInfoExists;
	this.dictionaryInfoIsValid = dictionaryInfoIsValid;
	this.getLatestDictionaryVersion = getLatestDictionaryVersion;
	this.getLatestDictionaryURLEnglish = getLatestDictionaryURLEnglish;
	this.getLatestDictionaryURLFrench = getLatestDictionaryURLFrench;
	this.getOlderDictionaryAllowable = getOlderDictionaryAllowable;
	this.getLatestDictionaryInfo = getLatestDictionaryInfo;
	this.getDictionaryUrl = getDictionaryUrl;
	this.setDictionaryInfo = setDictionaryInfo;
	
	function setDictionaryInfo( argNewDictionaryInfo ){
		argDictionaryInfo = argNewDictionaryInfo;
	}
	
	function dictionaryInfoExists(){	
		return ( argDictionaryInfo!=null && !$.isEmptyObject(argDictionaryInfo) );
	}
	function dictionaryInfoIsValid(){		
		return ( dictionaryInfoExists() && argDictionaryInfo.OlderDictionaryAllowable!=null &&
				argDictionaryInfo.LatestDictionaryVersion!=null &&
				argDictionaryInfo.DictionaryURLEnglish!=null &&
				argDictionaryInfo.DictionaryURLFrench!=null 
					);
	}
	function getLatestDictionaryVersion()
	{
		return argDictionaryInfo.LatestDictionaryVersion;
	}
	function getLatestDictionaryURLEnglish()
	{
		return argDictionaryInfo.DictionaryURLEnglish;
	}
	function getLatestDictionaryURLFrench()
	{
		return argDictionaryInfo.DictionaryURLFrench;
	}
	function getOlderDictionaryAllowable(){
		return argDictionaryInfo.OlderDictionaryAllowable;
	}
	function getLatestDictionaryInfo()
	{
		return argDictionaryInfo;
	}
	function getDictionaryUrl (lan) {
		return argDictionaryInfo[urls[lan]];
	}
};