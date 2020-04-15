import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 
        'Bearer ZIaxOtPrFubHXByusTBReppIY9VJ9Cnvg_60ICKk3d09irwwNafrHxgXDkThLAIHonhkno09u2iETF80hO7IyMKaogplIIK7kyxreKTvIopIkXborGmt94RDBCKMXnYx'
    }
})