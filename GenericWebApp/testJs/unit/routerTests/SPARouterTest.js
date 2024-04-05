describe("SPARouter Test",
		function() {
			
			var flow;
			var flowState;
	
			beforeEach(function() {
				flowState = new FlowState();
				flow = BuildFlowWith3DummyPages(flowState);
			});
			
			it(" can be created", function() {
				new GENERICWEBAPP.SPARouter();
			});

			it(" can start flow", function() {
				flow.start;
			});

            it(" can setActiveScreenName on flow", function() {
                flow.setActiveScreenName("test");
            });

			it(" page 1 is reached", function() {
				flow.start();

				expect(flowState.page(0).getIndicator()).toEqual(0);
				expect(flowState.page(0).isShowing()).toBeTruthy();
			});

			it(" page 2 can be reached by going to next", function() {
				flow.start();

				flow.next();

				expect(flowState.page(1).getIndicator()).toEqual(1);
				expect(flowState.page(1).isShowing()).toBeTruthy();
			});

            it(" page 2 can be reached by going to next", function() {
                flow.start();

                flow.nextWithAnimation();

                expect(flowState.page(1).getIndicator()).toEqual(1);
                expect(flowState.page(1).isShowing()).toBeTruthy();
            });

			it(" page 2 can be reached by going to page 3 then back", function() {
				flow.start();
				flow.next();
				flow.next();

				expect(flowState.page(2).getIndicator()).toEqual(2);
				expect(flowState.page(2).isShowing()).toBeTruthy();

				flow.back();
				expect(flowState.page(1).getIndicator()).toEqual(1);
				expect(flowState.page(1).isShowing()).toBeTruthy();
			});

			
			it(" page 2 can be reached by going to page 3 then back and only page 2 is showing", function() {
				flow.start();
				flow.next();
				flow.next();

				expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();

				flow.back();

				expect(flowState.getNumberOfPagesCreated()).toEqual(3);
				expect(flowState.page(1).getIndicator()).toEqual(1);
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
			});

			it(" can back out of the flow", function() {
				flow.start();
				flow.back();
				expect(flowState.isBackedOut()).toBeTruthy();
			});
			
			it(" can call back with failure", function() {
				flow.start();
				flow.next();
				flow.backWithFailure();
				expect(flowState.page(0).timesReturnedFromFailure()).toEqual(1);
			});

			it(" can finish flow", function() {
				flow.start();
				flow.next();
				flow.next();
				flow.next();
				flow.next();
				flow.next();
				expect(flowState.isFinished()).toBeTruthy();
			});

			it(" finishes flow and no pages are visible", function() {
				flow.start();
				flow.next();
				flow.next();
				flow.next();
				flow.next();
				flow.next();

				expect(flowState.getNumberOfPagesCreated()).toEqual(5);
				expect(flowState.noPagesAreShowing()).toBeTruthy();
			});

			it(" uses the failure transition of a page and exits when it is an exit transition", function() {
				flow.start();
				flow.nextAfterFailure();
				expect(flowState.getNumberOfPagesCreated()).toEqual(1);
				expect(flowState.noPagesAreShowing()).toBeTruthy();
			});
			
			it(" uses no transition when none is defined", function() {
				flow.start();
				flow.next();
				flow.nextAfterFailure();
				expect(flowState.getNumberOfPagesCreated()).toEqual(2);
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
			});
			
			it(" halts abruptly properly", function() {
				flow.start();
				flow.forceExitFlow();
				expect(flowState.isHalted()).toBeTruthy();
			});
			
			it(" order of travel is as expected, page 0 1 0 1 2 1 0 1 2", function() {
				flow.start();
				expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
				
				flow.back();
				expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
				
				flow.back();
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
				
				flow.back();
				expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
			});
			
			it(" order of travel is 0 1 2 3 4", function() {
				flow.start();
				expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(3)).toBeTruthy();
				
				flow.next();
				expect(flowState.onlyIndexedPageIsVisible(4)).toBeTruthy();
				
			});
		});