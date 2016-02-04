ensureNamespaceExists();
WICI.ProgramsList = function() {
    this.data= [
          { value: null, text: 'ProgramsList_null'},
          // US3767
          { value: 'INTERCEPT', text: 'Program_Intercept'},
          { value: 'IN_STORE_EVENTS', text: 'Program_In_Store_Events'},
          { value: 'CTP_EVENTS', text: 'Program_CTP_Events'},
          { value: 'CTP_LOCAL', text: 'Program_CTP_Local'}
          
          /* Old             
          { value: 'BLANK', text: 'Program_BLANK'},
          { value: '4021', text: 'Program_4012'},
          { value: '5200', text: 'Program_5200'},
          { value: '4022', text: 'Program_4022'},
          { value: '4024', text: 'Program_4024'},
          { value: '4029', text: 'Program_4029'},
          { value: 'MW999', text: 'Program_MW999'},
          { value: "other", text: 'Program_Other'},
          */
      ];    
};



