import React from "react"

export default function Texts(props) {
    return (
        <div>
            {props.page > 1 ?
                props.page > 2 ?
                    <article style={{
                        textDecoration: "underline",
                        textDecorationColor: "red"
                    }}>
                        <img src={props.images[
                            Math.floor(Math.random() * props.images.length)
                        ].download_url}
                            height={
                                Math.floor(Math.random() * 200 + 100) + "px"
                            }
                            align="left" />
                        <p align="right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer bibendum, sem sit amet volutpat placerat,
                            sapien augue ornare elit, et varius tortor ipsum sed erat.
                            Nullam molestie aliquet odio ac mattis. Vestibulum tempus,
                            nulla vitae congue bibendum, dui est mattis dolor, ut aliquam
                            ligula arcu sed ex. Nullam gravida felis dignissim pharetra
                            ullamcorper. Vestibulum condimentum felis a placerat feugiat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            sodales fringilla mauris in lobortis. Maecenas et condimentum
                            urna, a dapibus eros. Nulla finibus nulla vel pellentesque
                            feugiat. Vestibulum vestibulum tellus at purus auctor
                            tristique. Mauris eget ligula congue dolor dictum efficitur
                            ut ut nulla. Suspendisse fringilla congue ante, id accumsan
                            ante efficitur et. Maecenas rhoncus et ipsum et porttitor. Cras
                            sollicitudin rutrum convallis. Integer congue leo tincidunt mi
                            dignissim, eu accumsan sem vehicula. Vestibulum ex ante,
                            porttitor et posuere vitae, feugiat sed dolor.
                        </p>
                        <br />
                        <img src={props.images[
                            Math.floor(Math.random() * props.images.length)
                        ].download_url} height={
                            Math.floor(Math.random() * 200 + 100) + "px"
                        } align="right" />
                        <p align="left">
                            Cras at vehicula justo. In lobortis mi sit amet rutrum aliquam.
                            Quisque scelerisque varius urna, in mollis turpis congue quis.
                            Curabitur laoreet lorem id fermentum vehicula. Proin aliquam enim
                            vel nulla ullamcorper, in sodales velit cursus. Vivamus lacinia
                            finibus urna eget varius. Sed gravida ipsum imperdiet est sodales
                            ullamcorper. Etiam varius diam a quam sagittis, ut tempor arcu
                            venenatis. Etiam suscipit et nulla id rhoncus. Nulla augue erat,
                            iaculis non nunc pulvinar, luctus pharetra eros. Morbi arcu justo,
                            sollicitudin ac dictum eget, gravida ac odio. Donec sit amet odio
                            nec velit auctor elementum. Fusce id mauris a dui maximus blandit
                            eu nec turpis. Pellentesque suscipit nibh nibh, non rhoncus nibh
                            iaculis eu. Sed consequat lectus sit amet pulvinar laoreet.
                        </p>
                        <br />
                        <img src={props.images[
                            Math.floor(Math.random() * props.images.length)
                        ].download_url}
                            height={
                                Math.floor(Math.random() * 200 + 100) + "px"
                            }
                            align="left" />
                        <p align="right">
                            Aenean malesuada turpis vel est finibus, feugiat malesuada metus
                            rutrum. Fusce id quam blandit felis euismod porta. Nulla posuere
                            nisi sit amet nisl ultrices faucibus. Nulla eget tellus vehicula,
                            ultricies ligula sed, porttitor risus. Vestibulum condimentum ante
                            eu massa convallis finibus. Sed convallis in lacus et sollicitudin.
                            In condimentum vehicula diam vel rutrum. In ac posuere lorem.
                            Praesent sollicitudin elit arcu. Nam volutpat purus nec lectus
                            euismod pellentesque non at quam. Cras eleifend ut quam ut viverra.
                            Donec luctus, neque in lobortis imperdiet, eros augue tempus ex,
                            non laoreet ante lectus non orci. Aliquam mattis egestas maximus.
                            Phasellus a risus eget tortor maximus egestas. Proin ac accumsan
                            justo, in feugiat leo. Ut et rutrum mi.
                        </p>
                        <br />
                        <img src={props.images[
                            Math.floor(Math.random() * props.images.length)
                        ].download_url}
                            height={
                                Math.floor(Math.random() * 200 + 100) + "px"
                            }
                            align="right" />
                        <p align="left">
                            Aliquam nisl enim, tincidunt sed lorem ut, eleifend pretium lorem.
                            Fusce tempus neque vel tincidunt vestibulum. Integer mattis nisl
                            ut arcu pharetra, ac tincidunt est porttitor. Phasellus consectetur
                            quam at velit rhoncus, at congue lorem consectetur. Vestibulum ante
                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            curae; Phasellus sed faucibus massa. Phasellus volutpat ligula sit
                            amet sem eleifend, at auctor ipsum luctus. Integer non sodales enim.
                            Phasellus dictum purus sed mi lobortis iaculis sed non nibh. Phasellus
                            vel ex sed nulla blandit laoreet at non neque. Cras iaculis tristique
                            eros accumsan vestibulum. Sed tempor scelerisque pellentesque.
                            Phasellus hendrerit ullamcorper eros id mollis.
                        </p>
                        <br />
                        <img src={props.images[
                            Math.floor(Math.random() * props.images.length)
                        ].download_url}
                            height={
                                Math.floor(Math.random() * 200 + 100) + "px"
                            }
                            align="left" />
                        <p align="right">
                            Nulla ipsum dolor, dictum et venenatis dictum, lobortis at sem.
                            Vestibulum eu odio sollicitudin ipsum egestas consequat. Morbi
                            pharetra eros vitae odio vulputate, sed convallis diam iaculis.
                            Suspendisse potenti. Nulla blandit ultrices tortor a sagittis.
                            Proin id tellus in mauris interdum rutrum. Sed eu velit elementum,
                            porta lorem blandit, efficitur augue. Quisque suscipit, lectus vitae
                            euismod hendrerit, quam nibh consectetur augue, ac vulputate dui
                            libero eget turpis. Sed sed tortor nec augue ultrices suscipit sit
                            amet ac odio. Proin mi urna, vestibulum quis egestas nec, tempus
                            quis mauris. Fusce pulvinar sapien a ipsum vulputate tincidunt. Nulla
                            vitae malesuada magna, eget feugiat justo. Mauris convallis finibus
                            ultrices. Vivamus ut placerat ex.
                        </p>
                    </article>
                    :
                    <article align="center">
                        <div align="center">
                            <img src={
                                props.images[
                                    Math.floor(Math.random() * props.images.length)
                                ].download_url
                            }
                                height="200px"
                                align="center"
                            />
                        </div>
                        <p align="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer bibendum, sem sit amet volutpat placerat,
                            sapien augue ornare elit, et varius tortor ipsum sed erat.
                            Nullam molestie aliquet odio ac mattis. Vestibulum tempus,
                            nulla vitae congue bibendum, dui est mattis dolor, ut aliquam
                            ligula arcu sed ex. Nullam gravida felis dignissim pharetra
                            ullamcorper. Vestibulum condimentum felis a placerat feugiat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            sodales fringilla mauris in lobortis. Maecenas et condimentum
                            urna, a dapibus eros. Nulla finibus nulla vel pellentesque
                            feugiat. Vestibulum vestibulum tellus at purus auctor
                            tristique. Mauris eget ligula congue dolor dictum efficitur
                            ut ut nulla. Suspendisse fringilla congue ante, id accumsan
                            ante efficitur et. Maecenas rhoncus et ipsum et porttitor. Cras
                            sollicitudin rutrum convallis. Integer congue leo tincidunt mi
                            dignissim, eu accumsan sem vehicula. Vestibulum ex ante,
                            porttitor et posuere vitae, feugiat sed dolor.
                        </p>
                    </article>
                :
                <article>
                    <img src={props.images[
                        Math.floor(Math.random() * props.images.length)
                    ].download_url} height="100px" align="left" />
                    <img src={props.images[
                        Math.floor(Math.random() * props.images.length)
                    ].download_url} height="100px" align="right" />
                    <p align="left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer bibendum, sem sit amet volutpat placerat,
                        sapien augue ornare elit, et varius tortor ipsum sed erat.
                        Nullam molestie aliquet odio ac mattis. Vestibulum tempus,
                        nulla vitae congue bibendum, dui est mattis dolor, ut aliquam
                        ligula arcu sed ex. Nullam gravida felis dignissim pharetra
                        ullamcorper. Vestibulum condimentum felis a placerat feugiat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sodales fringilla mauris in lobortis. Maecenas et condimentum
                        urna, a dapibus eros. Nulla finibus nulla vel pellentesque
                        feugiat. Vestibulum vestibulum tellus at purus auctor
                        tristique. Mauris eget ligula congue dolor dictum efficitur
                        ut ut nulla. Suspendisse fringilla congue ante, id accumsan
                        ante efficitur et. Maecenas rhoncus et ipsum et porttitor. Cras
                        sollicitudin rutrum convallis. Integer congue leo tincidunt mi
                        dignissim, eu accumsan sem vehicula. Vestibulum ex ante,
                        porttitor et posuere vitae, feugiat sed dolor.
                    </p>
                </article>
            }
        </div>
    )
}