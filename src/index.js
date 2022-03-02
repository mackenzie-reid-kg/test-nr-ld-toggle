import SDC from 'statsd-client'
import { config } from './resources/config.js'

let speed = 1000
switch(process.argv[2]) {
    case 'slow':
        speed = 5000
        break
    case 'fast':
        speed = 500
        break 
}

const client = new SDC(config.application.container)
let count = 0

const callback = () => {
    count++
    console.log(`Sent: ${count}`)
    client.counter('test.metrics.service', 1)
}

setInterval(callback, speed)
