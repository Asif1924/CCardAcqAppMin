// US3767
ensureNamespaceExists();

WICI.PromoCodeJoinProgram = function() {
    this.data= [        
                      { Program:null, promoCodes:[null] },
                      { Program:'INTERCEPT', promoCodes:[null, 'BLANK', '4023', 'OTHER' ] },
                      { Program:'IN_STORE_EVENTS', promoCodes:[null, 'OMCDY', 'OTHER' ] },
                      { Program:'CTP_EVENTS', promoCodes:[null, '5200', '4024' ] },                      
                      { Program:'CTP_LOCAL', promoCodes:[null, '4022', '4029' ] }
               ];
};