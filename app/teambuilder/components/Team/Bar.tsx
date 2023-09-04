import styled from "styled-components";

interface BarProps {
    multiplier: number;
  }
  
  const Bar = styled.div<BarProps>`
    height: 20px;
    max-width: 300px;
    border-radius: 5px;
    width: ${props => Math.min(300, 100 / (props.multiplier * 2))}%;
    background-color: ${props => `rgba(${255 * props.multiplier / 8}, ${255 * (8 - props.multiplier) / 8}, 0)`};
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  `;

export default Bar;