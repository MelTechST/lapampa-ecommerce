import React from "react";
import { Button, Container, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

//abajo de todo está el return 

export default function Main(){
    //IMAGENES URL
    const bgUrlSection =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDjnRekyXrw4ySb7HIXf4cWXEs1YityVyR8bzcymr2qFnCyXJryPdMjALETdjvh54cst4uqf4X_BK7DPPSMEp9_oaL-wv8Hb8y_2a5NavnkG2pVO7V2JCFlOBUKMmDD3UUxZ23HCCh2zXhR42-FNhq9bW7O2VF9XXedkGAUsXgTGAV9bn9LcDUQTiEucyJStFekNWKH0QhkVnSEolaRKbaFKmjC5B8fQxsWWfIyKvCUmVG_nHYOcnGYkqUEJ4XFWNhkZXW9hTRTRGC3";

    const imgUrlCollection_1 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6CEG7Uy2BKInz9z-eH8saieauglsKjBlCsz9MaXAs68euu188bGBIySolLALTeHWzyQ793Z4MBtJSFS5Iv6NQS-pTeWMtPkFlEKcY0uOx56Imljr3C5JrPyXrUT4yoKDdTc1nI55RfswqCzPHFVymQCmgj5L5bVWRYW92sInv1a5FPICexZvUf-4hVg9UEJlmfG5F43PoUrpAv6frGgnWTji-LfL1-iVeKjKUIDyDgEWjsKvopwHqrRBxYB-CuzfUZZwkyY-Y_lpf";
    
    const imgUrlCollection_2 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBLNb6ajMfUvtfWutKEGNjyZe4nWXBUHhwz5Bmtjbmmr_42-FuVBh9FEkSGwtAxpBvWBsWo2ftc1LWFpCY0onXnAh-5vuZx84iPgTjuz9gNn8_PjeiP_214MQgZl5lJZJX1Kj_A8iaIZs9Z0Zw_1Q6nVKljZLTNTzQz_xuowjvs1Gj7FYwNWJ1tVGfGhLT3f_2FTjNq3-7uTx7qiXMqoO92IfYAE23bpVkIhtuqynN4ZPEn4wZTggNrFMZVqIpGpdbkSsHhKtkUJq3-";

    const imgUrlCollection_3 =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBrHDo8RPXBTmMM49vt0FLbJN99hi4xGVGYUuZMwJEfEsIGDnqKqpGoqUcIEJJaIOCAuo295zf76fDGCvf_DK5FOwcgZx78fRtjbr31T9r9uN8DA_rYUDlgWbozGF3zpRGkesXJQyt7z4sSDIz8gVHKKosAZTvhZQz0MJmxsRmoltxQJdJ5KysVtYKKp1RHdDbU868mvYTD8-4WSm5XO1eaPMCrp2xp6kdOzbB8PcI6WzjHs0RW132xdafpydG2ccqmg48uEc8cficS";

    const imgUrlPromo_1=
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxCk2OqtnFZ6cAwOatMQHDN1Z2teoRUnGNBlorx2tw7qb5tPpi19OhkxaWuZEitJFziO86HFBKYGLsfeMCk36-0fGgGqybSwXd07yHIucH1B2mIW4ThoRaPvI_fbXnqGfAbCs7lRexCpxL9t38HCb-2DNTMpJ_Gej8LG7okWsEL7C_Hc2c0rIJdTP9714cgAk1XpL_4X6RYu7_Pf99cQ_rLvZ6ihqu3kdJDT0WTGl6cE_PkSRO63t7eMl41oDUFsmI1Jn5PpcyGoTx";

    const imgUrlPromo_2=
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBXgIxUzH5fKRKripnbYtMTnCqiCvyz22GVOz1U2-PlKYNaeFUFLdZ7eC_TdJ0pPwLjNgS1uc_DuRTXhf8uYZbxN9j3zWNexaaxM_KQ4Xynu6X7BcXDProVyYKt50Y0qp49Wip3Tgoyo4U6W4AHUTeoX-0yjJMO1tketU8LxjIaOKINuDIBjmmikNPRtWZbC3Gbx50cr4yNtMZw3nKAfh3Smsg3JCncWy_We4m6rYPl6C-Sx5O-RXEjvDwycgpuuD6xRVYe5SANA8Kj";


    //LOS STYLES DE LAS IMAGENES
    const styleSection = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url('${bgUrlSection}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "480px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        textAlign: "center",
        padding: "2rem",
        // borderRadius: "1rem",
    };

    const styleCollection1 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url('${imgUrlCollection_1}')`,
        height: "160px",
        width:"300px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
    };

    const styleCollection2 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url('${imgUrlCollection_2}')`,
        height: "160px",
        width:"300px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
    };

    const styleCollection3 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url('${imgUrlCollection_3}')`,
        height: "160px",
        width:"300px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
    };

    const stylePromo1 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url('${imgUrlPromo_1}')`,
        height: "300px",
        width: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
    };

    const stylePromo2 = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url('${imgUrlPromo_2}')`,
        height: "300px",
        width: "500px",
        // maxHeight: "300px",
        // maxWidth: "530px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
    };

    return(
        <div>
            <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white border-radius-5"
            style={styleSection} >
                <section className="text-center py-5 position-relative ">
                <Container className="py-5">
                    <h1 className="display-4 fw-bold mb-3">Descubre la Esencia de La Pampa</h1>
                    <p className="lead meb-4">
                        Explora nuestra cuidada selección de vinos finos, elaborados con pasión y tradición.
                    </p>
                    <Button as={Link} to="/products" variant="danger" className="text-light">Ver vinos</Button>
                </Container>
                </section>
            </div>

            <Container>
                <h3><strong>Colecciones destacadas</strong></h3>
                <div className="d-flex justify-content-between flex-wrap"> 
                    <Card className="border-0">
                        <Card.Img variant="top" style={styleCollection1}/>
                        <Card.Body>
                            <Card.Title>
                                <h4><strong>Colección reserva</strong></h4>
                            </Card.Title>
                            <Card.Text>
                                Nuestros mejores vinos, añejados a la perfección.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="border-0">
                        <Card.Img variant="top" style={styleCollection2}/>
                        <Card.Body>
                            <Card.Title>
                                <h4><strong>Edición limitada</strong></h4>
                            </Card.Title>
                            <Card.Text>
                                Lanzaminetos raros y exclusivos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="border-0">
                        <Card.Img variant="top" style={styleCollection3}/>
                        <Card.Body>
                            <Card.Title>
                                <h4><strong>Especiales de Verano</strong></h4>
                            </Card.Title>
                            <Card.Text>
                                Vinos refrescantes para días cálidos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

            <Container>
                <h3><strong>Promociones</strong></h3>
                <div className="d-flex justify-content-between flex-wrap">
                    <Card className="border-0">
                        <Card.Img  variant="top" style={stylePromo1}/>
                        <Card.Body className="px-0">
                            <Card.Title >
                                <h4><strong>Envíos gratis en pedidos superiores a $150</strong></h4>
                                <Card.Text className="fs-5 fw-light">
                                    Disfruta de envíos gratuitos en pedidos que califiquen.
                                </Card.Text>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="border-0">
                        <Card.Img  variant="top" style={stylePromo2}/>
                        <Card.Body className="px-0">
                            <Card.Title >
                                <h4><strong>Eventos de Cata Exclusivos</strong></h4>
                                <Card.Text className="fs-5 fw-light text-start">
                                    Únete a nosotros para vivr experiencias únicas.
                                </Card.Text>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}