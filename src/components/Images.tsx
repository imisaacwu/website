import './Images.css'

export const Images = ({images = [], links = []}: {images: string[], links?: string[]}) => {
    return (
        <div id='carousel'>
            {images.map((img, i) => (links[i] ?
                <a href={links[i]} target='_blank' rel='noreferrer'>
                    <img key={img} src={img} />
                </a>
            : <img key={img} src={img} />))}
        </div>
    )
}