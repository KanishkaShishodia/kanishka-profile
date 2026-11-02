import fs from "node:fs/promises";

const filepath="userData.txt";

async function createFile(content){
    try{
        await fs.writeFile(filepath,content,"utf8");
        console.log("File content:\n",data);
        return data;
    }catch(err){
        if(err.code==="ENOENT"){
            console.log("File does not exist yet.");
        }
        else{
            console.error("Error reading file:", err);
        }
    }
}