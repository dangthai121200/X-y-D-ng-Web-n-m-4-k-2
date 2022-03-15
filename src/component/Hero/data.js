import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Test = () => {

    const [listLaptop,setListLapTop] = useState(null);

    useEffect(()=>{
        getListLaptop()
        console.log(listLaptop)
    },[])


    const getListLaptop = async () =>{
        const {data} = await axios.get("https://laptopso1vn.herokuapp.com/v1/categoryLaptop?fbclid=IwAR1HbtVBvkQZGd6PjDar_ktt7MxtRYTJVaqcicF2K2Dz2quSyrOBm4z7wrQ")
        setListLapTop(data)
    }


    if(listLaptop == null){
        return <div>loadding</div>
    }else{
        return listLaptop.map(item=>{
            return <div>{item.maLoaiMay}</div>
        })
    }
}

export default Test