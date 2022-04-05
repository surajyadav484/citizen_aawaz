

import React, {useState} from 'react'; 
// import { Button } from 'react-bootstrap';
// import window from 'global/window'

 

  
// const ScrollButton = () =>{ 

  

//   const [visible, setVisible] = useState(false) 

  

//   const toggleVisible = () => { 

//     const scrolled = document.documentElement.scrollTop; 

//     if (scrolled > 300){ 

//       setVisible(true) 

//     }  

//     else if (scrolled <= 300){ 

//       setVisible(false) 

//     } 

//   }; 

  

//   const scrollToTop = () =>{ 

//     window.scrollTo({ 

//       top: 0,  

//       behavior: 'smooth'

//       /* you can also use 'auto' behaviour 

//          in place of 'smooth' */

//     }); 

//   }; 

  

//   window.addEventListener('scroll', toggleVisible); 

  

//   return ( 

//     <div className = "back-to-top text-center p-2" 
//     onClick={scrollToTop} 
//     style={{display: visible ? 'inline' : 'none'}} 
//     >
//     <em className = "text-light"> ▲ </em> 
//     </div> 

//   ); 
// } 

  

// export default ScrollButton; 

export default function BackToTopButton(){
  return(
    <div>
      
    </div>
  );
}