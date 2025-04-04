import ServicesCard from "../ServicesCard/ServicesCard";
import "./styles.scss";
function Services() {
  const serviceDatas = [
    {
      iconClass: "bi bi-activity",
      title: "Nesciunt Mete",
      content:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      iconClass: "bi bi-broadcast",
      title: "Eosle Commodi",
      content:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      iconClass: "bi bi-easel",
      title: "Ledo Markt",
      content:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      iconClass: "bi bi-bounding-box-circles",
      title: "Asperiores Commodit",
      content:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      iconClass: "bi bi-calendar4-week",
      title: "Velit Doloremque",
      content:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      iconClass: "bi bi-chat-square-text",
      title: "Dolori Architecto",
      content:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];
  return (
    <div className="services-wrapper">
      <div className="services wrapper">
        <div className="services__title title">
          <div className="stacked">
            <h1>SERVICES</h1>
            <span>SERVICES</span>
          </div>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="services__cards">
          {serviceDatas.map((data, index) => (
            <ServicesCard
              key={index}
              iconClass={data.iconClass}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
