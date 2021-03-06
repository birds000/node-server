const routes = require('express').Router();
const conn = require('../../util/connectDB');
const { API_V1 } = require('../../util/config')

// bank all ดึงข้อมูลธนาคารทั้งหมด
routes.get(`${API_V1}/bank/all`, (req, res) => {
    var sql = `SELECT * FROM tb_bank`;
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            res.json({ status: "fail", massage: err })
        } else {
            res.json({ status: "success", result })
        }
    })
});

module.exports = routes;