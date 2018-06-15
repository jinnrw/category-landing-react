import React, { Component } from 'react';
import './ThemeSelector.scss';

class ThemeSelector extends Component {
    render() {
        return(
            <div className="theme-selection">
                <form>
                    <select ref={select => this.themeSet = select} name="themeSet">
                        <option value="A">Costco US</option>
                        <option value="B">Samsclub US</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default ThemeSelector;