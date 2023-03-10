import React from "react";

interface Props {
  foo: string;
}

const Super: React.FC<Props> = ({ foo }) => <div>Foo's value is: {foo}</div>;

export default Super;