import React, { Component } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Sfooter, Ssocial, Sdiv, Sdata, Syear } from '../../style/styledComponents';

class Footer extends Component {
  render() {
    return (
      <Sfooter>
        <Sdata>
          <p>Fernando Mós</p>
          <p>Projeto desenvolvido com React Redux</p>
        </Sdata>
        <Syear>2022</Syear>
        <Ssocial>
          <h3>Redes socias</h3>
          <Sdiv>
            <a
              href="https://github.com/FernandoMos92"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icon-social-midia " />
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-mos/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="icon-social-midia" />
            </a>
          </Sdiv>
        </Ssocial>
      </Sfooter>
    );
  }
}

export default Footer;
