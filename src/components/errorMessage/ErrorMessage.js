const ErrorMessage = () => {
    return (
        <div>
            <svg
                xmlSpace="preserve"
                viewBox="0 0 100 100"
                y={0}
                x={0}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.1"
                style={{ display: 'block', margin: '0 auto', background: "rgb(255, 255, 255)", objectFit: 'contain' }}
                width="150px"
                height="150px"
            >
                <g
                    className="ldl-scale"
                    style={{
                        transformOrigin: "50% 50%",
                        transform: "rotate(0deg) scale(0.7, 0.7)"
                    }}
                >
                    <g className="ldl-ani">
                        <linearGradient
                            y2="85.807"
                            x2="51.618"
                            y1="37.807"
                            x1="36.618"
                            gradientUnits="userSpaceOnUse"
                            id="SVGID_1_"
                        >
                            <stop
                                stopColor="#e15c64"
                                offset={0}
                                style={{ stopColor: "rgb(231, 0, 14)" }}
                            />
                            <stop
                                stopColor="#b0484f"
                                offset={1}
                                style={{ stopColor: "rgb(176, 72, 79)" }}
                            />
                        </linearGradient>
                        <g className="ldl-layer">
                            <g
                                className="ldl-ani"
                                style={{
                                    transformOrigin: "50px 50px",
                                    transform: "scale(1)",
                                    animation:
                                        "1.63934s linear -0.907104s infinite alternate-reverse forwards running beat-0d47a510-7be0-4e11-b1fc-461a839e668a"
                                }}
                            >
                                <path
                                    strokeMiterlimit={10}
                                    strokeWidth="3.5"
                                    stroke="#323232"
                                    fill="url(#SVGID_1_)"
                                    d="M44.859 16.397L9.485 77.667c-2.285 3.957.571 8.904 5.141 8.904h70.748c4.57 0 7.425-4.947 5.141-8.904l-35.374-61.27c-2.285-3.957-7.997-3.957-10.282 0z"
                                    style={{ stroke: "rgb(50, 50, 50)" }}
                                />
                            </g>
                        </g>
                        <g className="ldl-layer">
                            <g className="ldl-ani" style={{ transformOrigin: "50px 50px" }}>
                                <g>
                                    <g className="ldl-layer">
                                        <g
                                            className="ldl-ani"
                                            style={{
                                                transformOrigin: "50px 50px",
                                                transform: "scale(1)",
                                                animation:
                                                    "1.63934s linear -1.63934s infinite alternate-reverse forwards running beat-0d47a510-7be0-4e11-b1fc-461a839e668a"
                                            }}
                                        >
                                            <path
                                                fill="#fff"
                                                d="M53.4 68.511l.6 3.906a4.048 4.048 0 0 1-8 1.23 4.183 4.183 0 0 1 0-1.229l.6-3.906a3.44 3.44 0 0 1 6.8-.001z"
                                                style={{ fill: "rgb(255, 255, 255)" }}
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g className="ldl-layer">
                            <g className="ldl-ani" style={{ transformOrigin: "50px 50px" }}>
                                <g>
                                    <g className="ldl-layer">
                                        <g
                                            className="ldl-ani"
                                            style={{
                                                transformOrigin: "50px 50px",
                                                transform: "scale(1)",
                                                animation:
                                                    "1.63934s linear -1.27322s infinite alternate-reverse forwards running beat-0d47a510-7be0-4e11-b1fc-461a839e668a"
                                            }}
                                        >
                                            <path
                                                fill="#fff"
                                                d="M54 40.417l-1.2 17.28a2.807 2.807 0 0 1-5.6 0L46 40.417a4.01 4.01 0 1 1 8 0z"
                                                style={{ fill: "rgb(255, 255, 255)" }}
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <h3 style={{ display: 'block', margin: '0 auto', width: '200px', height: '50px', textAlign: 'center' }}>Error!</h3>
        </div>
    )
}

export default ErrorMessage;


// const ErrorMessage = () => {
//     return (
//         <img src={process.env.PUBLIC_URL + '/error.gif'}></img>
//     )
// }