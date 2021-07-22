import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3>404</h3>
            
            <Link to ="/">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;