const axios = require('axios');
const url = process.env.ADMIN_PORT;

class AdminController {

    static readAllAdmins(req,res,next) {
        let token = req.headers.admintoken;
        axios({
            url: `${url}/admins/`,
            method: 'GET',
            headers: {
                admintoken: token
            }
        })
        .then(({data}) => {
            res.status(data.status).json(data.admins);
        })
        .catch(next);
    };

    static readAllUsers(req,res,next) {
        let token = req.headers.admintoken;
        axios({
            url: `${url}/admins/users`,
            method: 'GET',
            headers: {
                admintoken: token
            }
        })
        .then(({data}) => {
            res.status(data.status).json({message: data.message});
        })
        .catch(next);
    };

    static readAllAccounts(req,res,next) {
        let token = req.headers.admintoken;
        axios({
            url: `${url}/admins/accounts`,
            method: 'GET',
            headers: {
                admintoken: token
            }
        })
        .then(({data}) => {
            res.status(data.status).json(data.accounts);
        })
        .catch(next);
    };

    static create(req,res,next) {
        let token = req.headers.admintoken
        let { name, email, password, confirm_password } = req.body;
        axios({
            url: `${url}/admins/`,
            method: 'POST',
            data: {
                name, email, password, confirm_password
            },
            headers: {
                admintoken: token
            }
        })
        .then(({data}) => {
            res.status(data.status).json({message: data.message});
        })  
        .catch(next);
    };

    static login(req,res,next) {
        let { email, password } = req.body;
        axios({
            url: `${url}/admins/login`,
            method: 'POST',
            data: {
                email, password
            }
        })
        .then(({data}) => {
            res.status(data.status).json(data);
        })
        .catch(next);
    };

};

module.exports = AdminController;


