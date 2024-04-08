//number of documents where the game "Halo" is sold
db.collection.count({
    "Region_sales.Game_platform.Game_publisher.Game.game_name": "Halo"
  })
  