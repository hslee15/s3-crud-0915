import mongoose from "mongoose";

const FileItemSchema=new mongoose.Schema(
    {
        key:{
            type:String,
            required:true,
            index:true
        },
        origianlName:String,
        contentType:String,
        size:Number,
        title:String,
        description:String
    },{
        timestamps:true
    }
)

export default mongoose.model("FileItem",FileItemSchema)