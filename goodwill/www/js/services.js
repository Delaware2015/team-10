angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'team10' && pw == 'password') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('DonorFactory', function($http, $q){
    var service = {};
    var baseUrl = 'http://localhost:8080/';
    var donor = {};
    var email = '';
    var zipcode = '';
    var password = '';
    var name = '';
    var id;
    var createUrl = '';
    var readUrl = '';
    var data = {};
    var sid = 0;

    var makeCreateUrl = function (_email, _zipcode, _password){
        
        createUrl = baseUrl + 'create?email=' + _email + '&zipcode=' + _zipcode + '&password=' + _password;
        return createUrl;
    }

    service.setName = function(_sName){
        sName = _sName;}

    
    service.getEmail = function(){
        return email;
    }

    service.getZipcode = function(){
        return zipcode;
    }

    service.getPassword = function(){
        return password;
    }

    service.getName = function(){
        return name;
    }

    service.getId = function(){
        return id;
    }

    service.createDonor = function(_email, _zipcode, _password){
        makeCreateUrl(_email, _zipcode, _password);
        var deferred = $q.defer();
        $http.get(createUrl)
        .then(function successCallback(response){
            deferred.resolve(response);
            donor = angular.fromJson(response.data);
            console.log(donor);
            email = donor.email;
            zipcode = donor.zipcode;
            password = donor.password;
            name = donor.name;
            id = donor.id;

        })
        return deferred.promise;
    }

    return service;

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
