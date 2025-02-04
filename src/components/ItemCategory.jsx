// import ItemList from "./itemlist"

// const ItemCategory =(props)=>{
//     const category=props.category
//     return(
//         <div className="category-container">
//             <div className="category-title">{category.card.card.title}</div>
//             {category.card.card.itemCards.map((item)=>{
//                 return <ItemList item={item}/>
//             })}
//         </div>
//     )
// }
// export default ItemCategory

import ItemList from "./ItemList"

const ItemCategory =(props)=>{
    const category = props.category
    return(
        <div className="category-container">
            <div className="category-title">{category.card.card.title}</div>
            {category.card.card.itemCards.map((item)=>{
                return <ItemList item={item}/>
            })}
        </div>
    )
}
export default ItemCategory;