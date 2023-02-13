/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    radius: 4,
    height: 8,
    padding: 0,
  },
  medium: {
    radius: 4,
    height: 12,
    padding: 0,
  },
  large: {
    radius: 8,
    height: 24,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size: ${size}`);
  }
  return (
    <>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          "--radius": styles.radius + "px",
          "--padding": styles.padding + "px",
        }}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <BarWrapper>
          <Bar
            style={{
              "--width": value + "%",
              "--height": styles.height + "px",
            }}
          />
        </BarWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners of the bar on both sides */
  overflow: clip;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
