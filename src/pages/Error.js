import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <h1 className="error-heading">Error</h1>
            <p>{error.message}</p>
            <Link to="/">Go back home!</Link>
        </>
    )
}

export default ErrorPage;