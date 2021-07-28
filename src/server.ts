import express from "express"

const app = express();

app.get("/test",(request,response)=>{
   return response.send("ok")
})

app.post("/test-post",)


app.listen(3000,()=> console.log("server is running NLW"))