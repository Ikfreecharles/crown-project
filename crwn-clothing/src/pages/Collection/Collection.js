import "./collection.styles.scss";
import ItemCard from "../../components/collection-item/ItemCard";

function Collection({ collection }) {
   const { title, items } = collection;
   return (
      <div className="collection-page">
         <h2 className="title">{title}</h2>
         <div className="items">
            {items.map((item) => {
               return <ItemCard key={item.id} item={item} />;
            })}
         </div>
      </div>
   );
}

export default Collection;
