
import axios from 'axios'
import Layout from '../components/user';
import Link from 'next/link'

import {GraphQLClient} from 'graphql-request'


export async function getStaticProps() {
  const callGraphqh=new
   GraphQLClient('https://api.devcdc.com/cricket')

const vb=await callGraphqh.request(`

query{
getAllteamDetails(skip: 1, limit: 40) {
  teamID
  name
  description}}
`)


  // console.log(data)
  

  return {
    props: {
      User:vb.getAllteamDetails
    }
  };
}

export default ({ User }) => (
  <>

   
    <div style={{textAlign:'center'}}>
    <h1> NEXT JS TESTING </h1>

<Link href={`/players`}  as={`players`} passHref>
<button>All players</button>  
   </Link>
   <br/>
   <br/>
 <Link href={`/team`} as={`/team`} passHref>
<button>All TEAM</button>  
   </Link>
   


    </div>
  </>
)
