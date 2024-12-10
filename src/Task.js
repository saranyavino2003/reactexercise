const Task=() =>{
    const divided= ()=> {
        const divided=[]
        for( let i=1; i<=100; i++){
            if(i%3!=0){
              divided.push(i);
                
            }
        }
        console.log("divided",divided);
    }
   divided()
    
    return(
        <>
    <p>task</p>
        </>
    )
}
export default Task;
