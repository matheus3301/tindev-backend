const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
    async index(req,res){
        const { user } = req.headers;

        const loggedUser = await Dev.findById(user);

        const users = await Dev.find({
            $and:[
                { _id: {$ne : user }},
                { _id: { $nin : loggedUser.likes } },
                { _id: { $nin : loggedUser.deslikes } },
            ]
        });

        return res.json(users);
    },

    async store(request,response){
        const { username } = request.body;

        console.log(`Cadastro solicitado para o usuário ${username}...`);

        const userExists = await Dev.findOne({
            user:username
        });

        if(userExists){

            console.log("Usuário já cadastrado");
            
            return response.json(userExists);            

        }else{

            const res = await axios.get(`https://api.github.com/users/${username}`);


            const { name, bio, avatar_url: avatar} = res.data;

            const dev = await Dev.create({
                name,
                user:username,
                bio,
                avatar
            });

            console.log("Usuário cadastrado com sucesso");

            return response.json(dev);
        }

        


    }
}