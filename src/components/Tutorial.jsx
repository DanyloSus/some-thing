import React from "react"

export default function Tutorial(props) {
    return(
        <div onClick={props.handleChangeTut} className="tutorial">
            <h1>Навчання</h1>
            <h4>Натискайте на ці кнопки для перемикання між сторінками</h4>
            <div style={{
                display: "flex",
                margin: "0 150px"
            }}>
                <div className="changers">&lt;</div>
                <div className="changers">&gt;</div>
            </div>
            <h4>Фотографії змінюються</h4>
          </div>
    )
}