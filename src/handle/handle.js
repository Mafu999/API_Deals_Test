import api from '../api/api'
import apiToken from '../api/token'


const domain = 'yoast'

const getUrl = `https://${domain}.pipedrive.com/api/v1/deals?limit=500&api_token=${apiToken}`

const handlerDeals = ()=>{
	return api(getUrl, 'GET')
	.then((result) => result[0])
}

handlerDeals()

