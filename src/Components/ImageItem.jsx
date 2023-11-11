const ImageItem = ({ title, url }) => {
    return ( 
        
        <div>
        <img src={url} alt={title} />
        <h5> { title } </h5>
        </div>
    
     
     );
}
 
export default ImageItem;