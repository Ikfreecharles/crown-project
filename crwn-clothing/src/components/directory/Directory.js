import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/Directory.selector";
import "./directory.styles.scss";
import MenuItem from "../menu-item/Menu-item";

function Directory({ sections }) {
   return (
      <div className="directory-menu">
         {sections.map(({ id, ...otherSectionprops }) => {
            return <MenuItem key={id} {...otherSectionprops} />;
         })}
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
