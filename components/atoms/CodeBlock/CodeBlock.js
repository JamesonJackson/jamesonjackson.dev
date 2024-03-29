import Highlight, {defaultProps} from 'prism-react-renderer'
import styles from './CodeBlock.module.scss'

export function CodeBlock ({children}) {
  return (
    <Highlight {...defaultProps} code={children} language="javascript">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={styles.pre} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}