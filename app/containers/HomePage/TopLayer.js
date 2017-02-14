import styled from 'styled-components';


const TopLayer = styled.div`

  mask-image: url(${(props) => props.mask});
  -webkit-mask-image: url(${(props) => props.mask});
  -o-mask-image: url(${(props) => props.mask});
  -moz-mask-image: url(${(props) => props.mask});
  -ms-mask-image: url(${(props) => props.mask});

  mask-size: cover;
  -webkit-mask-size: cover;
  -o-mask-size: cover;
  -moz-mask-size: cover;
  -ms-mask-size: cover;

  mask-position: 0px ${(props) => props.maskPosition};
  -webkit-mask-position: 0px ${(props) => props.maskPosition};
  -o-mask-position: 0px ${(props) => props.maskPosition};
  -moz-mask-position: 0px ${(props) => props.maskPosition};
  -ms-mask-position: 0px ${(props) => props.maskPosition};

  background-color: #fffbf9;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  position: fixed;
  transition: 2s;
  opacity: ${(props) => props.opacity};
`;

export default TopLayer;
