const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.tittle,
        request.body.description
    );
    const query = "INSERT INTO bd_tasks(tittle,description) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    sucess: true,
                    massage: "Sucesso!!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}