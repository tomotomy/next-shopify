import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import { client } from '../../lib/apolloClient';
import {
  ADD_METAFIELD
} from '../../lib/mutations';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  // Rest of the API logic
  return res.json({ 
    result: 'succeed',
  })
  // console.log(req)
  // const AddFormVariables = function(productId) {
  //   return {
  //     input : {
  //       id: `gid://shopify/Product/${productId}`,
  //       metafields: [
  //         {
  //           namespace: "MenkReview",
  //           key: "review", // customerId
  //           value: Json.stringify(req),
  //           valueType: "STRING"
  //         }
  //       ]
  //     }
  //   }
  // } 

  // client.mutate({
  //   mutation: ADD_METAFIELD,
  //   variables: AddFormVariables,
  // }).then((result) => {
  //   return res.json({ 
  //     result: req,
  //   })
  // })
}