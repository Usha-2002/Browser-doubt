import './index.css'

const EachHistory = props => {
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="">
      <p className="">{timeAccessed}</p>
      <img src={logoUrl} />
      <p className="">{title}</p>
      <p className="">{domainUrl}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        onClick={onDelete}
      />
    </li>
  )
}
export default EachHistory
