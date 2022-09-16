




let Mycomponent = (props)=>{
    console.log(props)
    return (
        <div className="Component">
            <h1>Hey</h1>
            <p>{props.greet} i am a {props.sex} and i'm {props.stack} developer</p>
        </div>
    )
}
export default Mycomponent