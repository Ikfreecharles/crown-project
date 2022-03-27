import { Route } from "react-router-dom";
import { default as CollectionsOverview } from "../../components/collections-overview/Collections-overview.container";
import { default as Collection } from "../Collection/Collection.container";

function Shop({ match }) {
   return (
      <div className="shop-page">
         <Route exact path={`${match.path}`} component={CollectionsOverview} />
         <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
   );
}

export default Shop;
