import styled from "styled-components"

const Info = () => {

    const cardArray = [
        {
            title: "a",
            dsc: "Noun is the name of a boy"
        },
        {
            title: "b",
            dsc: "Prown is the name of a boy"
        },
        {
            title: "c",
            dsc: "bdjf is the name of a boy"
        },
        {
            title: "d",
            dsc: "bghdkfd is the name of a boy"
        },
        {
            title: "e",
            dsc: "y3e7r is the name of a boy"
        },
    ]

    return(
        <div >
           {cardArray.map((infoo, i)=>(
            <Card key={i}>
            <h1>{infoo.title} </h1>
            <p>{infoo.dsc} </p>
           </Card>
           ))}
        </div>
    )
}

export default Info

const Card = styled.div`
height: 200px;
width: 300px;
background-color: darkcyan;
color: #fff;
`