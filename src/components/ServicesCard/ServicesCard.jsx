import "./styles.scss"

function ServicesCard({ iconClass, title, content }) {
  return (
    <div className="services__card">
      <div className="services__icon">
        <i className={iconClass}></i>
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default ServicesCard;
