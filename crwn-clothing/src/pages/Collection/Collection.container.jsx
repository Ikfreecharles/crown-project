import { useQuery, gql } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import Collection from "./Collection";

const GET_COLLECTION = gql`
   query getCollectionByTitle($title: String!) {
      getCollectionByTitle(title: $title) {
         id
         title
         items {
            id
            name
            price
            imageUrl
         }
      }
   }
`;

const CollectionPageContainer = ({ match }) => {
   const { loading, error, data } = useQuery(GET_COLLECTION, {
      variables: { title: match.params.collectionId },
   });

   if (loading) return <CircularProgress />;
   if (error) return <p>There is an error</p>;
   return <Collection collection={data.getCollectionByTitle} />;
};

export default CollectionPageContainer;
