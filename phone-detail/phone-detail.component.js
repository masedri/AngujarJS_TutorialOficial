angular.module('phoneDetail').component('phoneDetail', {

	controller: ['Phone','$routeParams', /*$location --> $location.path("ruta a la que va tras realizar una función")*/
	function PhoneDetailController(Phone, $routeParams) {
		var self =  this;

		this.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
			self.setImage(phone.images[0]);
		});
	/*	$http.get('phones/' + $routeParams.phoneId + '.json').then(function(response){
			self.phone = response.data;
			self.setImage(self.phone.images[0]);

		});*/
		self.setImage = function setImage(imageUrl){
			self.mainImageUrl = imageUrl;
		};

	}
	],

	templateUrl: 'phone-detail/phone-detail.template.html'

});