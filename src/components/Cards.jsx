import CardStyle from "../scss/card.module.scss";

//RETURNLU YAPIMI
const Cards = ({ data }) => {
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        const { id, name, job, comment, img } = item;
        return (
          <div className={CardStyle.card} key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <img src={img} alt="img" />
            <p>{comment}</p>
            <div className={CardStyle.buttons}>
              <button className={CardStyle.small}>Small</button>
              <button className={CardStyle.large}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
