const express = require('express');
const config = require('./config/app_config')
const app = express();

const port = config.port

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/userDetail', function (req, res) {
    console.log('')
    console.log('GET /userDetail')
    let userDetail = {
        personal:{
            prename: 'นาย',
            firstname: 'ธนพรชัย',
            lastname: 'ชิดโพธิ์',
            age: 25,
            dob: '11/06/2537',
            phoneNumber: "0805232943"
        },
        address:[
            {
                address: {
                   no: '80/4',
                   street: "-",
                   state: '-',
                   municipal: 'นาตะอัง',
                   city: 'เมื่อง',
                   province: 'ชุมพร',
                    postAddress: '86000'
                }
            }
        ]
    }
   res.send(response(userDetail));
})


function response (data){
    let res = {
        status: 200,
        message: '',
        result : data
    }

    return res
}

app.listen(port, function () {
    console.log('run as port ' + port + '!');
});