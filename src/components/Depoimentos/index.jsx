import { Section, Container, Content } from "./styles"
import {useState} from 'react';

export function Depoimentos() {

    const [selected, setSelected] = useState('t-3');

    const handleChange = event => {
        setSelected(event.target.value);
    }

    return (
        <Section id="depoi">
            <Container>
                <Content>
                    <div>
                        <span id="title-section">Depoimentos</span>
                        <h5 id="subtitle">Feedback dos nossos clientes</h5>
                    </div>
                    <div className="testimonial-wrapper">
                        <input type="radio" name="testimonial" id="t-1" value="t-1" checked={selected === 't-1'} onChange={handleChange} />
                        <input type="radio" name="testimonial" id="t-2" value="t-2" checked={selected === 't-2'} onChange={handleChange}/>
                        <input type="radio" name="testimonial" id="t-3" value="t-3" checked={selected === 't-3'} onChange={handleChange}/>
                        <input type="radio" name="testimonial" id="t-4" value="t-4" checked={selected === 't-4'} onChange={handleChange}/>
                        <input type="radio" name="testimonial" id="t-5" value="t-5" checked={selected === 't-5'} onChange={handleChange}/>
                        <div className="testimonials">
                            <label className="item" for="t-1">
                                <div className="testimonial-textbox">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus,
                                        vel itaque debitis vitae sequi laboriosam culpa sapiente, nulla eos ipsum.
                                        Recusandae sed cum neque possimus reiciendis officia in ullam. 1
                                    </p>
                                </div>
                                <div className="testimonial-author">
                                    <h5>
                                        Fulano
                                    </h5>
                                    <span>
                                        Rio de Janeiro - RJ
                                    </span>
                                </div>
                            </label>
                            <label className="item" for="t-2">
                                <div className="testimonial-textbox">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus,
                                        vel itaque debitis vitae sequi laboriosam culpa sapiente, nulla eos ipsum.
                                        Recusandae sed cum neque possimus reiciendis officia in ullam. 2
                                    </p>
                                </div>
                                <div className="testimonial-author">
                                    <h5>
                                        Fulano
                                    </h5>
                                    <span>
                                        Rio de Janeiro - RJ
                                    </span>
                                </div>
                            </label>
                            <label className="item" for="t-3">
                                <div className="testimonial-textbox">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus,
                                        vel itaque debitis vitae sequi laboriosam culpa sapiente, nulla eos ipsum.
                                        Recusandae sed cum neque possimus reiciendis officia in ullam. 3
                                    </p>
                                </div>
                                <div className="testimonial-author">
                                    <h5>
                                        Fulano
                                    </h5>
                                    <span>
                                        Rio de Janeiro - RJ
                                    </span>
                                </div>
                            </label>
                            <label className="item" for="t-4">
                                <div className="testimonial-textbox">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus,
                                        vel itaque debitis vitae sequi laboriosam culpa sapiente, nulla eos ipsum.
                                        Recusandae sed cum neque possimus reiciendis officia in ullam. 4
                                    </p>
                                </div>
                                <div className="testimonial-author">
                                    <h5>
                                        Fulano
                                    </h5>
                                    <span>
                                        Rio de Janeiro - RJ
                                    </span>
                                </div>
                            </label>
                            <label className="item" for="t-5">
                                <div className="testimonial-textbox">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate possimus,
                                        vel itaque debitis vitae sequi laboriosam culpa sapiente, nulla eos ipsum.
                                        Recusandae sed cum neque possimus reiciendis officia in ullam. 5
                                    </p>
                                </div>
                                <div className="testimonial-author">
                                    <h5>
                                        Fulano
                                    </h5>
                                    <span>
                                        Rio de Janeiro - RJ
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div className="dots">
                            <label for="t-1"></label>
                            <label for="t-2"></label>
                            <label for="t-3"></label>
                            <label for="t-4"></label>
                            <label for="t-5"></label>
                        </div>
                    </div>
                </Content>
            </Container>
        </Section>
    )
}