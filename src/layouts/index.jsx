import React from "react";
import { Link } from "gatsby";

export default ({ children }) => (
    <div>
        <Link to={`/about`}>
            About
        </Link>
        {children}
    </div>
)