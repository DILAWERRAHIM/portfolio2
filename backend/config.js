const Port=5000;
const url="mongodb+srv://aliwebdeveloper04:IR08AUCJQAe185Ay@portfolio.qodf3b0.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio"


const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } catch (error) {
        next(error)
      }
    }
  }
  
  
  

module.exports={Port,url,asyncWrapper}

// const modulePOrt=process.env.PORT;
// const moduleUrl=process.env.MONGO_URI;

// console.log(modulePOrt,moduleUrl);