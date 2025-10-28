//core module
const path=require('path')
//external module
const express=require("express");
//local module
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");
const rootdir=require("./utils/pathUTIL");
const app=express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use((req,res,next)=>{
  console.log(__dirname)
  res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})

const PORT =3000;

app.listen(PORT,()=>{
  console.log(`server is listening on PORT ${PORT} `);
})