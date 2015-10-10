angular.module('photoStore.photos',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when('/photos',{
                templateUrl:'photos/photos.html',
                controller:'PhotosCtrl'
            }).
            when('/photos/:photoId',{
                templateUrl:'photos/photo-details.html',
                controller:'PhotosDetailsCtrl'
            })
    }])

.controller('PhotosCtrl',['$scope','$http',function($scope,$http){
        $http.get('json/photos.json').success(function(response){
            $scope.photos=response;
        })

    }])
    .controller('PhotosDetailsCtrl',['$scope','$http','$routeParams','$filter',function($scope,$http,$routeParams,$filter){
        var photoId= $routeParams.photoId;
        $http.get('json/photos.json').success(function(response){

                $scope.photos= $filter('filter')(response,function(d){ console.log(d);return d.id == photoId;})[0];
            console.log($scope.photos);
            $scope.mainImage= $scope.photos.images[0].name;
        });
        $scope.setImage= function(image){
            $scope.mainImage = image.name;
        }
    }]);