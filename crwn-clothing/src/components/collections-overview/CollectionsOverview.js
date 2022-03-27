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

export default CollectionsOverview;
