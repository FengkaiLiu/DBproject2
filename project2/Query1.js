//calculate the total number of sales
db.collection.aggregate([
    {
      $group: {
        _id: "$Region_sales.Game_platform.Game_publisher.Game.game_name",
        totalSales: { $sum: "$Region_sales.num_sales" }
      }
    }
  ])
