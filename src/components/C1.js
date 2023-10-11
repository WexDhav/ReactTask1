import {useState} from 'react';
function C1()
{
    const [num,setNum] = useState("0");
    const myStyle1 = {
        position:"absolute",
        top:"25%",
        left:"35%"
    }
    const myStyle2 = {
        height:"100px",
        width:"400px",
        border:"2px solid",
        borderRadius:"5px"
    }
    const f1 = event => {
        const inputValue = event.target.value;
        
        if (inputValue.trim() !== '') {
            //const words = inputValue.match(/\b[-?(\w+)?]+\b/gi);
            const  words = inputValue.split(' ').filter(word => word !== '');

            if (words !== null) {
                setNum(words.length);
            } else {
                setNum(0);
            }
        } else {
            setNum(0);
        }
    }
    return(
        <div style={myStyle1}>
            <h1 style={{textAlign:"center"}}>Responsive Paragraph Word <br/> Counter</h1>
            <textarea id="i1" style={myStyle2} onChange={f1}></textarea>
            <br/>
            <br/>
            <span style={{color:"grey"}}>Word Count: {num}</span>
        </div>
    )
}
export default C1;