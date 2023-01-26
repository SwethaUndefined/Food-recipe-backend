module.exports = (mongoose)=>{
    const ingredients = mongoose.model(
      "ingredients",
      new mongoose.Schema({
        id : {
          type : Number,
          required : true
        },
        items : {
          type : String,
          required : true
        },
        amount : {
          type : Number,
          required : true
        },
        unit : {
          type : Number,
          required : true
        },
        recipe_id :{
            type : Number,
            required : true
      }
    })
    )
    return ingredients;
  }