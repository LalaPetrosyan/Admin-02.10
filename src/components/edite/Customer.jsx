import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Customer({customer, customer:{houseId, price, titleRU, pictures},captureEdit, changeEditState}) {

    return (
        <>
        <div className="cards"  >
                <div className="card__start"> 
                <div className="card__start-left" >
               <div className="info__txt"><b>Код:</b><p> {houseId}</p></div>
               <div className="info__txt"><b>Цена:</b><p> {price}</p></div>
               <div className="info__txt"><b>заглавие:</b><p> {titleRU}</p></div>
                <div className="card__btn">
      
                             <button
                  onClick={() => {
                    captureEdit(customer);
                    changeEditState(customer)
                  }}
                >
                  Edit
                </button>
  
                <div>
                  
                </div> 
 
                 <button className="btn__more" >
                    <ExpandMoreIcon className="icon"/>
                    Show more</button>
                    <button className="btn__more" ><ExpandLessIcon className="icon"/>show less</button>
                </div>
                </div>
                <div className="card__start-rigth"  >
                {
                <img className="cards__img" src={`${process.env.REACT_APP_MY_API_KAY}/files?houseId=${houseId}&fileName=${pictures[0]}`}/>
                  }
                </div>
                </div>
                </div>
        </>
     
    )
}
export default Customer