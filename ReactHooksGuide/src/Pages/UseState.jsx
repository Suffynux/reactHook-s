import CodeBlock from "../Components/CodeBlock";
import { useState } from "react";
import Container from "../Components/Container";
import Button from "../Components/Button";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  const code = `
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  `;

  return (
  
         <Container>
              <div>
        
    <Button >Hello wolrd</Button>

    
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      <CodeBlock code={code} />
    </div>

    </Container>
  );
}
