stockPrices.directive('fileUpload', [
    '$rootScope',
    function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element) {
               element.on('click', function(){

                   var f = document.getElementById('file').files[0],
                       r = new FileReader();
                   r.onloadend = function(e){
                       scope.deltas = e.target.result;
                       $rootScope.$broadcast('fileLoaded', scope.deltas);
                   };
                   r.readAsBinaryString(f);
               })
            }
        }
    }
]);