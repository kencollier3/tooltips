import React from 'react';
import './App.css';

const topMargin = 25;

function toggleTooltipClass(tooltipParent, tooltipChild) {
    tooltipParent.addEventListener('mouseover', function () {
        let parentRecY = tooltipParent.getBoundingClientRect().y;
        let childRecHeight = tooltipParent.getBoundingClientRect().height;
        let tooltipChildClass = tooltipChild.classList;

        if (parentRecY + childRecHeight > childRecHeight + (childRecHeight + topMargin)) {
            tooltipChildClass.remove('tooltip-bottom');
            tooltipChildClass.add('tooltip-top');
        } else {
            tooltipChildClass.remove('tooltip-top');
            tooltipChildClass.add('tooltip-bottom');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
const tooltipChild = document.querySelector('#tooltip-child');
const tooltipParent = document.querySelector('#tooltip-parent');

    toggleTooltipClass(tooltipParent, tooltipChild);

});

function App() {
    return (
        <div className="App">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <button
                id={'tooltip-parent'}
                className={'margin-top-fix'}> Tool Tip Parent
                    <span
                        id={'tooltip-child'}
                        className={'tooltip-top'}>Tooltip Child</span>
            </button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default App;
