import React, { useEffect } from 'react'
import axios from 'axios';
function EditCustomer({ editForm, handleCustomerUpdate, handleChange }) {
    
    let      {houseId,titleRU,titleEN,titleAM,streetRU,streetEN,streetAM,bioRU,
        bioEN,bioAM,paymentMethod,city,yerevanRegion,buildingType,
        area,rooms,animals,isTopic,commercialType,newBuilt,repairType,
        balcony,toilets,elevator,floor,floorNumber} = editForm

        
        function handleEditForm(e) {
            e.preventDefault();
            axios(`${process.env.REACT_APP_MY_API_KAY}/updateHouseData`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(editForm),
            })
                .then(resp => 
                    alert(resp)
                    )
                .then(updatedCustomer => {
                    handleCustomerUpdate(updatedCustomer)})
        }
    

    return (
        <div>
            <h4>Edit Customer {houseId }</h4>
            <form onSubmit={handleEditForm}>
                <div className="cards"  >
                <div className="more__info" >
                
                   
                 <div className="more__info-top">
                

                    <div className="more__info-left">
                    заглавие: <input type="text" name="titleRU" value={titleRU} onChange={handleChange}/>
                    TITLE:<input type="text" name="titleEN" value={titleEN} onChange={handleChange}/>
                    ՎԵՐՆԱԳԻՐ: <input type="text" name="titleAM" value={titleAM} onChange={handleChange}/>
                     </div>

              

                    <div className="more__info-rigth">
                    улица: <input type="text" name="streetRU" value={streetRU} onChange={handleChange}/>
                    street:<input type="text" name="streetEN" value={streetEN} onChange={handleChange}/>
                    փողոց: <input type="text" name="streetAM" value={streetAM} onChange={handleChange}/>
                    </div>

                 </div>

                <div className=" more__info-bio">
                    Био: <input type="text" name="bioRU" value={bioRU} onChange={handleChange}/>
                    Bio:<input type="text" name="bioEN" value={bioEN} onChange={handleChange}/>
                    Բիո: <input type="text" name="bioAM" value={bioAM} onChange={handleChange}/>


                </div>
                <div className="more__info-top">
                
           
                <div className="more__info-left">

                Тип недв․: <input type="text" name="paymentMethod" value={paymentMethod} onChange={handleChange}/>
                Город:<input type="text" name="city" value={city} onChange={handleChange}/>
                Регион Еревана: <input type="text" name="yerevanRegion" value={yerevanRegion} onChange={handleChange}/>
                Тип здания: <input type="text" name="buildingType" value={buildingType} onChange={handleChange}/>
                Площадь:<input type="text" name="area" value={area} onChange={handleChange}/>
                Кол․ комнат: <input type="text" name="rooms" value={rooms} onChange={handleChange}/>
                Животные: <input type="text" name="animals" value={animals} onChange={handleChange}/>

                
                <button type="submit">Submit Changes</button>
                </div>
                <div className="more__info-rigth">

                Toп: <input type="text" name="isTopic" value={isTopic} onChange={handleChange}/>
                Тип коммерции или аренды:<input type="text" name="commercialType" value={commercialType} onChange={handleChange}/>
                Новостройка: <input type="text" name="newBuilt" value={newBuilt} onChange={handleChange}/>
                Ремонт: <input type="text" name="repairType" value={repairType} onChange={handleChange}/>
                Балкон:<input type="text" name="balcony" value={balcony} onChange={handleChange}/>

               
                Кол.санузлов: <input type="text" name="toilets" value={toilets} onChange={handleChange}/>
                Лифт:<input type="text" name="elevator" value={elevator} onChange={handleChange}/>

          
               
     
                этаж: <input type="text" name="floor" value={floor} onChange={handleChange}/>
                номер этажа:<input type="text" name="floorNumber" value={floorNumber} onChange={handleChange}/>

       
                </div>
                

             </div>
                
                {/* <div className="more__picture">
                <div className="info__txt"><b>Картинки</b></div>
                  
                  {
        pictures?.map((image) => (
         <div className="more__info-pictures">
    
          {

        <img className="more__info-img" alt="product-img" src={`${process.env.REACT_APP_MY_API_KAY}/files?houseId=${houseId}&fileName=${image}`}/>
      }
         </div>
        ))
      }
                </div> */}

                </div>
                <div className="moreBtn">
               
                    
                  
         
                
                {/* <button className="table__del" onClick={()=> deleteItem(houseId)}>Delet</button>  */}
                </div>
                </div>
            </form>
        </div>
    )
}
export default EditCustomer


