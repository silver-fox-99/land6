import './footer.scss'
export default function Footer() {
    return <div className="footer">
        @ {process.env.REACT_APP_YEAR_AND_BRAND}, Inc. All rights reserved
    </div>
}