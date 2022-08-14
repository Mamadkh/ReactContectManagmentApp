
import {Purple} from "../../helpers/Colors"

const SearchContacts = () => {
    return (
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" id="basic-addon1"
                style={{ backgroundColor: Purple }}>
                <i className="fa fa-search"></i>
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Search Contact"
                aria-label="Search"
                aria-describedby="basic-addon1" />
        </div>
    )
}

export default SearchContacts;