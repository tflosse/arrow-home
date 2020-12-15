import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="tagline-signup">
                <h1>Grow with confidence.</h1>
                <p>Best way to manage your produsts, process, and goals at scale.</p>
                <form>
                    <input
                    placeholder="Your email">
                    </input>
                    <button className="black-button">Sign up</button>
                </form>
            </div>
            <img className="display-image" src="" alt="displays" />
            <div className="messaging">
                <h3>Sit quisque commodo volutpat id nisl. Justo dolor.</h3>
                <p>Magna gravida id interdum laoreet vitae. Et massa pretium accumsan placerat volutpat risus eu dignissim. Nunc nisl pellentesque lacus, vivamus feugiat. Lacus eu viverra tellus commodo eros eros justo amet. Fames.</p>
            </div>
        </div>
    )
}
