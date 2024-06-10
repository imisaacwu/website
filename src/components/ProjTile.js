import React from 'react';
import "../css/styles.css";

function ProjTile(props) {
    const Button = ({onClick, children, as: Component='button', ...rest}) => {
        return (
            <Component className={"tile"} {...rest}>
                {children}
            </Component>
        )
    }

    return (
        <Button as={"a"} href={props.url} target={"_blank"}>
            <img src={props.img} alt={"icon"}/>
            <div className={"content"}>
                <div className={"title"}>{props.title}</div>
                <div className={"subtitle"}>{props.subtitle}</div>
                <div className={"description"}>{props.description}</div>
            </div>
        </Button>
    );
}

export default ProjTile