import React from 'react';

function ProjTile({
        title = "Title",
        subtitle = "Subtitle",
        description = "Description",
        img = "./docs/images/website.png",
        img_class = "none",
        alt = "alt",
        url = "https://imisaacwu.github.io/website",
        popup_icon = "Github",
        popup_text = "Source code",
        tags = []
        }) {
    const Button = ({onClick, children, as: Component='button', ...rest}) => {
        return (
            <Component className={"tile"} {...rest}>
                {children}
            </Component>
        )
    }

    return (
        <div className="tile-wrap">
            <a className="popup" href={url} target="_blank" rel="noreferrer">
                <img className={`popup-icon ${popup_icon}`} alt={`${popup_icon} icon`} />
                {popup_text}
                <i className="bi bi-box-arrow-up-right" />
            </a>
            <Button as={"a"} href={url} target={"_blank"} rel="noreferrer">
                {img_class === "none" ?
                    <img className="proj-img" src={require(`${img}`)} alt={alt}/> :
                    <img className={`proj-img ${img_class}`} alt={alt}/>}
                <div className={"content"}>
                    <div className={"title"}>{title}</div>
                    <div className={"subtitle"}>{subtitle}</div>
                    <div className={"description"}>{description}</div>
                    <div className={"tags"}>
                        {tags != null ? tags.map(t =>
                            <div key={t} className={`tag ${t}`}>
                                <img className={`tag-icon ${t}`} alt={`icon of ${t}`}/>
                                {t}
                            </div>) : <></>}
                    </div>
                </div>
            </Button>
        </div>
    );
}

export default ProjTile