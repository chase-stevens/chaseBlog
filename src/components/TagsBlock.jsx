import React from 'react'
import { Link } from 'gatsby'

const TagsBlock = ({ list }) => {
    return (
        <div>
            <strong>Tags</strong>
            {' '} 
            {list.map(tag => 
            <span>
                <Link key={tag} to={`/tags/${tag}`}>
                    {tag}
                </Link>
                {' '} 
            </span>
            )}
        </div>
    )
}

export default TagsBlock