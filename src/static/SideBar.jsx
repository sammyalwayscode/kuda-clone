import { Link } from "react-router-dom"
import styled from "styled-components"

const Sidebar = ({toggle, setToggle}) => {
    const test = () =>{
        setToggle(false)
    }
    return(
        <Container>
           <Link to="/" onClick={test}>
           <nav>Personal</nav>
           </Link>
           <Link to="/business" onClick={test} >
           <nav>Business</nav></Link>
           <Link to="/companies" onClick={test}>
           <nav>Companies</nav></Link>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
min-height: calc(100vh - 80px);
background-color: rebeccapurple;
color: #fff;
`