// import { Link } from "react-router-dom";
// const ResCard =(props) =>{
//     const {restaurant}= props
//     return(
//         <div className='restaurant-card'>
//           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId } />
//           <Link to={"/restaurant/"}>
//           <div>{restaurant.name}</div>
//           <div>{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
//           <div>{restaurant.cuisines.join(', ')}</div>
//           <div>{restaurant.areaName}</div>
//           </Link>
//         </div>
        
//     )
// }

// export default ResCard;

import { Link } from "react-router-dom";

const ResCard = (props) => {
  const { restaurant } = props;
  return (
    <div className='res-card'>
      <img
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          restaurant.cloudinaryImageId
        }
        alt={restaurant.name}
      />
      <Link to={'/restaurant/' + restaurant.id}>
        <div>{restaurant.name}</div>
        <div>🌟{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
        <br />
        <div>{restaurant.cuisines?.join(', ')}</div>
      </Link>
    </div>
  );
};

export default ResCard;