import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import CollectionsOverview from "./CollectionsOverview";

const GET_COLLECTIONS = gql`
   {
      collection {
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

const CollectionsOverviewContainer = () => {
   const { loading, error, data } = useQuery(GET_COLLECTIONS);

   if (loading) return <CircularProgress />;
   if (error) return <p>There is an error {`${error.message}`}</p>;
   console.log(error);

   return (
      <div>
         <CollectionsOverview collections={data.collection} />{" "}
      </div>
   );
};

export default CollectionsOverviewContainer;
