module.exports = (mongoose)=>{
    const recipe = mongoose.model(
      "recipe",
      new mongoose.Schema({
        id : {
          type : Number,
          required : true
        },
        name : {
          type : String,
          required : true
        },
        desc : {
          type : String,
          required : true
        },
        image_url : {
          type : String,
          required : true
        },
        creator_id : {
            type : Number,
            required : true
        }
      })
    )
    return recipe;
  }