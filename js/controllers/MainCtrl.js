stockPrices.controller('MainCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {

        $scope.processData = function(allText) {
            // split content based on new line
            var allTextLines = allText.split(/\r\n|\n/);

            var headers = allTextLines[0].split(',');
            var lines = [],
                i = 0,
                l = allTextLines.length;

            for ( i; i < l; i++) {
                if (allTextLines[i].indexOf(',') != -1){
                    // split content based on comma
                    var data = allTextLines[i].split(',');
                    if (data.length == headers.length) {
                        var tarr = [];
                        for ( var j = 0; j < headers.length; j++) {
                            tarr.push(data[j]);
                        }
                        lines.push(tarr);

                    }
                }
            }
            $scope.data = lines;
        };

        $scope.processDeltas = function(data){
            // split content based on new line
            var allTextLines = data.split(/\r\n|\n/);
            var deltaTable = [],
                deltasDict = [],
                i = 0,
                l = allTextLines.length,
                totalTimeout = 0;
            for (i; i < l; ++i){
                if (allTextLines[i].indexOf(',') != -1){
                    var row = allTextLines[i].split(',');
                    deltaTable.push(row);
                } else if (allTextLines[i] != ''){
                    var timeOut = allTextLines[i];

                    totalTimeout += +timeOut;
                    deltasDict.push({
                        timeout: totalTimeout,
                        deltaTable: deltaTable
                    });
                    deltaTable = [];
                }
            }

            console.log(deltasDict);
        };

        $scope.$on('fileLoaded', function(event, data){
            $scope.processDeltas(data);
        });

        $http.get('data/snapshot.csv').success($scope.processData);
    }
]);