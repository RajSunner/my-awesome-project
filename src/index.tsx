import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  foo: string;
}
const Super: React.FC<Props> = ({ foo, ...rest }) => <div {...rest} >Foo's value is: {foo}</div>;

export default Super;