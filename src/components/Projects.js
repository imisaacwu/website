import React from 'react';
import ProjTile from "./ProjTile";
import "../css/styles.css";
import "./docs/images/icon.png";
import "./docs/images/Cat.gif";
import "./docs/images/ghibli.png";
import "./docs/images/quaggy.png";

function Projects(props) {
    return (
        <>
            <div id={"projects"} className={"container"}>
                <div className={"col"}>
                    <ProjTile
                        title="Title"
                        subtitle="Subtitle"
                        description="blah"
                        img="./docs/images/icon.png"
                    />
                    <ProjTile
                        img="./docs/images/ghibli.png"
                    />
                    <ProjTile img="./docs/images/quaggy.png" />
                    {/* <ProjTile
                        title={"SafeScroll"}
                        subtitle={"Dubhacks 2023"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/623/924/datas/original.png"}
                        url={"https://devpost.com/software/safescroll"}
                    /> */}
                    {/* <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"https://www.google.com"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"https://www.google.com"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"https://www.google.com"}
                    /> */}
                </div>
                <div className="col">
                    <ProjTile
                        title="Title"
                        subtitle="sub"
                        img="./docs/images/Cat.gif"
                    />
                </div>
                {/* <div className={"col"}>
                    <ProjTile
                        title={"Title 2"}
                        subtitle={"Subsubtitle"}
                        description={"ahdskhgljkahgdkjlhgjkahfjkhalkg hahkldhgjklahjklghadjklsfhjkalghe uwiahlgkjdshguirehaljkdhsj kghjkaelhsiuodlghejlakhsjdfuiel ahgjkdahsdfuilehuailgrhjks ldhfjkaghjkrelahjfksdalf"}
                        img={"https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"./docs/images/icon.png"}
                        url={"www.google.com"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"https://www.google.com"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"https://www.google.com"}
                    />
                </div> */}
            </div>
        </>
    );
}

export default Projects;