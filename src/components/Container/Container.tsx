import tw, { styled, css, theme } from 'twin.macro';

export interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  ${tw`max-w-screen-xl px-8 mx-auto `}
`;

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return <StyledContainer>{children}</StyledContainer>;
};
