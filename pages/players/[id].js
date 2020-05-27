
import NextLink from 'next/link';
import axios from 'axios'

import {GraphQLClient} from 'graphql-request'


export async function getStaticProps({ params }) {

 const callGraphqh=new
  GraphQLClient('https://api.devcdc.com/cricket')

const kj=await callGraphqh.request(`
query  playersDetails($playerID:String!){
     playersDetails(playerID:$playerID){
      name
     birthPlace
    dob
    description
    battingStyle
    bowlingStyle
    
}
}
`,{
  playerID:params.id
})


    // const data=await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  
  if(kj.playersDetails.name!="")
  {
    console.log(params.id,kj.playersDetails.name)
  return {
    props: {
      data:{
      
         name:kj.playersDetails.name,
        dob:kj.playersDetails.dob
      }
    }
    }
  };
}


export async function getStaticPaths() {

  const callGraphqh= new
  GraphQLClient('https://api.devcdc.com/cricket')

var AllData=await callGraphqh.request(`

query 
getAllplayersDetails($skip: Int, $limit: Int){
getAllplayersDetails(skip: $skip, limit:$limit ) {
 name
    playerID
    birthPlace
    dob
    description
    battingStyle
    bowlingStyle}}
`,{
  limit:510,
  skip:1
})




//   const data3 = await await axios.get(`https://jsonplaceholder.typicode.com/users`)
// const data=data3.data


return {

    paths:await 
    AllData.getAllplayersDetails.map((item) => ({
      params: {
        id: item.playerID.toString()
      }
    }))

    ,
    fallback: false
  };

}

 const Main=({ data }) => (
  <div >
    <h1>NAME: {data.name}</h1>
    
    <p >
      {data.dob}
    </p>
    
    <NextLink href="/" passHref>
      <button as="a" mt={4} leftIcon="arrow-back">
        Back
      </button>
    </NextLink>
  </div>
)

 
export default  Main