
import NextLink from 'next/link';
import axios from 'axios'
const Player = ({ playerID,name }) => (
  <div style={{

flex: `1 0 10%`,
  margin: '5px',
  height: '100px',
 

  }}>

  
    <NextLink href={`/players/[playerID]`} as={`/players/${playerID}`} passHref>
     <div style={{height:100,width:100}}> <button style={{
height:100,width:100,
      color:'white',backgroundColor:'lightgreen'}}>
      
          <b >
            {name}
          </b>
          <p >{playerID}</p>
          <br />
         
        
      </button>
     
      </div>
      </NextLink>
   
  </div>
);

export default Player;
