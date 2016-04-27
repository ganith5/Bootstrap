var myApp = angular.module('applicant',[]);


myApp.controller('ApplicantController',['$log', 'SaveOrUpdateService', 'DeleteService',
    function($log, SaveOrUpdateService, DeleteService){
    var user = {};
    user.firstName = "Peter";
    user.lastName = "Seth";
    user.email = "harvey-seth@gmail.com";

    this.add = function (user){
        $log.debug('inside add..' + user);
        if(SaveOrUpdateService.saveOrUpdate(user)){
            this.successMsg = 'Applicant ' + user.firstName +' '+user.lastName + ' Created!';
        }
    };

    this.delete = function (user) {
        if(DeleteService.delete(user)){
            this.successMsg = 'Applicant ' + user.firstName +' '+user.lastName + ' Deleted!';

        }
    };
}]);

myApp.factory('SaveOrUpdateService',['$log','$http', function($log,$http){
    var factory = {};

    factory.saveOrUpdate = function(userInfo) {
        $log.info('Persisting ' + userInfo.firstName);
        $http.get("test.json").then(function(response){
            return true;
        }).then(function(response){
            return false;
        })
        return true;
    }

    return factory;
}]);

myApp.service('DeleteService',['$log',function($log){
    this.delete = function(userInfo){
        $log.info('User '+ userInfo.firstName + ' deleted!');
        return true;
    }
}]);

