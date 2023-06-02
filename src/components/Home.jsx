import React,{useEffect,useState} from 'react'
import CardItem from './CardItem'


const Home = () => {
    const [info, setinfo] = useState([])
    
   
   useEffect(() => {
   
    const quadb = async () => {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          if (!response.ok) {
            throw new Error('Request failed');
          }
          const data = await response.json();
         
          setinfo(data)
        } catch (error) {
          console.error(error);
        }
      };
    
      quadb();

   }, [])
   
 
    




  return (
   <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")',backgroundSize:'cover' ,backgroundPosition:'center', width:'100%',overflow:'hidden' }}>
       <h1 className='fst-italic' style={{textAlign:'center',color:'whitesmoke'}}> Moviezz</h1>
 <div className='row row-cols-1 row-cols-md-3 g-4' >
{

info && info.map(item=>
           <div className='col' key={item.show.id}>
            <CardItem  item={item} />
           </div>
  )}
   </div>
   
    </div>
  
  )}

export default Home
