import React from 'react';
import './Modules.css';

export default function Modules() {
    return (
        <div>
            <div className="module-container align-left">
                <img className="module-icon" src= "" alt="icon-1"/>
                <h3 className="module-name">Fermentum ante sagittis massa.</h3>
                <p className="module-description">Convallis ac interdum gravida ullamcorper sit aliquet posuere. </p>
                <img className="module-image" src="" alt="module-1" />
            </div>
            <div className="module-container align-right">
                <img className="module-icon" src= "" alt="icon-2"/>
                <h3 className="module-name">Id interdum ultrices at massa.</h3>
                <p className="module-description">Sagittis non ipsum cras cursus. Augue urna adipiscing etiam feugiat.</p>
                <img className="module-image" src="" alt="module-2" />
            </div>
            <div className="module-container align-left">
                <img className="module-icon" src= "" alt="icon-3"/>
                <h3 className="module-name">Facilisis in sem ipsum amet ut elit.</h3>
                <p className="module-description">Enim congue suspendisse pretium fames. Nulla velit tortor pretium.</p>
                <img className="module-image" src="" alt="module-3" />
            </div>
            <div className="module-container align-right">
                <img className="module-icon" src= "" alt="icon-4"/>
                <h3 className="module-name">Nisl euismod ac orci orci ultricies.</h3>
                <p className="module-description">Semper urna eget sed convallis in nullam eget sed eros justo morbi dui.</p>
                <img className="module-image" src="" alt="module-4" />
            </div>
        </div>
    )
}
