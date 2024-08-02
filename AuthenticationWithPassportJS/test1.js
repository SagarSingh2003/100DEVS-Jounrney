const bcrypt =require('bcrypt');


const saltRounds = 10;
const pass = "my name is sagar from india";

async function hashPass(){

    const hashedPass = await  bcrypt.hash(pass , saltRounds);
    console.log(hashedPass);
}

hashPass();