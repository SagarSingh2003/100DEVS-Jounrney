const {exec} = require('node:child_process');


exec('sudo rm a.txt' , (err ,stdout , stderr) => {

    if (err){
        console.error(err);
    }

    console.log(stdout);
    console.log(stderr);
})

