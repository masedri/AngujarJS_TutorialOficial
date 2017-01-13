angular.module('phoneList').component('phoneList', {

  controller: [ 'Phone', function phoneListController(Phone) {
    var self = this;
    this.orderProp = 'age';
    this.phones = Phone.query();

  /*  $http.get('phones/phones.json').then(function(response) {
      self.phones = response.data;
    });*/

  }

  ],


  templateUrl: 'phone-list/phone-list.template.html',


});
