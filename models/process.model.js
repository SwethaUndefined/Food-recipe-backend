module.exports = (mongoose)=>{
    const process = mongoose.model(
      "process",
      new mongoose.Schema({
        id : {
          type : Number,
          required : true
        },
        step : {
            type : String
        },
        recipe_id: {
            type : Number
        }
      })
    )
    return process;
  }