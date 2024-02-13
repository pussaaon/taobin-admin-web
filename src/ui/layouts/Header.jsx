import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);
    background-color: var(--color-primary-100);
`;

function Header() {
    return <StyledHeader>Header</StyledHeader>;
}

export default Header;
