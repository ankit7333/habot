import LinkButton from './LinkButton';

function Logo({header, footer}) {
    return (
        <LinkButton to="/">
           {header && <img src="/images/logo.svg" alt="logo" /> }
           {footer && <img src="/images/footerlogo.svg" alt="logo" /> }
        </LinkButton>
    )
}

export default Logo
