angular.module('app')
    .controller('contactCtrl', ['$scope',
        function($scope) {
            "use strict";

            $scope.lastForm = {};

            $scope.sendForm = function(form) {
                $scope.lastForm = angular.copy(form);
                $http({
                    method: 'POST',
                    url: "/api/email",
                    data: {
                        'contactname':$scope.form.name,
                        'email':$scope.form.email,
                        'subject':$scope.form.subject,
                        'message':$scope.form.message
                    },
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(data, status, headers, config) {
                    $scope.resultData = data;
                    alert("Message sent successfully. We'll get in touch with you soon.");

                }).error(function(data, status, headers, config) {
                    $scope.resultData = data;
                    alert("Sending message failed.");
                });
            };

            $scope.resetForm = function() {
                $scope.form = angular.copy($scope.lastForm);
            };

            $http.post('/api/email', function(request, response) {
                var mailOptions = {
                    from: 'Fred Foo ✔ <commonground.space@gmail.com>', // sender address
                    to: 'commonground.space@gmail.com', // list of receivers
                    subject: JSON.stringify(request.body).split("subject")[1], // Subject line
                    text: JSON.stringify(request.body), // plaintext body
                    html: JSON.stringify(request.body) // html body
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        console.log(error);
                        response.send(error);
                    }else{
                        console.log('Message sent: ' + info.response);
                        response.send(info.response);
                    }
                });

            });
        }]);