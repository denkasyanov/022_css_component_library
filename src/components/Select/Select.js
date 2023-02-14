import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        <OriginalSelect value={value} onChange={onChange}>
          {children}
        </OriginalSelect>
        <PresentationalSelect style={{ "--size": "24px" }}>
          {displayedValue}
          <IconWrapper>
            <Icon id="chevron-down" strokeWidth={2} size={24} />
          </IconWrapper>
        </PresentationalSelect>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const OriginalSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  font-size: ${16 / 16}rem;

  ${OriginalSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${OriginalSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: ${16 - 6}px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  pointer-events: none;
  width: var(--size);
  height: var(--size);
`;

export default Select;
