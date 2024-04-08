//check if the document have "isFeatured" attribute for the game "Final Fantasy"
db.collection.updateMany(
    { "Region_sales.Game_platform.Game_publisher.Game.game_name": "Final Fantasy" },
    [ { $set: { isFeatured: { $not: "$isFeatured" } } } ]
  )