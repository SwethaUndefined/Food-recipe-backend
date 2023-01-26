module.exports = (mongoose)=>{
  const user = mongoose.model(
    "user",
    new mongoose.Schema({
      user_id : {
        type : Number,
        required : true
      },
      name : {
        type : String,
        required : true
      },
      user_name : {
        type : String,
        required : true
      },
      password : {
        type : String,
        required : true
      }
    })
  )
  return user;
}