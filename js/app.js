(function (angular) {
	'use strict';

	// 创建一个模块
	var myApp = angular.module('MyTodoMvc',[]);
	// 注册一个主要的控制器
	myApp.controller('MainController',['$scope',function($scope){

		// [1,2,3,4,5]
    function getId() {
      var id = Math.random(); // 1 2
      for (var i = 0; i < $scope.todos.length; i++) {
        if ($scope.todos[i].id === id) {
          id = getId();
          break;
        }
      }
      return id;
    }

		// 文本框需要一个模型
		$scope.text = '';


		// 任务列表也需要一个模型
		// 每个任务的固定结构{id:1,text:'学习',completed:ture}
		$scope.todos = [
			{ 
				id: 0.123,
				text: '行测：第一模块5页', 
				completed: false
			},
			{ 
				id: 0.22,
				text: '前端：视频4-10', 
				completed: false
			},
			{ 
				id: 0.232,
				text: '总结行测与前端', 
				completed: false
			}
		];

		// 添加todo
		$scope.add = function(){
			$scope.todos.push({
				id: getId(),
				text: $scope.text, 
				completed: false
			});

			$scope.text = '';
		};

		// 处理删除
		$scope.remove = function(id){
			// 删除谁
			for (var i = 0; i <= $scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					break;
				}
			};
		}

		 // 清空已完成
	    $scope.clear = function() {
	      var result = [];
	      for (var i = 0; i < $scope.todos.length; i++) {
	        if (!$scope.todos[i].completed) {
	          result.push($scope.todos[i]);
	        }
	      }
	      $scope.todos = result;
	    };

	    // 是否有已经完成的
		$scope.existCompleted = function(){
			for (var i = 0; i < $scope.todos.length; i++) {
		        if ($scope.todos[i].completed) {
		          return true;
		        }
		    }
		    return false;
		};

		// 当前编辑哪个元素
	    $scope.currentEditingId = -1;
	    $scope.editing = function(id) {
	      $scope.currentEditingId = id;
	    };
	    $scope.save = function() {
	      $scope.currentEditingId = -1;
	    };

		
		}]);
})(angular);
