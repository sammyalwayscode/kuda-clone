import {useState} from 'react'
import styled from 'styled-components'

const Business = () => {
    const [myNum, setMyNum] = useState(2)

    const increaseNum = () => {
        setMyNum(myNum + 1)
    }

    return(
        <div>
            <br />
            <br />
            <br />
            <h1>React Hooks</h1>
            <hr />
            <Holder>
            <button>Subtract</button>
            <h1> {myNum} </h1>
            <button onClick={increaseNum}>Add</button>
            </Holder>
        </div>
    )
}

export default Business

const Holder = styled.div`
display: flex;
justify-content: space-around;
`