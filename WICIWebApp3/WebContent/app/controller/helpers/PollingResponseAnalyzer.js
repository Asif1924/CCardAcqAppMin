ensureNamespaceExists();

WICI.PollingResponseAnalyzer =  function () { 
	
	this.isOldPendingResponse = isOldPendingResponse;
	this.isNewPendingResponse = isNewPendingResponse;

	this.isOldDeclinedResponse = isOldDeclinedResponse;
	this.isNewDeclinedResponse = isNewDeclinedResponse;
	
	this.isOldApprovedResponse = isOldApprovedResponse;
	this.isNewApprovedResponse = isNewApprovedResponse;
	
	this.isApprovedResponse = isApprovedResponse;
	this.isPendingResponse = isPendingResponse;
	this.isDeclinedResponse = isDeclinedResponse;

	this.isErrorResponse = isErrorResponse;
	this.isBadResponse = isBadResponse;
	this.isIndeterminableResponse = isIndeterminableResponse;
	
	this.isValidResponse = isValidResponse;
	
	this.getAppStatus = getAppStatus;
	this.isOldResponseType = isOldResponseType;
	this.isNewResponseType = isNewResponseType;
	
	this.getData = getData;
	this.getRetrievalToken = getRetrievalToken;
	this.getWICIResponse = getWICIResponse;
	
	this.getRetrievalCount = getRetrievalCount;
	this.isWithinRetrievalThreshold = isWithinRetrievalThreshold;
	
	this.getActivationItems = getActivationItems;
	
	this.cannotFindApp = cannotFindApp;
	
	function cannotFindApp(argResponse){
		//{"error":false,"data":{}};		
		if( argResponse && !argResponse.error && argResponse.data && $.isEmptyObject(argResponse.data)) return true;
	}
	
	function getActivationItems(argResponse){
		if( isOldResponseType(argResponse) )
			return null;
		if( isNewResponseType(argResponse) && argResponse.data.ActivationItems && argResponse.data.ActivationItems!==null )
			return argResponse.data.ActivationItems;

		return null;
	}
	
	function isWithinRetrievalThreshold( argResponse ){
		//{"error":true,"msg":"UNRETRIEVABLE"}; <-- this determines that an app is not retrievable
		
		if( argResponse && argResponse.error && argResponse.msg==="UNRETRIEVABLE" ){
			return false;
		}
		return true;

	}
	
	function getRetrievalCount( argResponse ){
		if( isOldResponseType(argResponse) )
			return null;
		if( isNewResponseType(argResponse) && argResponse.data.RetrievalCount && argResponse.data.RetrievalCount!==null ){
			if( Number(argResponse.data.RetrievalCount) === "NaN")
				return argResponse.data.RetrievalCount;
			else if( Number(argResponse.data.RetrievalCount) !=="NaN" )
				return Number(argResponse.data.RetrievalCount);
		}
		return null;
	}
	
	function getWICIResponse( argResponse ){
		if( isOldResponseType(argResponse) )
			return argResponse;
		if( isNewResponseType(argResponse) )
			return argResponse.data.ResponseData;		
	}
	
	function getRetrievalToken( argResponse ){
		if( isOldResponseType(argResponse) )
			return null;
		if( isNewResponseType(argResponse) )
			return argResponse.data.RetrievalToken;
	}
	
	function getData(argResponse ){
		if( isOldResponseType(argResponse) )
			return argResponse.data;
		if( isNewResponseType(argResponse) )
			return argResponse.data.ResponseData.data;
	}

	function getAppStatus( argResponse ){
		if( isOldResponseType(argResponse) )
			return argResponse.data.appStatus;
		if( isNewResponseType(argResponse) )
			return argResponse.data.ResponseData.data.appStatus;
	}
	
	function isNewResponseType( argResponse ){
		return ( isValidResponse(argResponse) && (isNewPendingResponse(argResponse) || isNewDeclinedResponse(argResponse) || isNewApprovedResponse(argResponse)));
	}
	
	function isOldResponseType( argResponse ){
		return ( isValidResponse(argResponse) && (isOldPendingResponse(argResponse) || isOldDeclinedResponse(argResponse) || isOldApprovedResponse(argResponse)));
	}
	
	function isValidResponse( argResponse ){
		return ( isPendingResponse(argResponse) || isApprovedResponse(argResponse) || isDeclinedResponse(argResponse) );
	}
	
	function isIndeterminableResponse( argResponse ){
		//{"error":true,"msg":"UNRETRIEVABLE"}
		if( argResponse.error && argResponse.msg==="UNRETRIEVABLE") return false;
		
		if( isOldResponseType(argResponse) || isNewResponseType(argResponse) ) return false;
		return ( (argResponse && (argResponse.data===1 || $.isEmptyObject(argResponse.data))) || (typeof argResponse.data.ResponseData==="undefined") ); 
		
	}
	
	function isBadResponse( argResponse ){
		return ( argResponse===null || $.isEmptyObject(argResponse)  );
	}
	
	function isPendingResponse( argResponse ){
		//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
		return ( isOldPendingResponse(argResponse) || isNewPendingResponse(argResponse)  );
	}
	
	function isApprovedResponse( argResponse ){
		return ( isOldApprovedResponse(argResponse) || isNewApprovedResponse(argResponse)  );
	}
	
	function isDeclinedResponse( argResponse ){
		//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
		return ( isOldDeclinedResponse(argResponse) || isNewDeclinedResponse(argResponse)  );
	}	
	//Error
	//{"error":true,"msg":"com.channel.ctfs.ctc.www.MessageFault"}
	//{"error":true,"msg":" : Content is not allowed in prolog."}
	//{"error":true,"msg":"Internal Error"}
	//{"error":true,"msg":"java.lang.NullPointerException"}
	function isErrorResponse( argResponse ){
        //{"error":false,"msg":"","data":{"appStatus":"PENDING"}}

			// US3626		   
            if((argResponse && argResponse.error ) || (argResponse && !argResponse.error && argResponse.data  && argResponse.data.ResponseData && _.isEmpty(argResponse.data.ResponseData.data) ) )
        	{
        	  return true;
        	}
		
        return ( (argResponse && argResponse.error) || (argResponse && !argResponse.error && argResponse.data && argResponse.data.ResponseData && argResponse.data.ResponseData.error)  );
  }

  //Pending
  function isOldPendingResponse( argResponse ){
        if(typeof argResponse === 'undefined' || argResponse===null ){
              return false;
        }
        //{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
        return ( argResponse && !argResponse.error && argResponse.data && argResponse.data.appStatus==="PENDING" ) ;
  }
  
  function isNewPendingResponse( argResponse){
        if(typeof argResponse === 'undefined' || argResponse===null ){
              return false;
        }
        
        //{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}
        return ( argResponse && !argResponse.error && argResponse.msg==="PENDING" && argResponse.data && argResponse.data.ResponseData && argResponse.data.ResponseData.data.appStatus==="PENDING" && argResponse.data.RetrievalToken && argResponse.data.RetrievalToken!=="" && argResponse.data.TransactionState && argResponse.data.TransactionState==="PENDING" ) ;
  }

  //Declined
  function isOldDeclinedResponse( argResponse ){
        if(typeof argResponse === 'undefined' || argResponse===null ){
              return false;
        }
        
        //{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
        return ( argResponse && !argResponse.error && argResponse.data && argResponse.data.appStatus==="DECLINED" ) ;
  }
  
  function isNewDeclinedResponse( argResponse){
        if(typeof argResponse === 'undefined' || argResponse===null ){
              return false;
        }
       
        //{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
        return ( argResponse && !argResponse.error && argResponse.msg==="COMPLETE" && argResponse.data && argResponse.data.ResponseData && argResponse.data.ResponseData.data.appStatus==="DECLINED" && argResponse.data.RetrievalToken && argResponse.data.RetrievalToken!=="" && argResponse.data.TransactionState && argResponse.data.TransactionState==="COMPLETE" ) ;
  }

  //Approved
  function isOldApprovedResponse( argResponse ){
        //{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
        if(typeof argResponse === 'undefined' || argResponse===null ){
              return false;
        }
        
        return ( argResponse && !argResponse.error && argResponse.data && argResponse.data.appStatus==="APPROVED" && argResponse.data.accountNumber!=="" && argResponse.data.expiryDate!=="") ;
  }
  
  function isNewApprovedResponse( argResponse){
        if(typeof argResponse === 'undefined' || argResponse===null ){
              return false;
        }     
       
        //{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
        return ( argResponse && !argResponse.error && argResponse.msg==="COMPLETE" && argResponse.data && argResponse.data.ResponseData && argResponse.data.ResponseData.data.appStatus==="APPROVED" && argResponse.data.ResponseData.data.accountNumber!=="" && argResponse.data.ResponseData.data.expiryDate!=="" && argResponse.data.RetrievalToken && argResponse.data.RetrievalToken!=="" && argResponse.data.TransactionState && argResponse.data.TransactionState==="COMPLETE" ) ;
  }

};