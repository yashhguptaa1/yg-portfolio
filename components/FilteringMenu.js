import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// classnames fom fontawesome
//based on state value we decide icon to be shown
const LIST_VIEW_ICONS = ["list", "border-all"];
const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list]}
        onClick={() => onChange("view", { list: +!filter.view.list })}
      />
    </div>
  );
};

export default FilteringMenu;

/*
!filter
prints : true

+true
prints : 1

+false 
prints : 0
*/
