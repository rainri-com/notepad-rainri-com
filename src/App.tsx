import styled from 'styled-components'
import { CodeEditor } from 'src/components/organisms/CodeEditor'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3c3c3c;
`

const App = () => (
  <Container>
    <CodeEditor />
  </Container>
)

export default App
