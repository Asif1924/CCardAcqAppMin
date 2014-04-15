describe("runs a series of tests for the flows which have sub flows",
		function() {

			var flow;
			var flowState;

			beforeEach(function() {
				flowState = new FlowState();
				flow = Build2PageFlowWith2PageSubflow(flowState);
			});

			it(" can start flow", function() {
				flow.start;
			});

			it(" page 1 of subflow can be reached", function() {
				flow.start();
				flow.next();

				expect(flowState.page(1).getIndicator()).toEqual(1);
				expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
			});

			it(" final page can be reached by going next", function() {
				flow.start();
				flow.next();
				flow.subFlowNext();
				flow.subFlowNext();

				expect(flowState.page(3).getIndicator()).toEqual(3);
				expect(flowState.onlyIndexedPageIsVisible(3)).toBeTruthy();
				
			});

			it(" can back out of the subflow", function() {
				flow.start();
				flow.next();
				flow.subFlowBack();

				expect(flowState.page(0).getIndicator()).toEqual(0);
				expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
			});

			it(" can finish flow", function() {
				flow.start();
				flow.next();
				flow.subFlowNext();
				flow.subFlowNext();
				flow.next();
				expect(flowState.isFinished()).toBeTruthy();
			});

			it(" finishes flow and no pages are visible", function() {
				flow.start();
				flow.next();
				flow.subFlowNext();
				flow.subFlowNext();
				flow.next();

				expect(flowState.getNumberOfPagesCreated()).toEqual(4);

				expect(flowState.noPagesAreShowing());
			});

			it("can traverse out and then back in and then out again",
					function() {

						flow.start();

						expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
						flow.next();
						expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
						flow.subFlowNext();
						expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
						flow.subFlowNext();
						expect(flowState.onlyIndexedPageIsVisible(3)).toBeTruthy();

						flow.back();
						expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
						flow.subFlowBack();
						expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
						flow.subFlowBack();
						expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();

						flow.next();
						expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
						flow.subFlowNext();
						expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
						flow.subFlowNext();
						expect(flowState.onlyIndexedPageIsVisible(3)).toBeTruthy();
						
						flow.back();
						expect(flowState.onlyIndexedPageIsVisible(2)).toBeTruthy();
						flow.subFlowBack();
						expect(flowState.onlyIndexedPageIsVisible(1)).toBeTruthy();
						flow.subFlowBack();
						expect(flowState.onlyIndexedPageIsVisible(0)).toBeTruthy();
						flow.back();

						expect(flowState.noPagesAreShowing()).toBeTruthy();

						expect(flowState.page(0).getIndicator()).toEqual(0);
						expect(flowState.page(1).getIndicator()).toEqual(1);
						expect(flowState.page(2).getIndicator()).toEqual(2);
						expect(flowState.page(3).getIndicator()).toEqual(3);
						
						expect(flowState.isBackedOut()).toBeTruthy();

					});
		});