stockPrices.directive("fileUpload",["$rootScope",function(e){return{restrict:"A",scope:{deltas:"="},link:function(t,n){n.on("click",function(){var n=document.getElementById("file").files[0],i=new FileReader;i.onloadend=function(n){t.deltas=n.target.result,e.$broadcast("fileLoaded",t.deltas)},i.readAsBinaryString(n)})}}}]);