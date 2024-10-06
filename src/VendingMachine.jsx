import { Link } from "react-router-dom/";

const VendingMachine = () => {

    return(
        <div>
            <h1>Vending Machine</h1>
            <img src="https://daganghalal.blob.core.windows.net/28296/Product/1000x1000__11000-1643339448554.jpg"/> <br></br>
            <Link to="/candy">Candy</Link><br></br>
            <Link to="/chocolate">Chocolate</Link><br></br>
            <Link to="/chips">Chips</Link><br></br>
        </div>
    )
}

export default VendingMachine;