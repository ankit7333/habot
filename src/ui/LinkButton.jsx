import { Link } from "react-router-dom"

const className = 'text-sm  relative hover:opacity-60 transition-all inline-block'

const styles = {
    transparent : 'bg-transparent no-underline',
}

function LinkButton({children, to, type}) {
    return(
        <>
            {type ? <Link to={to} className={styles[type]}>{children}</Link> : <Link to={to} className={className}>{children}</Link>
     
    }</>)
}

export default LinkButton
