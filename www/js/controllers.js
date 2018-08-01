angular.module('starter.controllers', [
  'toastr',
  'ionic-datepicker'
])

.controller('DashCtrl', function($scope, $http , toastr) {
  activate();
  function activate(){
    $scope.currentDate = new Date();
    $scope.progress = true;
    $http.get('http://ec2-13-232-169-227.ap-south-1.compute.amazonaws.com:8080/getTokens?date=' + $scope.currentDate.getDate()+'-'+ ($scope.currentDate.getMonth()+1) +'-'+$scope.currentDate.getFullYear())
      .then(
      function (response) {
        if(response.data.data.length == 0){
          $scope.currentDayTokens = [
            {
              time:'12:00 AM',
              key:null
            },
            {
              time:'12:15 AM',
              key:null
            },
            {
              time:'12:30 AM',
              key:null
            },
            {
              time:'12:45 AM',
              key:null
            },
            {
              time:'01:00 AM',
              key:null
            },
            {
              time:'01:15 AM',
              key:null
            },
            {
              time:'01:30 AM',
              key:null
            },
            {
              time:'01:45 AM',
              key:null
            },
            {
              time:'02:00 AM',
              key:null
            },
            {
              time:'02:15 AM',
              key:null
            },
            {
              time:'02:30 AM',
              key:null
            },
            {
              time:'02:45 AM',
              key:null
            },
            {
              time:'03:00 AM',
              key:null
            },
            {
              time:'03:15 AM',
              key:null
            },
            {
              time:'03:30 AM',
              key:null
            },
            {
              time:'03:45 AM',
              key:null
            },
            {
              time:'04:00 AM',
              key:null
            },
            {
              time:'04:15 AM',
              key:null
            },
            {
              time:'04:30 AM',
              key:null
            },
            {
              time:'04:45 AM',
              key:null
            },
            {
              time:'05:00 AM',
              key:null
            },
            {
              time:'05:15 AM',
              key:null
            },
            {
              time:'05:30 AM',
              key:null
            },
            {
              time:'05:45 AM',
              key:null
            },
            {
              time:'06:00 AM',
              key:null
            },
            {
              time:'06:15 AM',
              key:null
            },
            {
              time:'06:30 AM',
              key:null
            },
            {
              time:'06:45 AM',
              key:null
            },
            {
              time:'07:00 AM',
              key:null
            },
            {
              time:'07:15 AM',
              key:null
            },
            {
              time:'07:30 AM',
              key:null
            },
            {
              time:'07:45 AM',
              key:null
            },
            {
              time:'08:00 AM',
              key:null
            },
            {
              time:'08:15 AM',
              key:null
            },
            {
              time:'08:30 AM',
              key:null
            },
            {
              time:'08:45 AM',
              key:null
            },
            {
              time:'09:00 AM',
              key:null
            },
            {
              time:'09:15 AM',
              key:null
            },
            {
              time:'09:30 AM',
              key:null
            },
            {
              time:'09:45 AM',
              key:null
            },
            {
              time:'10:00 AM',
              key:null
            },
            {
              time:'10:15 AM',
              key:null
            },
            {
              time:'10:30 AM',
              key:null
            },
            {
              time:'10:45 AM',
              key:null
            },
            {
              time:'11:00 AM',
              key:null
            },
            {
              time:'11:15 AM',
              key:null
            },
            {
              time:'11:30 AM',
              key:null
            },
            {
              time:'11:45 AM',
              key:null
            },

            {
              time:'12:00 PM',
              key:null
            },
            {
              time:'12:15 PM',
              key:null
            },
            {
              time:'12:30 PM',
              key:null
            },
            {
              time:'12:45 PM',
              key:null
            },
            {
              time:'01:00 PM',
              key:null
            },
            {
              time:'01:15 PM',
              key:null
            },
            {
              time:'01:30 PM',
              key:null
            },
            {
              time:'01:45 PM',
              key:null
            },
            {
              time:'02:00 PM',
              key:null
            },
            {
              time:'02:15 PM',
              key:null
            },
            {
              time:'02:30 PM',
              key:null
            },
            {
              time:'02:45 PM',
              key:null
            },
            {
              time:'03:00 PM',
              key:null
            },
            {
              time:'03:15 PM',
              key:null
            },
            {
              time:'03:30 PM',
              key:null
            },
            {
              time:'03:45 PM',
              key:null
            },
            {
              time:'04:00 PM',
              key:null
            },
            {
              time:'04:15 PM',
              key:null
            },
            {
              time:'04:30 PM',
              key:null
            },
            {
              time:'04:45 PM',
              key:null
            },
            {
              time:'05:00 PM',
              key:null
            },
            {
              time:'05:15 PM',
              key:null
            },
            {
              time:'05:30 PM',
              key:null
            },
            {
              time:'05:45 PM',
              key:null
            },
            {
              time:'06:00 PM',
              key:null
            },
            {
              time:'06:15 PM',
              key:null
            },
            {
              time:'06:30 PM',
              key:null
            },
            {
              time:'06:45 PM',
              key:null
            },
            {
              time:'07:00 PM',
              key:null
            },
            {
              time:'07:15 PM',
              key:null
            },
            {
              time:'07:30 PM',
              key:null
            },
            {
              time:'07:45 PM',
              key:null
            },
            {
              time:'08:00 PM',
              key:null
            },
            {
              time:'08:15 PM',
              key:null
            },
            {
              time:'08:30 PM',
              key:null
            },
            {
              time:'08:45 PM',
              key:null
            },
            {
              time:'09:00 PM',
              key:null
            },
            {
              time:'09:15 PM',
              key:null
            },
            {
              time:'09:30 PM',
              key:null
            },
            {
              time:'09:45 PM',
              key:null
            },
            {
              time:'10:00 PM',
              key:null
            },
            {
              time:'10:15 PM',
              key:null
            },
            {
              time:'10:30 PM',
              key:null
            },
            {
              time:'10:45 PM',
              key:null
            },
            {
              time:'11:00 PM',
              key:null
            },
            {
              time:'11:15 PM',
              key:null
            },
            {
              time:'11:30 PM',
              key:null
            },
            {
              time:'11:45 PM',
              key:null
            },
          ]
        }
        else {          
          $scope.currentDayTokens = response.data.data[0].token;
        }
        $scope.progress = false;
      },
      function (error) {
        $scope.progress = false; 
        toastr.error('Error in getting response', error);
        // console.log(error)
      });
  }

  $scope.getData = function(){
      activate();
  }

  $scope.updateData = function(){
    $scope.progress = true;
    var currentDate = $scope.currentDate.getDate()+'-'+ ($scope.currentDate.getMonth()+1) +'-'+$scope.currentDate.getFullYear();
    $scope.sendData = {
        date:currentDate,
        token:$scope.currentDayTokens
    }
    $http.post('http://ec2-13-232-169-227.ap-south-1.compute.amazonaws.com:8080/setTokens?date=' + currentDate , $scope.sendData)
      .then(
      function (response) {
        $scope.progress = false;
        toastr.success('Result updated successfully');
        activate();
      }, function(error){
        $scope.progress = false; 
        toastr.error('Error in udating result', 'Please try after some time !');

      })
    
  }
})

.controller('ChatsCtrl', function($scope, ionicDatePicker , toastr , $http) {
  $scope.currentDayTokens = "";
  var ipObj1 = {
    callback: function (val) {  //Mandatory
      var currentDate = new Date(val);
      $scope.currentDate = currentDate.getDate()+'-'+ (currentDate.getMonth()+1) +'-'+currentDate.getFullYear();
    },
    from: new Date(2012, 1, 1), //Optional
    to: new Date(), //Optional
    inputDate: new Date(),      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    templateType: 'popup'       //Optional
  };

  $scope.openDatePicker = function(){
    ionicDatePicker.openDatePicker(ipObj1);
  };

  $scope.searchData = function(){
    if($scope.currentDate == undefined || $scope.currentDate ==  ""){
      toastr.error('Select date first');
    }
    else {
      $scope.progress = true;
      $http.get('http://ec2-13-232-169-227.ap-south-1.compute.amazonaws.com:8080/getTokens?date=' + $scope.currentDate)
      .then(
      function (response) {
        if(response.data.data.length == 0){
          $scope.currentDayTokens = null;
        }
        else {          
          $scope.currentDayTokens = response.data.data[0].token;
        }
        $scope.progress = false;
      },
      function (error) {
        $scope.progress = false; 
        toastr.error('Error in getting response', error);
        // console.log(error)
      });
    }
   
  }
})
