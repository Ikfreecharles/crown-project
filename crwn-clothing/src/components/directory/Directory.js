import { useQuery, gql } from "@apollo/client";
import "./directory.styles.scss";
import MenuItem from "../menu-item/Menu-item";
import { CircularProgress } from "@mui/material";

function Directory() {
   const GET_SECTION = gql`
      {
         section {
            id
            title
            imageUrl
            linkUrl
            size
         }
      }
   `;
   const { loading, error, data } = useQuery(GET_SECTION);
   if (loading) return <CircularProgress />;
   if (error) return <p>{`There is an error ${error.message}`}</p>;
   console.log(data);
   return (
      <div className="directory-menu">
         {data.section.map(({ id, ...otherSectionprops }) => {
            return <MenuItem key={id} {...otherSectionprops} />;
         })}
      </div>
   );
}

export default Directory;
