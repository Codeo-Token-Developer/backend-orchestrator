const axios = require('axios');
const baseUrl = process.env.ADMIN_PORT;

class feeController {

    static updateFee(req,res,next) {
        let feeId = req.params.feeId;
        let token = req.headers.jwttoken;
        axios({
            url: `${baseUrl}/fee/${feeId}`,
            method: 'PUT',
            headers: {
                jwttoken: token
            }
        })
        .then(({data}) => {
            res.status(data.status).json(fee)
            res.status(200).json(data);
        })
        .catch(next);
    };

};

module.exports = feeController;