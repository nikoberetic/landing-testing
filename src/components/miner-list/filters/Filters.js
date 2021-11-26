import {generateFiltersQueryString} from "../../../utils/helpers";

export default function Filters({...props}) {

    const clearFilter = () => {
        let elements = document.getElementsByClassName('filter-button active');
        while(elements.length > 0){
            elements[0].classList.remove('active');
        }
        props.setFilterVal('');
        props.setFilterChanged(true);
    };

    const toggleFilterQuery = (event, newParam) => {
        event.target.classList.toggle("active");
        props.setFilterVal(generateFiltersQueryString('AND', props.filterVal, newParam));
        props.setFilterChanged(true);
    };

    const listDeals = props.filtersList.map((f, id) => {
        return (
            <button key={ id } type="button" className="filter-button" onClick={(event) => toggleFilterQuery(event, f)}>{ f.replace('_', ' ').replace('-', '') }</button>
        )
    })

    return (
        <div className="d-flex align-items-centerc flex-wrap pb-3 mb-4">
            <button type="button" className="filter-button ml-0" onClick={clearFilter}>All</button>
            { listDeals }
        </div>
    );
}
