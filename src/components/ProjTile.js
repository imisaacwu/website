import React from 'react';

function ProjTile(props) {
    const Button = ({onClick, children, as: Component='button', ...rest}) => {
        return (
            <Component className={"tile"} {...rest}>
                {children}
            </Component>
        )
    }

    return (
        <Button as={"a"} href={props.url} target={"_blank"} rel="noreferrer">
            {props.class == null ? <img src={require(`${props.img}`)} alt={props.alt}/> : <img className={props.class} alt={props.alt}/>}
            <div className={"content"}>
                <div className={"title"}>{props.title}</div>
                <div className={"subtitle"}>{props.subtitle}</div>
                <div className={"description"}>{props.description}</div>
            </div>
        </Button>
    );
}

export default ProjTile