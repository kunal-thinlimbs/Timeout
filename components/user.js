
import NextLink from 'next/link';
import axios from 'axios'
const User = ({ teamID,name,descripton }) => (
  <div style={{

flex: `1 0 10%`,
  margin: '5px',
  height: '100px',
 

  }}>

  
    <NextLink href={`/team/[teamID]`} as={`/team/${teamID}`} passHref>
     <div style={{height:100,width:100}}> <button style={{
height:100,width:100,
      color:'white',backgroundColor:'lightgreen'}}>
      
          <b >
            {name}
          </b>
          <p >{teamID}</p>
          <br />
          <p>{descripton}
            </p>
        
      </button>
     
      </div>
    </NextLink>
  </div>
);

export default User;
