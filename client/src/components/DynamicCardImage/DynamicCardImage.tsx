import image from '../../assets/img/golf.jpg';

export const DynamicCardImage:React.FC = () =>{
    
    
    return (
        <img src={image} style={{height:"21vw",width:"15.8vw",borderRadius:"8px",objectFit:'cover'}} alt="" />
    );
}