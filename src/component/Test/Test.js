import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Test = () => {

    const [listLaptop,setListLapTop] = useState(null);

    useEffect(()=>{
        getListLaptop()
        console.log(listLaptop)
    },[])

   
    const getListLaptop = async () =>{
        const {data} = await axios.get("https://laptopso1vn.herokuapp.com/v1/categoryLaptop")
        setListLapTop(data)
    }
   

    if(listLaptop == null){
        return <div>loadding</div>
    }else{
        return listLaptop.map(item=>{
            return <div>
                {item.maLoaiMay}<br/>
                {item.tenLoai}
                <br/>
                </div>
        })
    }
}

export default Test