import React from 'react';
import "./Content.css";

function Content({ children }) {
	return (
		<main className="content" id="content">
            {children}
        </main>
	);
}

export default Content