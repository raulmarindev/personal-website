import React from "react"
import PropTypes from "prop-types"

const Footer = ({ linkUrl, linkText }) => (
    <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href={linkUrl}>{linkText}</a>
    </footer>)


Footer.propTypes = {
    linkUrl: PropTypes.string,
    linkText: PropTypes.string,
}

Footer.defaultProps = {
    linkUrl: ``,
    linkText: ``,
}

export default Footer  