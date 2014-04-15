ensureNamespaceExists();

//luk: old name: WICIWebApp.store.Provinces
//list of all possible provinces

WICI.ProvincesList = function() {
    this.data= [
          { value: null, text: 'ProvincesList_null'},
          { value: 'AB', text: 'ALBERTA'},
          { value: 'BC', text: 'BRITISH COLUMBIA'},
          { value: 'MB', text: 'MANITOBA'},
          { value: 'NB', text: 'NEW BRUNSWICK'},
          { value: 'NL', text: 'NEWFOUNDLAND & LABRADOR'},
          { value: 'NS', text: 'NOVA SCOTIA'},
          { value: 'NT', text: 'NORTHWEST TERRITORIES'},
          { value: 'NU', text: 'NUNAVUT'},
          { value: 'ON', text: 'ONTARIO'},
          { value: 'PE', text: 'PRINCE EDWARD ISLAND'},
          { value: 'QC', text: 'QUEBEC'},
          { value: 'SK', text: 'SASKATCHEWAN'},
          { value: 'YT', text: 'YUKON'}
      ];
};
