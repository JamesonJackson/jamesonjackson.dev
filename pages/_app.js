import '../styles/globals.scss'
import {MDXProvider} from '@mdx-js/react'
import { CodeBlock } from '../components/atoms/CodeBlock/CodeBlock'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

function MyApp({ Component, pageProps }) { 
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
