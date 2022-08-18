import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { useState } from "react";
import axios from "axios";
const New = ({ title }) => {
    const [formErrors,setFormErrors]=useState({})

  const [showComunication, setShowComunication]=useState(false);
  const [showInYerevan,setShowInYerevan]=useState(false);
  const [showAnimals, setShowAnimals]=useState(true);
  const[onlyAnimals,setOnlyAnimlas]=useState(true);
  const[prop,setProp]=useState(false)

  // const [file, setFile] = useState();
  // const [selectedFile, setSelectedFile] = useState();
  const token = localStorage.getItem("token");

  // let data = new FormData();

//et housid-i pah@ vonc petq anes chhaskaca 
  const [loginData, setLoginData] = useState({
    isTopic:"",
    titleRU:"",
    titleEN:"",
    titleAM:"",
    bioRU:"",
    bioEN:"",
    bioAM:"",
    property:"",
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
    currencyType:"",
    mainPicture:[],
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
    if(loginData.property===""){
      errors.property="Обязательное поле:Выберите имущество"
    }
    if(loginData.paymentMethod===""){
      errors.paymentMethod="Обязательное поле: Напишите тип недвижимости"
    }
    if(loginData.commercialType===""){
      errors.commercialType="Обязательное поле: Напишите тип недвижимостиКоммерческий тип"
    }
    if(loginData.city===""){
      errors.city="Обязательное поле: Выберите город"
    }
    if(loginData.yerevanRegion===""){
      errors.yerevanRegion="обязательное поле: выберите районы Еревана"
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
      errors.price="Обязательное поле։ Введите цену"
    }
    if(loginData.currencyType===""){
      errors.currencyType="Обязательное поле։ выберите тип валюты"
    }
    if(loginData.pictures.length===0){
      errors.pictures="Обязательное поле։ Выберите картинку"
    }
    return errors
  }

  const login = (e) => {
    setFormErrors(validate(loginData))

     let data=new FormData()
    e.preventDefault()

    //console.log(loginData)


    for ( let key in loginData ) {
    
      if(key==="mainPicture"){
        let dataimg=loginData[key]
        data.append("mainPicture",dataimg[0])
        // for(let i=0; i<dataimg.length; i++){
        //   // console.log(dataimg[i])
        //         }
       }
     else if(key==="pictures"){
      let dataimg=loginData[key]
      for(let i=0; i<dataimg.length; i++){
        // console.log(dataimg[i])
        data.append("pictures",dataimg[i])      }
     }
     else{
      // console.log(key)
      data.append(key, loginData[key]);
     }
     


    }
    // axios.post(`${process.env.REACT_APP_MY_API_KAY}/addHouseData`, data)

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MY_API_KAY}/addHouseData` ,
      data: data,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((request) => {
      console.log(request)
      alert("Успешно добавлено.")
      window.location.replace("/users");
    })
    
    .catch((error) => 
    // console.log(error)
    alert(error)
    )
  };

  const changeData = (e) => {
    if(e.target.value==="Коммерческая" || e.target.value==="Продажа"){
      setOnlyAnimlas(false)
      setProp(false)
    

    }else if(e.target.value==="Ежемесячная"||e.target.value==="Посуточная"){
      setOnlyAnimlas(true)
      setProp(false)
    }

    if(e.target.value==="Коммерческая" ){
      setShowComunication(true)
      setProp(false)

    }else if(e.target.value==="Продажа"|| e.target.value==="Ежемесячная"||e.target.value==="Посуточная"){
      setShowComunication(false)
      setProp(false)
    }

    if(e.target.value==="Коммерческая"){
      setShowAnimals(false)
      setProp(false)
    }else if(e.target.value==="Продажа"|| e.target.value==="Ежемесячная"||e.target.value==="Посуточная"){
      setShowAnimals(true)
      setProp(false)

    }
    if(e.target.value==="Ереван"){
      setShowInYerevan(true)
    }else if(e.target.value==="Гюмри"||e.target.value==="Цахкадзор"||e.target.value==="Дилиджан"
    ||e.target.value==="Иджеван"||e.target.value==="Эчмиадзин"||e.target.value==="Ванадзор" ||
    e.target.value==="Севан" ||e.target.value==="Дзорахбюр"){
      setShowInYerevan(false)
    }
    if(e.target.value==="Частный дом"){
      setProp(true)
      
    }else if(e.target.value==="Квартира"){
      setProp(false)
      
    }
   
    if(e.target.type === "file"){
       
      const t = {
        ...loginData,
          [e.target.name]:e.target.files
          
        
        
        
      };
      console.log("111111111  " + JSON.stringify(t))
      // setFile(e.target.files[0])
      setLoginData(t);
      
    } else {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    }
    
  };
  return (
    <>
    <Sidebar />
    <div className="new">
 
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          
          </div>
          <div className="cards newCard">
            <form onSubmit={(e) => login(e)}>
            <div className="formInput">
                <label htmlFor="file1">
                главное фото:<DriveFolderUploadOutlinedIcon className="icon" />
                <p>Пожалуйста, выберите только одно изображение</p>
                

                </label>
                <input
                  name="mainPicture"
                  type="file"
                  id="file1"
                  onChange={(e) => changeData(e)}
                  multiple
                  style={{ display: "none" }}
                />
                
              </div>
              <input name="mainPicture" value={loginData.mainPicture.length}/>




              <div className="formInput">
                <label htmlFor="file">
                Картинки: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  name="pictures"
                  type="file"
                  id="file"
                  onChange={(e) => changeData(e)}
                  multiple
                  style={{ display: "none" }}
                />
                
              </div>
       
             <p className='errMess'>{formErrors.pictures}</p> <input name="pictures" value={loginData.pictures.length}/>
          
         
         

      
              <div className="more__info-top">


               <div className="more__info-left">
    
               <input className="info__border inputs__border" type="text" placeholder="Заглавие" name="titleRU"value={loginData.titleRU} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.titleRU}</p> 

                <input className="info__border inputs__border" type="text" placeholder="Title" name="titleEN"value={loginData.titleEN} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.titleEN}</p> 

                <input className="info__border inputs__border" type="text" placeholder="Վերնագիր" name="titleAM"value={loginData.titleAM} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.titleAM}</p> 
               
               
               </div>

         

               <div className="more__info-rigth">
               <input className="info__border inputs__border" type="text" placeholder="Улица" name="streetRU"value={loginData.streetRU} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.streetRU}</p> 

                <input className="info__border inputs__border" type="text" placeholder="Street" name="streetEN"value={loginData.streetEN} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.streetEN}</p> 

                <input className="info__border inputs__border" type="text" placeholder="Փողոց" name="streetAM"value={loginData.streetAM} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.streetAM}</p> 
               </div>

            </div>

            <div className=" more__info-bio">
             

               <input className="info__txt-bio bio__area" type="text" placeholder="Био" name="bioRU"value={loginData.bioRU} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.bioRU}</p> 
                <input className="info__txt-bio bio__area" type="text" placeholder="Bio" name="bioEN"value={loginData.bioEN} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.bioEN}</p> 

                <input className="info__txt-bio bio__area" type="text" placeholder="Բիո" name="bioAM"value={loginData.bioAM} onChange={(e) => changeData(e)} />
                <p className='errMess'>{formErrors.bioAM}</p> 

               </div>

               <div className="more__info-top info__end">
               

               <div className="more__info-left">

              




               <div className="info__txt">
                
                <select className="info__border selects__border"  name="paymentMethod"  value={loginData.paymentMethod} onChange={(e) => changeData(e)}>
               <option value="" disabled  >Тип недвижимости</option>
                <option value="Продажа">Продажа</option>
                <option value="Коммерческая">Коммерческая</option>
                <option value="Ежемесячная">Ежемесячная</option>
                <option value="Посуточная">Посуточная</option>
              </select> 
              <p className='errMess'>{formErrors.paymentMethod}</p> 
               </div>
               <div className="info__txt" style={{display:showComunication?"none":"block"}}>
                
                <select className="info__border selects__border"  name="property"  value={loginData.property} onChange={(e) => changeData(e)}>
               <option value="" disabled  >Имущество</option>
                <option value="Частный дом">Частный дом</option>
                <option value="Квартира">Квартира</option>

              </select> 
              <p className='errMess'>{formErrors.property}</p> 
               </div>


                <div className="info__txt" style={{display:showComunication?"block":"none"}}>
                <select className="info__border selects__border" name="commercialType" value={loginData.commercialType} onChange={(e) => changeData(e)}>
              <option value="" disabled  >Коммерческий тип</option>
                <option value="Офисное помещение">Офисное помещение</option>
                <option value="Торговое помещение">Торговое помещение</option>
                <option value="Бизнес">Бизнес</option>
                <option value="Другое">Другое</option>
              </select>
              <p  className='errMess'>{formErrors.commercialType}</p> 
                </div>
              

               <div className="info__txt">
               <select name="city"  className="info__border selects__border" value={loginData.city} onChange={(e) => changeData(e)}>
                <option value="" disabled  >Регион</option>
              <option value="Ереван">Ереван</option>
                <option value="Гюмри">Гюмри</option>
                <option value="Цахкадзор">Цахкадзор</option>
                <option value="Дилиджан">Дилиджан</option>
                <option value="Иджеван">Иджеван</option>
                <option value="Эчмиадзин">Эчмиадзин</option>
                <option value="Ванадзор">Ванадзор</option>
                <option value="Севан">Севан</option>
                <option value="Дзорахбюр">Дзорахбюр</option>
                
              </select>
              <p className='errMess'>{formErrors.city}</p> 
               </div>
               



               <div className="info__txt" style={{display:showInYerevan?"block":"none"}}>
               <select className="info__border selects__border" name="yerevanRegion" value={loginData.yerevanRegion} onChange={(e) => changeData(e)}>
              <option value="" disabled  >Регионы Еревана</option>
                <option value="Аджапняк">Аджапняк</option>
                <option value="Арабкир">Арабкир</option>
                <option value="Аван">Аван</option>
                <option value="Давташен">Давташен</option>
                <option value="Эребуни">Эребуни</option>
                <option value="Канакер-Зейтун">Канакер-Зейтун</option>
                <option value="Кентрон">Кентрон</option>
                <option value="Малатия-Себастия">Малатия-Себастия</option>
                <option value="Норк-Мараш">Норк-Мараш</option>
                <option value="Нор Норк">Нор Норк</option>
                <option value="Нубарашен">Нубарашен</option>
                <option value="Шенгавит">Шенгавит</option>
              </select>
         
              <p className='errMess'>{formErrors.yerevanRegion}</p> 
               </div>
               
               <div className="info__txt" style={{display:showAnimals?"block":"none"}}>
                <div style={{display:prop?"none":"block"}}>
            <select  className="info__border selects__border" name="buildingType" value={loginData.buildingType} onChange={(e) => changeData(e)}>
               <option value="" disabled  > Тип здания </option>
                <option value="Каменное">Каменное </option>
                <option value="Панельное">Панельное </option>
                <option value="Монолит">Монолит</option>
              </select>
                  <p className='errMess'>{formErrors.buildingType}</p> 
               </div>
               </div>

               <div className="info__txt">
               <input className="info__border inputs__border" type="text"placeholder="Общая площадь" name="area"value={loginData.area} onChange={(e) => changeData(e)}/>
               <p className='errMess'>{formErrors.area}</p> 
               </div>
               
               
               <div className="info__txt" style={{display:showAnimals?"block":"none"}}>
               <input className="info__border inputs__border" type="text"placeholder="Количество комнат" name="rooms"value={loginData.rooms} onChange={(e) => changeData(e)}/>
               <p className='errMess'>{formErrors.rooms}</p> 
               </div>
               

               <div className="info__txt" style={{display:onlyAnimals?"block":"none"}}>
                
               <select className="info__border selects__border" name="animals" value={loginData.animals} onChange={(e) => changeData(e)}>
                  <option   value="" disabled  >Животные</option>
                  <option value="WithAnimals">C животными </option>
                <option value="WithoutAnimals">Без животных </option>
              </select>
              <p className='errMess'>{formErrors.animals}</p> 
               </div>
               



              

               
               </div>



               <div className="more__info-rigth">
               <div className="info__txt">
               <select className="info__border selects__border" name="isTopic" value={loginData.isTopic} onChange={(e) => changeData(e)}>
                <option value="" disabled  >Toп</option>
                <option value="Да">Да </option>
                <option value="Нет">Нет </option>
              </select>
              <p className='errMess'>{formErrors.isTopic}</p> 
               </div>
               
               <div className="info__txt" style={{display:prop?"none":"block"}}>
               <select name="newBuilt" className="info__border selects__border" value={loginData.newBuilt} onChange={(e) => changeData(e)}>
                  <option   value="" disabled  >Новостройка</option>
                  <option value="Да">Да </option>
                <option value="Нет">Нет </option>
              </select>
              <p className='errMess'>{formErrors.newBuilt}</p> 
               </div>
               


               <div className="info__txt">
               <select name="repairType" className="info__border selects__border" value={loginData.repairType} onChange={(e) => changeData(e)}>
                <option value="" disabled  >Ремонт</option>
                <option value="Без ремонта">Без ремонта</option>
                <option value="Старый">Старый</option>
                <option value="Частичный">Частичный</option>
                <option value="Косметический">Косметический</option>
                <option value="Евроремонт">Евроремонт</option>
                <option value="Дизайнерский">Дизайнерский</option>
                <option value="Капитальный">Капитальный</option>
              </select>  
              <p className='errMess'>{formErrors.repairType}</p> 
               </div>
               
               <div className="info__txt" style={{display:showAnimals?"block":"none"}}>
                
              <select name="balcony" className="info__border selects__border" value={loginData.balcony} onChange={(e) => changeData(e)}>
                  <option   value="" disabled  >Присутствие балкона</option>
                  <option value="WithBalcony">C балконом  </option>
                <option value="WithoutBalcony">Без балконa </option>
              </select>
              <p className='errMess'>{formErrors.balcony}</p> 
               </div>
             

               <div className="info__txt" style={{display:showAnimals?"block":"none"}}>
               <input type="text"placeholder="Количество санузлов" className="info__border inputs__border" name="toilets"value={loginData.toilets} onChange={(e) => changeData(e)}/>
               <p className='errMess'>{formErrors.toilets}</p> 
               </div>
               

               <div className="info__txt" style={{display:prop?"none":"block"}}>
               <select name="elevator" className="info__border selects__border" value={loginData.elevator} onChange={(e) => changeData(e)}>
                  <option   value="" disabled  >Присутствие лифта</option>
                  <option value="Да">Да </option>
                <option value="Нет">Нет </option>
              </select>
              <p className='errMess'>{formErrors.elevator}</p> 
              </div> 
              

            <div className="info__txt">
            <input type="text" className="info__border inputs__border" placeholder="Цена" name="price"value={loginData.price} onChange={(e) => changeData(e)}/>
            <p className='errMess'>{formErrors.price}</p> 
            </div>
            <div className="info__txt">
                
                <select className="info__border selects__border"  name="currencyType"  value={loginData.currencyType} onChange={(e) => changeData(e)}>
               <option value="" disabled  >тип валюты </option>
                <option value="AMD">AMD</option>
                <option value="USD">USD</option>
                <option value="RUB">RUB</option>
              </select> 
              <p className='errMess'>{formErrors.currencyType}</p> 
               </div>
            
            
               <div className="info__txt" style={{display:prop?"none":"block"}}>
               <input type="text" placeholder="Этаж" className="info__border inputs__border"  name="floor"value={loginData.floor} onChange={(e) => changeData(e)} />
               <p className='errMess'>{formErrors.floor}</p> 
               </div>
               
               <div className="info__txt" style={{display:prop?"none":"block"}}>
               <input type="text" placeholder="Количество этажей" className="info__border inputs__border" name="floorNumber"value={loginData.floorNumber} onChange={(e) => changeData(e)} />
               <p className='errMess'>{formErrors.floorNumber}</p> 
               </div>
               
               </div>

            </div>


       


          
              
       

 

   


   

              

              

              

          
             
             
             

              
              


                

       
               
            

       

       
     

                
                
          
              <button>Добавить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
 );
};

export default New;
