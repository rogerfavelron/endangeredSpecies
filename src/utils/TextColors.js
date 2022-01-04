const Util = (string) => {
    let NodeArray = [];
    let currentStart;
    let currentEnd;
    let currentUnmodified = "";
    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        if (current === "!") {
            //next is to be NodeArray
            currentStart = i + 1;
            //currentUnmodified ended
            console.log("currentUnmodified",currentUnmodified);
            let spanate = <span>{currentUnmodified}</span>
            NodeArray.push(spanate);
            currentUnmodified=""
            
        }
        else if (current === "*") {
            currentEnd = i - 1;
            let highlight = string.slice(currentStart,currentEnd+1);
            let spanate = <span className="highlight">{highlight}</span>
            console.log("highlight",highlight);
            NodeArray.push(spanate);
            currentStart = "";
            currentEnd= "";
            currentUnmodified = "";
        }
        else{
            currentUnmodified+=current;
            if(i==string.length-1){
                console.log("currentUnmodified",currentUnmodified);
                let spanate = <span>{currentUnmodified}</span>;
                NodeArray.push(spanate);
                currentUnmodified=""
            }
        }
    }
    console.log(NodeArray);
    return NodeArray;
}
export default Util;