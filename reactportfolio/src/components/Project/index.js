import React from "react"

function Project(props){
    return (
        <div>
        <img src = {props.src} alt = {props.alt} height = "200" width = "300"/>
        <p><a className = "homework-link" href = {props.deployed}>{props.linkone}</a></p>
        <p><a className = "homework-link" href = {props.repo}>{props.linktwo}</a></p>
        </div>
    );
}

export default Project