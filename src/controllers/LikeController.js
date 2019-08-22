const Dev = require("../models/Dev");

module.exports = {
    async store(req,res){
        const {devId} = req.params;
        const {user} = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({
                error: "O Desenvolvedor não existe"
            });
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log(`Match entre ${loggedDev.user} e ${targetDev.user}`);

            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            if(loggedSocket){
                req.io.to(loggedSocket).emit('match', targetDev);
            }

            if(targetSocket){
                req.io.to(targetSocket).emit('match', loggedDev);

            }

        }


        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        console.log(`${loggedDev.user} gostou de ${targetDev.user}`);


        return res.json(loggedDev);
    }
}