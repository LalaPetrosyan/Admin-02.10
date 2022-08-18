import React  from "react";
import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
const Edit=()=>{
    const {id}=useParams()
    // const token = localStorage.getItem("token");

    // const [userEdite, setUserEdite] = useState({
    //     isTopic:"",
    //     titleRU:"",
    //     titleEN:"",
    //     titleAM:"",
    //     bioRU:"",
    //     bioEN:"",
    //     bioAM:"",
    //     paymentMethod:"",
    //     commercialType:"",
    //     city:"",
    //     yerevanRegion:"",
    //     streetRU:"",
    //     streetEN:"",
    //     streetAM:"",
    //     buildingType:"",
    //     repairType:"",
    //     newBuilt:"",
    //     area:	"",
    //     elevator:	"",
    //     floor:"",
    //     floorNumber:"",
    //     rooms:"",
    //     toilets:"",
    //     animals:"",
    //     balcony:"",
    //     price:"",
    //     pictures:	[],
    //     token: token

    //   });

    //   useEffect(()=>{
    //     const edituserid=async()=>{
    //         const reqdata=await fetch(`${process.env.REACT_APP_MY_API_KAY}/getAllDataAdmin`);
    //         const res=reqdata.json()
    //         setUserEdite(await res)
    //     }
    //     edituserid()
    //   },[])

    const handleChange = (e) => {
    
     
      };

      const [state, setState] = useState({});
      useEffect(() => {
        axios.get(`${process.env.REACT_APP_MY_API_KAY}/addHouseData`)
        .then((request) => 
          setState(request.data)
      )
        .catch((error) => console.log(error))
      }, [state])


    return(
        <div>

<h1>kod:{id}</h1>                   
  <div className="cards"  >
            
                  <div className="more__info" >
                     
                        
                     <div className="more__info-top">
                    
     
                        <div className="more__info-left">
                        заглавие: <input type="text" name="titleRU" value={state.titleRU} onChange={handleChange}/>
                        TITLE:<input type="text" name="titleEN" value={state.titleEN} onChange={handleChange}/>
                        ՎԵՐՆԱԳԻՐ: <input type="text" name="titleAM" value={state.titleAM} onChange={handleChange}/>
                         </div>
     
                  
     
                        <div className="more__info-rigth">
                        улица: <input type="text" name="streetRU" value={state.streetRU} onChange={handleChange}/>
                        street:<input type="text" name="streetEN" value={state.streetEN} onChange={handleChange}/>
                        փողոց: <input type="text" name="streetAM" value={state.streetAM} onChange={handleChange}/>
                        </div>
     
                     </div>
     
                    <div className=" more__info-bio">
                        Био: <input type="text" name="bioRU" value={state.bioRU} onChange={handleChange}/>
                        Bio:<input type="text" name="bioEN" value={state.bioEN} onChange={handleChange}/>
                        Բիո: <input type="text" name="bioAM" value={state.bioAM} onChange={handleChange}/>
     
     
                    </div>
                    <div className="more__info-top">
                    
               
                    <div className="more__info-left">
     
                    Тип недв․: <input type="text" name="paymentMethod" value={state.paymentMethod} onChange={handleChange}/>
                    Город:<input type="text" name="city" value={state.city} onChange={handleChange}/>
                    Регион Еревана: <input type="text" name="yerevanRegion" value={state.yerevanRegion} onChange={handleChange}/>
                    Тип здания: <input type="text" name="buildingType" value={state.buildingType} onChange={handleChange}/>
                    Площадь:<input type="text" name="area" value={state.area} onChange={handleChange}/>
                    Кол․ комнат: <input type="text" name="rooms" value={state.rooms} onChange={handleChange}/>
                    Животные: <input type="text" name="animals" value={state.animals} onChange={handleChange}/>
     
                    
                    <button type="submit">Submit Changes</button>
                    <button>Cancel edit</button>
     
                    </div>
                    <div className="more__info-rigth">
     
                    Toп: <input type="text" name="isTopic" value={state.isTopic} onChange={handleChange}/>
                    Тип коммерции или аренды:<input type="text" name="commercialType" value={state.commercialType} onChange={handleChange}/>
                    Новостройка: <input type="text" name="newBuilt" value={state.newBuilt} onChange={handleChange}/>
                    Ремонт: <input type="text" name="repairType" value={state.repairType} onChange={handleChange}/>
                    Балкон:<input type="text" name="balcony" value={state.balcony} onChange={handleChange}/>
     
                   
                    Кол.санузлов: <input type="text" name="toilets" value={state.toilets} onChange={handleChange}/>
                    Лифт:<input type="text" name="elevator" value={state.elevator} onChange={handleChange}/>
     
              
                   
         
                    этаж: <input type="text" name="floor" value={state.floor} onChange={handleChange}/>
                    номер этажа:<input type="text" name="floorNumber" value={state.floorNumber} onChange={handleChange}/>
     
           
                    </div>
     
     
                 </div>
                    
     
     
                    </div>
                    <div className="moreBtn">
               
                    
                    </div>
                    </div>
        </div>
    )
}
export default Edit