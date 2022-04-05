import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'components/Router';
export default function SeconadaryIframe(props){
    return(
        <div >
        <Table className="m-0 p-0">
          <tr className="m-0 p-0">
            
              <td className = "m-0 p-0" >
                <iframe  width = "130px" height = "90px" style = {{borderRadius : "10px"}} src={`https://www.youtube.com/embed/${props.id}`} alt="video"></iframe>
              </td>
              <td>
                <p><a href =  {`https://www.youtube.com/embed/${props.id}`} target = {props.target} className="text-dark text-decoration-none" >{props.text}</a></p>
              </td>
           
          </tr>
  
        </Table>
      </div>
    );
}