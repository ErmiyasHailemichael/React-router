import { Link} from 'react-router-dom'

function Nav() {
    return (
      <div className="nav">
       <Link to='/'>
        <div>Home</div>
       </Link>
       <Link to='/stocks'>
        <div>Stocks</div>
       </Link>
       <Link to='/about'>
        <div>Aboutus</div>
       </Link>

      </div>
    );
  }
  
  export default Nav;