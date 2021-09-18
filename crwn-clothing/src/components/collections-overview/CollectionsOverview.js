import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/Shop.selectors";
import "./collectionsOverview.styles.scss";
import PreviewCollection from "../preview-collection/PreviewCollection";

function CollectionsOverview({ collections }) {
   return (
      <div className="collections-overview">
         {collections.map(({ id, ...otherCollectionProps }) => {
            return <PreviewCollection key={id} {...otherCollectionProps} />;
         })}
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
