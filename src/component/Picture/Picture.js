import React from 'react';
import styles from './Picture.module.css';
import Carousel from 'react-bootstrap/Carousel'

const Picture = (props) => {
    return (
        <div>
        <Carousel className={styles.slider}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1587514313/j5ii7bvsesi2e9syngh9.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3> Featured</h3>
                    <h4>Help Kids Affected by COVID-19</h4>
                    <p>Save the Children is to raising funds to get food and educational materials to families</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1587520643/hrhv8xo76t0pj7t8snci.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Gogopicks</h3>
                    <p> AusAir is an Australian designed, botanically infused, highly breathable, and reusable mask </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1586895388/doajdajcqpwfaklzpbtw.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Featured</h3>
                    <p>The Babymaker gives you a classic look with modern Ebike tech</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1585108104/hjukgp0zhekbkzg5jaed.png"
                    alt="Firste slide"
                />
                <Carousel.Caption>
                    <h3> Next Gen Filtration Mask With Botanicals </h3>
                    <p>The C3 Test That Can Detect COVID-19 Even In Patients Without Symptoms</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Picture;