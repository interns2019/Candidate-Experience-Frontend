app.controller('feedbackController',function($scope,$window ,$http, $location){
    $scope.question = new Array(5).fill('?')
    $scope.quality = new Array(5).fill(null)
    $scope.setScore = function(a,b)
    {
        $scope.question[a] = b
        if(b<8)
        {
            $scope.quality[a] = "Average"
        }
        else if(b<10)
        {
            $scope.quality[a] = "Satisfactory"
        }
        else{
            $scope.quality[a] = "Excellent"
        }
    }
})