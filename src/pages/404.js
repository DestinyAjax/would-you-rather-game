import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => (
    <div className="container text-center">
        <h1>Page Not Found</h1>
        <p><Link to="/">Go to home page</Link></p>
        <style>{`
            div {
                padding: 50px;
            }
        `}</style>
    </div>
);

export default Page404;