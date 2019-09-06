const express = require('express');
const config = require('./config/app_config')
const app = express();

const port = config.port

app.get('/userDetail', function (req, res) {
    let userDetail = {
        personal:{
            firstname: 'Thanapornchai',
            lastname: 'Chitpho',
            age: 25,
            dob: '11/06/2537',
            phoneNumber: 0805232943
        },
        address:[
            {
                address: {
                   no: '80/4',
                   street: "-",
                   state: '-',
                   municipal: '-',
                   city: 'Muang',
                   province: 'Chumphon',
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