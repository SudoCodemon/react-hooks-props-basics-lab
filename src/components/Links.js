import React from 'react'

function Links(props) {
    console.log("links:", props)

    return (
        <>
            <h3>Links</h3>
            {props.github ? <a href={props.github}>{props.github}</a> : null}
            {props.linkedin ? <a href={props.linkedin}>{props.linkedin}</a> : null}

        </>
    )
}

export default Links;
