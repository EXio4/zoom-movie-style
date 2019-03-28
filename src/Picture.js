import * as React from 'react'


const Picture = ({ eStyle, iStyle, size, start, zoom, src }) => {
    const bImg = `url("${src}")`
    const externalStyle = {
        ...eStyle,
        position: 'relative',
    }
    const backgroundStyle = {
        position: 'absolute',
        backgroundImage: bImg,
        backgroundSize: '100% 100%',
        height: '100%',
        width: '100%',
        filter: 'blur(3px) saturate(0.35)',
    }

    const iSizeW = `${size}%`
    const iSizeH = iSizeW
    const inv = zoom * (100 * (100/size))
    const sharedZoomStyle = {
        ...iStyle,
        position: 'absolute',
        top: `${start[0]-size/2}%`,
        left: `${start[1]-size/2}%`,
        width: iSizeW,
        height: iSizeH,
    }
    const zoomStyle = {
        ...sharedZoomStyle,
        backgroundImage: bImg,
        backgroundPositionX: `${start[0]}%`,
        backgroundPositionY: `${start[1]}%`,
        backgroundSize: `${inv}% ${inv}%`,
    }
    const zoomTintStyle = {
        ...sharedZoomStyle,
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        border: '1px solid white'
    }
    return (
        <div style={externalStyle}>
            <div style={backgroundStyle} />
            <div style={zoomStyle}>
            </div>
            <div style={zoomTintStyle}>
            </div>
        </div>
    )
}

export default Picture