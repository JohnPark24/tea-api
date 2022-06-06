const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo momma',
        'waterTemp': 200,
        'steepTime': 180,
        'caffineLevel': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'Yo momma',
        'waterTemp': 200,
        'steepTime': 180,
        'caffineLevel': false,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime': 0,
        'caffineLevel': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is runing on port ${PORT}`)
})