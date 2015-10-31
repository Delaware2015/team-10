angular.module('starter.controllers', ['starter.services', 'ngOpenFB'])

.controller('GeneralCtrl', function($scope, DonorFactory) {
  $scope.data = {};
          $scope.data.email = DonorFactory.getEmail();
          $scope.data.zipcode = DonorFactory.getZipcode();
          $scope.data.password = DonorFactory.getPassword();
          $scope.data.name = DonorFactory.getName();
          $scope.data.id = DonorFactory.getId();
})

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

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, ngFB) {
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
                // $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
    }
})

.controller('SignUpCtrl', function($scope, $ionicPopup, $state, DonorFactory) {
    $scope.data = {};

    $scope.signup = function() {
        DonorFactory.createDonor($scope.data.email, $scope.data.zip, $scope.data.pass)
        .then(function(data){
          $scope.data.response = data;

          // console.log($scope.data.response.data);
          $state.go('tab.general');
        })
         
        
    }
})

.controller('ItemsCtrl', function($scope, $ionicPopup, $state) {
    $scope.data = {};
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
    });
})

.controller('CompleteCtrl', function($scope, $ionicPopup, $state, ngFB) {
    $scope.data = {};
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = true;
    });
    $scope.share = function (event) {
    ngFB.api({
        method: 'POST',
        path: '/me/feed',
        params: {
            message: "I just donated $31 to Goodwill in Newark, DE!"
        }
    }).then(
        function () {
            alert('The session was shared on Facebook');
        },
        function () {
            alert('An error occurred while sharing this session on Facebook');
        });
    }
  })

