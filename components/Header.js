import Link from 'next/link'
import React from 'react'
import Button from '@material-ui/core/Button'
const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div align="center">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
    </div>
)

export default Header
