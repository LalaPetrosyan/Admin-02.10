import "./datatable.scss";

import { useEffect, useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import axios from "axios";
import { Link } from "react-router-dom";
const Datatable = () => {
  const [editData,setEditData]=useState({})
  const [EditShow,setEditShow]=useState(false)

  const [posts, setPosts] = useState([])
  const [showMore, setShowMore]=useState(false);
  const[comer,setComer]=useState(true)
  const[activeCom,setActiveCom]=useState(true);
  const token = localStorage.getItem("token");//bayc chpetqa lini datark chakernerov tvyal CHGITEM ET ZER SINTAQSNA . UXXI
  const [loginData, setLoginData] = useState({ 
    houseId:"",
    isTopic:"",
    titleRU:"",
    titleEN:"",
    titleAM:"",
    bioRU:"",
    bioEN:"",
    bioAM:"",
    paymentMethod:"",
    commercialType:"",
    city:"",
    yerevanRegion:"",
    streetRU:"",
    streetEN:"",
    streetAM:"",
    buildingType:"",
    repairType:"",
    newBuilt:"",
    area:	"",
    elevator:	"",
    floor:"",
    floorNumber:"",
    rooms:"",
    toilets:"",
    animals:"",
    balcony:"",
    price:"",
    pictures:	[],
    token: token
  });
  const validate=()=>{
    const errors={}
    if(loginData.isTopic===""){
      errors.isTopic="Обязательное поле:"
    }
    if(loginData.titleRU===""){
      errors.titleRU="Обязательное поле: Напишите заголовок на русском языке"
    }
    if(loginData.titleEN===""){
      errors.titleEN="Обязательное поле: Напишите название на английском языке"
    }
    if(loginData.titleAM===""){
      errors.titleAM="Обязательное поле: Напишите название на армянском языке"
    }
    if(loginData.bioRU===""){
      errors.bioRU="Обязательное поле: Напишите информацию на русском языке"
    }
    if(loginData.bioEN===""){
      errors.bioEN="Обязательное поле: Напишите информацию на английском языке"
    }
    if(loginData.bioAM===""){
      errors.bioAM="Обязательное поле: Напишите информацию на армянском языке"
    }
    if(loginData.paymentMethod===""){
      errors.paymentMethod="Обязательное поле: Напишите тип недвижимости"
    }
    if(loginData.city===""){
      errors.city="Обязательное поле: Выберите город"
    }
    if(loginData.streetRU===""){
      errors.streetRU="Обязательное поле: Напишите название улицы на русском языке"
    }
    if(loginData.streetEN===""){
      errors.streetEN="Обязательное поле: Напишите название улицы на английском языке"
    }
    if(loginData.streetAM===""){
      errors.streetAM="Обязательное поле: Напишите название улицы на армянском языке"
    }
    if(loginData.buildingType===""){
      errors.buildingType="Обязательное поле для выбора типа здания"
    }
    if(loginData.repairType===""){
      errors.repairType="Обязательное поле для выбора типа ремонта"
    }
    if(loginData.newBuilt===""){
      errors.newBuilt="Обязательное поле: Новостройка или нет"
    }
    if(loginData.area===""){
      errors.area="Обязательное поле: Введите площадь"
    }
    if(loginData.elevator===""){
      errors.elevator="Обязательное поле: Присувствие лифта должно быть предусмотрен"
    }
    if(loginData.floor===""){
      errors.floor="Обязательное поле: Выберите этаж"
    }
    if(loginData.floorNumber===""){
      errors.floorNumber="Обязательное поле: Количество этажей должно быть предусмотрен"
    }
    if(loginData.rooms===""){
      errors.rooms="Обязательное поле: Количество комнат должно быть предусмотрен"
    }
    if(loginData.toilets===""){
      errors.toilets="Обязательное поле: Количество санузлов должно быть предусмотрен"
    }
    if(loginData.animals===""){
      errors.animals="Обязательное поле։ Животные"
    }
    if(loginData.balcony===""){
      errors.balcony="Обязательное поле։ Балкон должен быть предусмотрен"
    }
    if(loginData.price===""){
      errors.price="Обязательное поле։ Введитпрее цену"
    }
    if(loginData.pictures===""){
      errors.pictures="Обязательное поле։ Выберите картинку"
    }
    return errors
  }
  const show=(item)=>{
    
    setShowMore(true)
    
      if(item.commercialType!==null || item.buildingType!==null 
      ||item.rooms!==null || item.toilets!==null || item.balcony!==null||item.property!==null ){
        setActiveCom(false)
        console.log("Yes")
      }else{
        setActiveCom(true)
        console.log("no")
      }
      
      if(item.animals!==null){
        setActiveCom(false)
        console.log("Yes")
      }else{
        setActiveCom(true)
        console.log("no")
      }
      if(item.paymentMethod==="Коммерческая"){
        setComer(false)
      }else if(item.paymentMethod==="Продажа"||item.paymentMethod==="Ежемесячная "||item.paymentMethod==="Посуточная ") {
        setComer(true)
      }
    
  }
  const noShow=()=>{
    setShowMore(false)
  }
  const editShow=(oldState)=>{
    setEditData(oldState)
    setEditShow(true)
  }
  const NoeditShow=()=>{
    setEditShow(false)

  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MY_API_KAY}/getAllDataAdmin`)
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data)
      });
  }, []);

  const changeData = (e, propName) => {
    // setEditData(item)
     setEditData(oldState =>  {

    const newState =  {...oldState, token: localStorage.getItem("token"), [e.target.name]: e.target.value};

    return newState;
  });


    // setEditData({
    //   ...item,
    //   token: localStorage.getItem("token"),
    //   [e.target.name]: e.target.value
    // })
    // setEditData(arr)
    // setEditData({
    //   ...editData,
    //   [e.target.name]: e.target.value,
    // });
  }
const handleSubmit = (e) => {
  e.preventDefault()
  let data=new FormData()
  for ( let key in editData ) {
    if(key==="pictures" || key === "commercialType" || key === "animals"){
      console.log("ok")
    } else{
      console.log("key=" + key + " data="+editData[key]);
        data.append(key, editData[key]);
    }
   }

  axios.post(`${process.env.REACT_APP_MY_API_KAY}/updateHouseData`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }}
  )
  .then((response) => {
    
    setPosts(oldPosts=>{
      
      return oldPosts.map(post=>{
        if(post.houseId===editData.houseId){
          return editData;
        }
        return {...post}
      });
    });
    setEditData({});
    setEditShow(false);
  })
  .catch((error) => console.log(error))

};

  const deleteItem=(houseId)=>{
      const token=localStorage.getItem("token")

      axios.delete(`${process.env.REACT_APP_MY_API_KAY}/deleteDataById`,
      {
        data:{ houseId, token}
      }
      )
      .then(()=>{
        setPosts(posts.filter((item) => item.houseId !== houseId))
      })
      .catch((error)=>{
        console.log(error)
      })
      
  }
  return (

    <div className="datatable">

      <div className="datatableTitle">

      </div>
      <div >
            {
              posts.map((item) => {
           
                return(
             <>
             
                <div  className="cards" >


                <div className="card__start"> 
                <div className="card__start-left" >
               <div className="global__info"><b>Код:</b><p> {item.houseId}</p></div>
               <div className="global__info"><b>Цена:</b><p> {item.price} {item.currencyType }</p></div>
               <div className="global__info"><b>Заглавие:</b><p> {item.titleRU}</p></div>
                <div className="card__btn">
                <button onClick={() =>editShow(item)}>Edit</button>
                <div>
                  
                </div> 
 
                 <button className="btn__more" onClick={show} style={{display:showMore?"none":"block"}} 
                 ><ExpandMoreIcon className="icon"/>Показать больше</button>
                 <button className="btn__more" onClick={noShow} style={{display:showMore?"block":"none"}}  ><ExpandLessIcon className="icon"  />Показать меньше</button>

                </div>
                </div>
                <div className="card__start-rigth"  >
                {
                <img className="cards__img" src={`${process.env.REACT_APP_MY_API_KAY}/files?houseId=${item.houseId}&fileName=${item.pictures[0]}`}/>
                  }
                </div>
                </div>

</div>
                                   {/* edit info */}

                   


                                 
           {EditShow && <div className="cards" >
            <form onSubmit={handleSubmit}>
     
             <div className="more__info" >
                
                   
                <div className="more__info-top">
               

                   <div className="more__info-left">
                   заглавие: <input type="text" name="titleRU" defaultValue={item.titleRU}  onChange={(e) => changeData(e, item)}/>
                   TITLE:<input type="text" name="titleEN" defaultValue={item.titleEN}  onChange={(e) => changeData(e, item)}/>
                   ՎԵՐՆԱԳԻՐ: <input type="text" name="titleAM" defaultValue={item.titleAM}  onChange={(e) => changeData(e, item)}/>
                    </div>

             

                   <div className="more__info-rigth">
                   улица: <input type="text" name="streetRU" defaultValue={item.streetRU}  onChange={(e) => changeData(e, item)}/>
                   street:<input type="text" name="streetEN" defaultValue={item.streetEN}  onChange={(e) => changeData(e, item)}/>
                   փողոց: <input type="text" name="streetAM" defaultValue={item.streetAM}  onChange={(e) => changeData(e, item)}/>
                   </div>

                </div>

               <div className=" more__info-bio">
                   Био: <input type="text" name="bioRU" defaultValue={item.bioRU}  onChange={(e) => changeData(e, item)}/>
                   Bio:<input type="text" name="bioEN" defaultValue={item.bioEN}  onChange={(e) => changeData(e, item)}/>
                   Բիո: <input type="text" name="bioAM" defaultValue={item.bioAM}  onChange={(e) => changeData(e, item)}/>


               </div>
               <div className="more__info-top">
               
          
               <div className="more__info-left">

               Тип недв․:  <select name="paymentMethod" defaultValue={item.paymentMethod}  onChange={(e) => changeData(e, item)}>
               <option defaultValue="0" disabled >Недвижимость</option>
                <option defaultValue="Продажа">Продажа</option>
                <option defaultValue="Коммерческая">Коммерческая</option>
                <option defaultValue="Ежемесячная">Ежемесячная</option>
                <option defaultValue="Посуточная">Посуточная</option>
              </select>
               
               
               Город:<select name="city" defaultValue={loginData.city} onChange={(e) => changeData(e, item)}>
                <option defaultValue="0" disabled >Регион</option>
              <option defaultValue="Ереван">Ереван</option>
                <option defaultValue="Гюмри">Гюмри</option>
                <option defaultValue="Цахкадзор">Цахкадзор</option>
                <option defaultValue="Дилиджан">Дилиджан</option>
                <option defaultValue="Иджеван">Иджеван</option>
                <option defaultValue="Эчмиадзин">Эчмиадзин</option>
                <option defaultValue="Ванадзор">Ванадзор</option>
                <option defaultValue="Севан">Севан</option>
                
              </select>
               Регион Еревана:        <select name="yerevanRegion" defaultValue={loginData.yerevanRegion} onChange={(e) => changeData(e, item)}>
              <option defaultValue="0" disabled >Ереван регионы </option>
                <option defaultValue="Аджапняк">Аджапняк</option>
                <option defaultValue="Арабкир">Арабкир</option>
                <option defaultValue="Аван">Аван</option>
                <option defaultValue="Давташен">Давташен</option>
                <option defaultValue="Эребуни">Эребуни</option>
                <option defaultValue="Канакер-Зейтун">Канакер-Зейтун</option>
                <option defaultValue="Кентрон">Кентрон</option>
                <option defaultValue="Малатия-Себастия">Малатия-Себастия</option>
                <option defaultValue="Норк-Мараш">Норк-Мараш</option>
                <option defaultValue="Нор Норк">Нор Норк</option>
                <option defaultValue="Нубарашен">Нубарашен</option>
                <option defaultValue="Шенгавит">Шенгавит</option>
              </select>
               Тип здания:  <select name="buildingType" defaultValue={loginData.buildingType} onChange={(e) => changeData(e, item)}>
               <option defaultValue="0" disabled > Тип здания </option>
                <option defaultValue="Каменное">Каменное </option>
                <option defaultValue="Панельное">Панельное </option>
                <option defaultValue="Монолит">Монолит</option>
              </select>
               Площадь:<input type="text" name="area" defaultValue={item.area}  onChange={(e) => changeData(e, item)}/>
               Кол․ комнат: <input type="text" name="rooms" defaultValue={item.rooms}  onChange={(e) => changeData(e, item)}/>
               Животные: <input type="text" name="animals" defaultValue={item.animals}  onChange={(e) => changeData(e, item)}/>

               
               <button type="submit">Submit Changes</button>
               <button type="button" onClick={NoeditShow}>Cancel edit</button>

               </div>
               <div className="more__info-rigth">

               Toп: <select name="isTopic" defaultValue={item.isTopic} onChange={(e) => changeData(e, item)}>
                <option defaultValue="0" disabled >Toп</option>
                <option defaultValue="Да">Да </option>
                <option defaultValue="Нет">Нет </option>
              </select>
               Тип коммерции или аренды:   <select name="commercialType" defaultValue={loginData.commercialType} onChange={(e) => changeData(e, item)}>
              <option defaultValue="0" disabled >Коммерческая</option>
                <option defaultValue="Офисное помещение">Офисное помещение</option>
                <option defaultValue="Торговое помещение">Торговое помещение</option>
                <option defaultValue="Бизнес">Бизнес</option>
                <option defaultValue="Другое">Другое</option>
              </select>
               Новостройка:              <select name="newBuilt" defaultValue={loginData.newBuilt} onChange={(e) => changeData(e, item)}>
                  <option   defaultValue="0" disabled >Новостройка</option>
                  <option defaultValue="Да">Да </option>
                <option defaultValue="Нет">Нет </option>
              </select>
               Ремонт:         <select name="repairType" defaultValue={loginData.repairType} onChange={(e) => changeData(e, item)}>
                <option defaultValue="0" disabled >Ремонт</option>
                <option defaultValue="Без ремонта">Без ремонта</option>
                <option defaultValue="Старый">Старый</option>
                <option defaultValue="Частичный">Частичный</option>
                <option defaultValue="Косметический">Косметический</option>
                <option defaultValue="Евроремонт">Евроремонт</option>
                <option defaultValue="Дизайнерский">Дизайнерский</option>
                <option defaultValue="Капитальный">Капитальный</option>
              </select>  
               Балкон:
              <select name="balcony" defaultValue={loginData.balcony} onChange={(e) => changeData(e, item)}>
                  <option   defaultValue="0" disabled >балкон</option>
                  <option defaultValue="WithBalcony">C балконом  </option>
                <option defaultValue="WithoutBalcony">Без балконa </option>
              </select>

              
               Кол.санузлов: <input type="text" name="toilets" defaultValue={item.toilets}  onChange={(e) => changeData(e, item)}/>
               Лифт:     <select name="elevator" defaultValue={loginData.elevator} onChange={(e) => changeData(e, item)}>
                  <option   defaultValue="0" disabled >лифт</option>
                  <option defaultValue="Да">Да </option>
                <option defaultValue="Нет">Нет </option>
              </select>

         
              
    
               этаж: <input type="text" name="floor" defaultValue={item.floor}  onChange={(e) => changeData(e)}/>
               номер этажа:<input type="text" name="floorNumber" defaultValue={item.floorNumber}  onChange={(e) => changeData(e)}/>

       
              
               </div>
      

            </div>
               


               </div>
               </form>
          
               </div>}
             
               
               {/* more info */}
   
               <div className="cards" style={{display: showMore?"block":"none"}} >
               <div className="more__info">
               
                  
                <div className="more__info-top">
               

                   <div className="more__info-left">
                   
                   <div className="info__txt infos__more"><b>Код:</b><p className="info__border"> {item.houseId}</p></div>
                   <div className="info__txt infos__more"><b>Заглавие:</b><p className="info__border"> {item.titleRU}</p></div>
                   <div className="info__txt infos__more"><b>Title:</b><p className="info__border"> {item.titleEN}</p></div>
                   <div className="info__txt infos__more"><b>Վերնագիր:</b><p className="info__border"> {item.titleAM}</p></div>
                   
                   
                   
                   </div>

             

                   <div className="more__info-rigth">
                   <div className="info__txt infos__more"><b>Улица:</b><p className="info__border"> {item.streetRU}</p></div>
                   <div className="info__txt infos__more"><b>Street:</b><p className="info__border"> {item.streetEN}</p></div>
                   <div className="info__txt infos__more"><b>Փողոց:</b><p className="info__border"> {item.streetAM}</p></div>
                   </div>

                </div>

               <div className=" more__info-bio">
               <div className="info__txt infos__more-bio"><b>Био:</b><p className="info__border border__bio"> {item.bioRU}</p></div>
               <div className="info__txt infos__more-bio"><b>Bio:</b><p className="info__border border__bio"> {item.bioEN}</p></div>
               <div className="info__txt infos__more-bio"><b>Բիո:</b><p className="info__border border__bio"> {item.bioAM}</p></div>

               </div>
               <div className="more__info-top">
               

               <div className="more__info-left">
               <div className="info__txt infos__more"><b>Тип недвижимости</b><p className="info__border"> 
               {item.paymentMethod} 
               
               </p></div>
               <div className="info__txt infos__more"><p className="info__border"> {item.property}</p></div>

               <div className="info__txt infos__more" style={{display:activeCom?"block":"none"}}><b>Тип коммерции или аренды</b><p className="info__border"> {item.commercialType}</p></div>
               <div className="info__txt infos__more"><b>Город:</b><p className="info__border"> {item.city}</p></div>
               <div className="info__txt infos__more"><b>Регион Еревана:</b><p className="info__border"> {item.yerevanRegion}</p></div>
               <div className="info__txt infos__more" style={{display:activeCom?"block":"none"}}><b>Тип здания:</b><p className="info__border"> {item.buildingType}</p></div>
               <div className="info__txt infos__more"><b>Площадь:</b><p className="info__border"> {item.area}</p></div>
               <div className="info__txt infos__more" style={{display:activeCom?"block":"none"}}><b>Количество комнат:</b><p className="info__border"> {item.rooms}</p></div>
               <div className="info__txt infos__more" style={{display:activeCom?"block":"none"}}><b>Животные:</b><p className="info__border"> {item.animals}</p></div>
               <div className="info__txt infos__more"><b>Toп:</b><p className="info__border"> {item.isTopic}</p></div>

               
               </div>
               <div className="more__info-rigth">
               <div className="info__txt infos__more"><b>Новостройка:</b><p className="info__border"> {item.newBuilt}</p></div>
               {/* <div className="info__txt infos__more"><b>Ремонт:</b><p className="info__border"> {item.newBuilt}</p></div> */}
               <div className="info__txt infos__more"><b>Тип ремонта:</b><p className="info__border"> {item.repairType}</p></div>
               <div className="info__txt infos__more" style={{display:activeCom?"block":"none"}}><b>Присутствие балкона:</b><p className="info__border"> {item.balcony}</p></div>
               <div className="info__txt infos__more" style={{display:activeCom?"block":"none"}}><b>Количество санузлов:</b><p className="info__border"> {item.toilets}</p></div>
               <div className="info__txt infos__more"><b>Присутствие лифта:</b><p className="info__border"> {item.elevator}</p></div> 
               <div className="info__txt infos__more"><b>Этаж:</b><p className="info__border"> {item.floor}</p></div>
               <div className="info__txt infos__more"><b>Количество этажей:</b><p className="info__border"> {item.floorNumber}</p></div>
        
               </div>

            </div>
            <div className="info__txt infos__more"><b>Картинки</b></div>
               <div className="more__picture">
           
                 
                 {
       item?.pictures?.map((image) => (
        <div className="more__info-pictures">
   
         {

       <img className="more__info-img" alt="product-img" src={`${process.env.REACT_APP_MY_API_KAY}/files?houseId=${item.houseId}&fileName=${image}`}/>
     }
        </div>
       ))
     }
               </div>

               </div>
               <div className="moreBtn">
                
                   
                 
        
               
               <button className="table__del" onClick={()=> deleteItem(item.houseId)}>Удалить продукт</button> 

               </div>
               </div>
     

             
               
                </>  )
              })
            
            }
       
      </div>    

  
    </div>
  );
};

export default Datatable;
