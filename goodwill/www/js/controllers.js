angular.module('starter.controllers', ['starter.services', 'ngOpenFB'])

.controller('GeneralCtrl', function($scope) {})

.controller('DonateCtrl', function($scope, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.data = {};

  $scope.items = function() {
        $state.go('items');
    }

    $scope.complete = function() {
        $state.go('complete');
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ShopCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SearchCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, ngFB, DonorFactory) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.general');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

    $scope.signup = function() {
        $state.go('signup');
    }

    $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
        function (response) {
            if (response.status === 'connected') {
                $state.go('tab.general');
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
    }
})

.controller('SignUpCtrl', function($scope, $ionicPopup, $state, DonorFactory) {
    $scope.data = {};

    $scope.signup = function() {
        $scope.data.donor = DonorFactory.createDonor($scope.data.email, $scope.data.zip, $scope.data.pass);
        // $state.go('tab.general');
        console.log($scope.data.donor);
    }
})

.controller('ItemsCtrl', function($scope, $ionicPopup, $state) {
    $scope.data = {};
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
    });
})

.controller('CompleteCtrl', function($scope, $ionicPopup, $state) {
    $scope.data = {};
})

