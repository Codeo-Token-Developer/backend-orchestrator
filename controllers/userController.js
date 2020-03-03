const axios = require('axios');
const userUrl = process.env.USER_PORT;

class UserController {

    static readAll(req,res,next) {
        axios({
            url: `${userUrl}/users`,
            method: 'GET',
        })
        .then(({data}) => {
            res.status(data.status).json(data.users)
        })
        .catch(next)
    };

    static readMe(req,res,next) {
        let jwttoken = req.headers.jwttoken
        axios({
            url: `${userUrl}/users/account`,
            method: 'GET',
            headers: {
                jwttoken: jwttoken
            }
        })
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(next)
    };

    static create(req,res,next) {
        let { name, email, password, confirm_password } = req.body;

        axios({
            url: `${userUrl}/users`,
            method: 'POST',
            data: {
                name,
                email,
                password,
                confirm_password
            }
            
        })
        .then(({data}) => {
            res.status(200).json(data);
        })
        .catch(next);
    };

    static login(req,res,next) {
        let { email, password } = req.body
        axios({
            url: `${userUrl}/users/login`,
            method: 'POST',
            data: {
                email,
                password
            }
        })
        .then(({data}) => {
            res.status(202).json(data);
        })
        .catch(next);
    };
    
    

};

module.exports = UserController;