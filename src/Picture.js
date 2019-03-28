import * as React from 'react'


const Picture = ({ eStyle, iStyle, sizeX, sizeY, start, zoom, src }) => {
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

    const iSizeW = `${sizeX}%`
    const iSizeH = `${sizeY}%`
    const invX = zoom * (100 * (100/sizeX))
    const invY = zoom * (100 * (100/sizeY))
    const sharedZoomStyle = {
        ...iStyle,
        position: 'absolute',
        top: `${start[0] - sizeX/2.5}%`,
        left: `${start[1] - sizeY/2.5}%`,
        width: iSizeW,
        height: iSizeH,
    }
    const zoomStyle = {
        ...sharedZoomStyle,
        backgroundImage: bImg,
        backgroundPositionX: `${start[0]}%`,
        backgroundPositionY: `${start[1]}%`,
        backgroundSize: `${invX}% ${invY}%`,
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