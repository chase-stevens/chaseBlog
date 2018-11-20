import React from 'react'
import { Link } from 'gatsby'

const Tags = ({pageContext}) => {
    const { tags } = pageContext;
    return (
        <div>
            <ul>
                {tags.map((tagName, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/tags/${tagName}`}>
                                {tagName}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tags