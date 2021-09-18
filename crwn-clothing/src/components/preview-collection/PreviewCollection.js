import "./previewCollection.scss";
import ItemCard from "../collection-item/ItemCard";

function PreviewCollection({ title, items }) {
   return (
      <div className="collection-preview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="preview">
            {items
               .filter((item, idx) => idx < 4)
               .map((item) => {
                  return <ItemCard key={item.id} item={item} />;
               })}
         </div>
      </div>
   );
}

export default PreviewCollection;
