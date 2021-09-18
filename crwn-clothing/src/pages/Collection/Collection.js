import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/Shop.selectors";
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

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
