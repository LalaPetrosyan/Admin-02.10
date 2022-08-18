import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"

const List = () => {
  return ( 
  <><Sidebar/>
    <div className="list">
     
      <div className="listContainer">
        <Datatable/>
 
      </div>
    </div>
    </>
  )
}

export default List