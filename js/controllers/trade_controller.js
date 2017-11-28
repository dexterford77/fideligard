sim.controller("TradeCtrl", ['$scope', 'StockService', 'TradeService', '$stateParams', '$state',
  function($scope, StockService, TradeService, $stateParams, $state) {

    $scope.init = function() {
      console.log("MEOW!");
    }

    var _stocks = StockService.formatStockData();

    // convert params into newTrade
    $scope.newTrade = {
      date: $stateParams.date,
      price: $stateParams.price,
      symbol: $stateParams.symbol,
      quantity: 10,
      type: true
    };

    $scope.cash = TradeService.getCash();

    $scope.cost = function() {
      return !isNaN($scope.newTrade.quantity) ? ($scope.newTrade.quantity * $scope.newTrade.price) : '--'
    };

    $scope.orderStatus = function() {
      if ($scope.newTrade.type) {
        // if buying: make sure cash can cover trade
        return $scope.cost() < $scope.cash ? true : false
      } else {
        // PortfolioService.getPositions ???
      }
    };

    $scope.submitTrade = function() {
      // validate + store in Trade service
      console.log($scope.newTrade);
      if($scope.orderStatus()) {
        TradeService.save($scope.newTrade);
        $state.go('transactions');
      }
    }

}]);