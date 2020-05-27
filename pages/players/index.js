
import axios from 'axios'
import Player from '../../components/player';


import {GraphQLClient} from 'graphql-request'


export async function getStaticProps() {
  const callGraphqh= await new
   GraphQLClient('https://api.devcdc.com/cricket')

const vb=await callGraphqh.request(`

query{
getAllplayersDetails(skip: 1, limit: 8000) {
  name
    playerID
    birthPlace
    dob
    description
    battingStyle
    bowlingStyle}}
`)


   
  

  return {
    props: {
      User:vb.getAllplayersDetails
    }
  };
}


export default ({ User }) => (
  <>
   
    <div style={{display:'flex',
  flexWrap:'wrap'}}>

  
      {User.map((item) => (
        <Player key={item.id} {...item} />
      ))}
    </div>
  </>
);
