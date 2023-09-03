import React,{useState,useEffect} from 'react'
import DefaultLayout from './../components/defaultLayout';
import ItemsList from './../components/ItemsList';
import axios from 'axios';
const Items = () => {
  const [itemsData,setItemsData] = useState([])
  useEffect(()=>{
    const getAllItems = async()=>{
      try{
        const {data} = await axios.get('/backend')
        setItemsData(data)
        console.log(data)
      }
      catch(err){
        console.log(err);
      }
    }
    getAllItems()
  },[])
  return (
    <DefaultLayout>
      <div class="w-full h-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
<div className='gap-x-2 grid grid-cols-3'>    
  <ItemsList data={itemsData}/>
  <ItemsList/>
</div>  
      </div>

    </DefaultLayout>
  )
}

export default Items