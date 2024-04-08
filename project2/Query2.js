//find all documents where the game name is either "Assassin's Creed" or "Call of Duty" and the release year is after 2000.
db.collection.find({
    $or: [
      { "Region_sales.Game_platform.Game_publisher.Game.game_name": "Assassin's Creed" },
      { "Region_sales.Game_platform.Game_publisher.Game.game_name": "Call of Duty" }
    ],
    "Region_sales.Game_platform.release_year": { $gt: 2000 }
  })