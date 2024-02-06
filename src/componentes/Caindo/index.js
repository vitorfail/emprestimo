import "./index.scss"

export default function Caindo(props){
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return(
        <div className="flores">
            {props.img.map((item, key) => (
                <div style={{backgroundImage:"url("+item+")", height:"auto",width:numeroAleatorio(10, 30) +"px", animationDelay:numeroAleatorio(10, 30)+"s"}}></div>
            ))}
        </div>
    )
}