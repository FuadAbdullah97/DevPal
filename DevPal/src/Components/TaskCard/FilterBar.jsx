import React from 'react';
import "./Component.css"
function FilterBar(props) {
    return (
        <div className="filter-bar">
            <div className="header-title">
                <h2>MY TASKS</h2>
            </div>
            <div className="filter-dropdown">
                <select name="filters" id="filter-select">
                    <option value="Soft By Priority">Soft By Priority</option>
                    <option value="Soft By Date">Soft By Date</option>
                </select>
            </div>
            {/*<div className="light-dark-button">*/}
            {/*    <input type="checkbox"/>*/}
            {/*    <span className="slider rounded"></span>*/}
            {/*</div>*/}
        </div>
    );
}

export default FilterBar;