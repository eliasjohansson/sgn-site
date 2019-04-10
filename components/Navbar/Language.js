import styled from 'styled-components';

const DesktopLang = styled.div`
  border-top: none;
  padding: 0 2rem;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.colorDarkGrey};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default DesktopLang;
