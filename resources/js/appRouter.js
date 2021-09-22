// Create main app module for the main core application (index.html)
var mainApp = angular.module("microLearningApp", ['ngRoute']);

mainApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $routeProvider.when("/", { title: "Trang Chủ - AVA Micro Learning", templateUrl:"resources/pages/homepage.html"})
        .when("/courses", { title: "Khóa Học - AVA Micro Learning", templateUrl: "resources/pages/courses.html" })
        .when("/media", { title: "Tài Nguyên - AVA Micro Learning", templateUrl: "resources/pages/media.html" })
        .when("/timetable", { title: "Thời Khóa Biểu - AVA Micro Learning", templateUrl: "resources/pages/timetable.html" })
        .when("/revision", { title: "Ôn Tập - AVA Micro Learning", templateUrl: "resources/pages/revision.html" })
        .when("/assessment", { title: "Thành Tích Học Tập - AVA Micro Learning", templateUrl: "resources/pages/assessment.html" })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(false);
}]);

mainApp.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });
}]);