var app=angular.module("myApp",[]);
app.controller("myctrl",function($scope){
$scope.comment=[];
    $scope.comments=function(data){
        if($scope.form !='' && $scope.form !=null){
            $scope.comment.push(data);
            $scope.form={username:'',comment:''};
        } else
        {
            alert("Please enter Name and Comment..!!")
        }
    }
   
   
});