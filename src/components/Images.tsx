import './Images.css'

export const Images = ({images = []}: {images: string[]}) => {
    return (
        <div id='carousel'>
            {images.map((url) => <img key={url} src={url} />)}
        </div>
    )
}