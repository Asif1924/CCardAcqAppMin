describe("PollingResponseAnalyzerTest", function() {

	var sut;

	beforeEach(function() {
		sut = new WICI.PollingResponseAnalyzer();
	});	

	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}	
	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}	
	it("can get WICI Response Object from OLD or NEW Response", function() {

		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		
		expect(sut.getWICIResponse(oldPendingResponse)).toEqual({"error":false,"msg":"","data":{"appStatus":"PENDING"}});
		expect(sut.getWICIResponse(newPendingResponse)).toEqual({"error":false,"msg":"","data":{"appStatus":"PENDING"}});
		
		expect(sut.getWICIResponse(oldDeclinedResponse)).toEqual({"error":false,"msg":"","data":{"appStatus":"DECLINED"}});
		expect(sut.getWICIResponse(newDeclinedResponse)).toEqual({"error":false,"msg":"","data":{"appStatus":"DECLINED"}});
		
		expect(sut.getWICIResponse(oldApprovedResponse)).toEqual({"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}});
		expect(sut.getWICIResponse(newApprovedResponse)).toEqual({"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}});		
		
	});		
	
	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}	
	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}	
	it("can get Retrieval Token only from New Response", function() {

		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}
		var testResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		
		expect(sut.getRetrievalToken(oldPendingResponse)).toEqual(null);
		expect(sut.getRetrievalToken(newPendingResponse)).toEqual("AF9AFE63F734");
		expect(sut.getRetrievalToken(testResponse)).toEqual("AF9AFE63F734");
		
		expect(sut.getRetrievalToken(oldDeclinedResponse)).toEqual(null);
		expect(sut.getRetrievalToken(newDeclinedResponse)).toEqual("AF9AFE63F734");
		
		expect(sut.getRetrievalToken(oldApprovedResponse)).toEqual(null);
		expect(sut.getRetrievalToken(newApprovedResponse)).toEqual("AF9AFE63F734");		
		
	});	

	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}	
	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}	
	it("can get Data Object from OLD or NEW Response", function() {

		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		
		expect(sut.getData(oldPendingResponse)).toEqual({"appStatus":"PENDING"});
		expect(sut.getData(newPendingResponse)).toEqual({"appStatus":"PENDING"});
		
		expect(sut.getData(oldDeclinedResponse)).toEqual({"appStatus":"DECLINED"});
		expect(sut.getData(newDeclinedResponse)).toEqual({"appStatus":"DECLINED"});
		
		expect(sut.getData(oldApprovedResponse)).toEqual({"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"});
		expect(sut.getData(newApprovedResponse)).toEqual({"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"});		
		
	});		
	
	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}	
	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}	
	it("can get appStatus from OLD or NEW Response", function() {

		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		
		expect(sut.getAppStatus(oldPendingResponse)).toEqual("PENDING");
		expect(sut.getAppStatus(newPendingResponse)).toEqual("PENDING");
		
		expect(sut.getAppStatus(oldDeclinedResponse)).toEqual("DECLINED");
		expect(sut.getAppStatus(newDeclinedResponse)).toEqual("DECLINED");
		
		expect(sut.getAppStatus(oldApprovedResponse)).toEqual("APPROVED");
		expect(sut.getAppStatus(newApprovedResponse)).toEqual("APPROVED");		
		
	});	
	
	it("can determine if Response is OLD or NEW", function() {

		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		
		expect(sut.isOldResponseType(oldPendingResponse)).toEqual(true);
		expect(sut.isNewResponseType(oldPendingResponse)).toEqual(false);
		
		expect(sut.isOldResponseType(newPendingResponse)).toEqual(false);
		expect(sut.isNewResponseType(newPendingResponse)).toEqual(true);
		
		expect(sut.isOldResponseType(oldDeclinedResponse)).toEqual(true);
		expect(sut.isNewResponseType(oldDeclinedResponse)).toEqual(false);
		expect(sut.isOldResponseType(newDeclinedResponse)).toEqual(false);
		expect(sut.isNewResponseType(newDeclinedResponse)).toEqual(true);
		
		expect(sut.isOldResponseType(oldApprovedResponse)).toEqual(true);
		expect(sut.isNewResponseType(oldApprovedResponse)).toEqual(false);
		expect(sut.isOldResponseType(newApprovedResponse)).toEqual(false);		
		expect(sut.isNewResponseType(newApprovedResponse)).toEqual(true);
	});
		
	it("considers an Indeterminable Response to be one that exists but its fields cannot be parsed", function() {

		var responseExistsButNoValues = {"error":"","msg":"", "data":""};
		var responseExistsButOnlySomeValues = {"error":false,"msg":"", "data":1};
		var responseFromTestFile = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newPendingResponseButNoResponseData = {"error":false,"msg":"PENDING","data":{"RetrievalToken":"7D76BE4613E6","TransactionState":"PENDING"}};
		
		expect(sut.isIndeterminableResponse(responseExistsButNoValues)).toEqual(true);
		expect(sut.isIndeterminableResponse(responseExistsButOnlySomeValues)).toEqual(true);
		expect(sut.isIndeterminableResponse(responseFromTestFile)).toEqual(false);
		expect(sut.isIndeterminableResponse(newPendingResponseButNoResponseData)).toEqual(true);
		
	});
	
	it("considers a Bad Response to be one that is undefined, null or empty object", function() {

		var responseNotInstantiated;		
		var responseUndefined = undefined;		
		var responseBlankObject = {};
		var responseNull = null;
		
		expect(sut.isBadResponse(responseNotInstantiated)).toEqual(true);		
		expect(sut.isBadResponse(responseUndefined)).toEqual(true);
		expect(sut.isBadResponse(responseBlankObject)).toEqual(true);
		expect(sut.isBadResponse(responseNull)).toEqual(true);
		
	});
	
	//{"error":true,"msg":"com.channel.ctfs.ctc.www.MessageFault"}
	//{"error":true,"msg":" : Content is not allowed in prolog."}
	//{"error":true,"msg":"Internal Error"}
	//{"error":true,"msg":"java.lang.NullPointerException"}
	it("can determine if a Response is an Error", function() {

		var errorResponse = {"error":true,"msg":"com.channel.ctfs.ctc.www.MessageFault"};		
		expect(sut.isErrorResponse(errorResponse)).toEqual(true);
		
		errorResponse = {"error":true,"msg":" : Content is not allowed in prolog."};		
		expect(sut.isErrorResponse(errorResponse)).toEqual(true);

		errorResponse = {"error":true,"msg":"Internal Error"};		
		expect(sut.isErrorResponse(errorResponse)).toEqual(true);
		
		errorResponse = {"error":true,"msg":"java.lang.NullPointerException"};		
		expect(sut.isErrorResponse(errorResponse)).toEqual(true);
	});

	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}	
	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	it("can determine a Valid Response for BOTH NEW and OLD Responses", function(){
		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};

		expect(sut.isValidResponse(oldPendingResponse)).toEqual(true);
		expect(sut.isValidResponse(newPendingResponse)).toEqual(true);
		expect(sut.isValidResponse(oldDeclinedResponse)).toEqual(true);
		expect(sut.isValidResponse(newDeclinedResponse)).toEqual(true);
		expect(sut.isValidResponse(oldApprovedResponse)).toEqual(true);
		expect(sut.isValidResponse(newApprovedResponse)).toEqual(true);

		var errorResponse = {"error":true,"msg":"com.channel.ctfs.ctc.www.MessageFault"};
		expect(sut.isValidResponse(errorResponse)).toEqual(false);
		
	});
	
	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}	
	it("can determine a Pending Response for BOTH NEW and OLD Responses", function(){
		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};

		expect(sut.isPendingResponse(oldPendingResponse)).toEqual(true);
		expect(sut.isPendingResponse(newPendingResponse)).toEqual(true);
		
	});

	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	it("can determine a Declined Response for BOTH NEW and OLD Responses", function(){
		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};

		expect(sut.isDeclinedResponse(oldDeclinedResponse)).toEqual(true);
		expect(sut.isDeclinedResponse(newDeclinedResponse)).toEqual(true);
		
	});

	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	it("can determine an Approved Response for BOTH NEW and OLD Responses", function(){
		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
		var responseFromTestFile = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		var responseFromAPPR1 = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		
		var responseNotInstantiated;		
		var responseUndefined = undefined;		
		var responseBlankObject = {};
		var responseNull = null;
		
		expect(sut.isApprovedResponse(oldApprovedResponse)).toEqual(true);
		expect(sut.isApprovedResponse(newApprovedResponse)).toEqual(true);
		expect(sut.isApprovedResponse(responseFromTestFile)).toEqual(true);
		expect(sut.isApprovedResponse(responseFromAPPR1)).toEqual(true);

		expect(sut.isApprovedResponse(responseNotInstantiated)).toEqual(false);		
		expect(sut.isApprovedResponse(responseUndefined)).toEqual(false);		
		expect(sut.isApprovedResponse(responseBlankObject)).toEqual(false);		
		expect(sut.isApprovedResponse(responseNull)).toEqual(false);		
		
	});
	
	//{"error":false,"msg":"","data":{"appStatus":"PENDING"}}
	it("can determine if a Pending Response is old", function() {

		var oldPendingResponse = {"error":false,"msg":"","data":{"appStatus":"PENDING"}};
		
		expect(sut.isOldPendingResponse(oldPendingResponse)).toEqual(true);
		expect(sut.isNewPendingResponse(oldPendingResponse)).toEqual(false);
	});
	
	//{"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}}
	it("can determine if a Pending Response is new", function() {

		var newPendingResponse = {"error":false,"msg":"PENDING","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"PENDING"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"PENDING"}};
				
		expect(sut.isNewPendingResponse(newPendingResponse)).toEqual(true);
		expect(sut.isOldPendingResponse(newPendingResponse)).toEqual(false);
	});

	//{"error":false,"msg":"","data":{"appStatus":"DECLINED"}}
	it("can determine if a Declined Response is old", function() {

		var oldDeclinedResponse = {"error":false,"msg":"","data":{"appStatus":"DECLINED"}};
		
		expect(sut.isOldDeclinedResponse(oldDeclinedResponse)).toEqual(true);
		expect(sut.isNewDeclinedResponse(oldDeclinedResponse)).toEqual(false);
	});	
	
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	it("can determine if a Declined Response is new", function() {

		var newDeclinedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"appStatus":"DECLINED"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
				
		expect(sut.isNewDeclinedResponse(newDeclinedResponse)).toEqual(true);
		expect(sut.isOldDeclinedResponse(newDeclinedResponse)).toEqual(false);
	});
	
	//{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}}
	it("can determine if an Approved Response is old", function() {

		var oldApprovedResponse = {"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}};
		
		expect(sut.isOldApprovedResponse(oldApprovedResponse)).toEqual(true);
		expect(sut.isNewApprovedResponse(oldApprovedResponse)).toEqual(false);
	});	
	
	//{"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}}
	it("can determine if an Approved Response is new", function() {

		var newApprovedResponse = {"error":false,"msg":"COMPLETE","data":{"ResponseData":{"error":false,"msg":"","data":{"accountNumber":"maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=","expiryDate":"1811","creditLimit":"5000","apr":"19.99","cashAPR":"21.99","appStatus":"APPROVED","customerValueInd":"0"}},"RetrievalToken":"AF9AFE63F734","TransactionState":"COMPLETE"}};
				
		expect(sut.isNewApprovedResponse(newApprovedResponse)).toEqual(true);
		expect(sut.isOldApprovedResponse(newApprovedResponse)).toEqual(false);
	});
	
	
	
});